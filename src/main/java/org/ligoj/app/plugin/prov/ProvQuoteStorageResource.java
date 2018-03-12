
package org.ligoj.app.plugin.prov;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import org.ligoj.app.plugin.prov.dao.ProvQuoteInstanceRepository;
import org.ligoj.app.plugin.prov.dao.ProvQuoteStorageRepository;
import org.ligoj.app.plugin.prov.dao.ProvStoragePriceRepository;
import org.ligoj.app.plugin.prov.dao.ProvStorageTypeRepository;
import org.ligoj.app.plugin.prov.model.ProvInstancePrice;
import org.ligoj.app.plugin.prov.model.ProvQuote;
import org.ligoj.app.plugin.prov.model.ProvQuoteInstance;
import org.ligoj.app.plugin.prov.model.ProvQuoteStorage;
import org.ligoj.app.plugin.prov.model.ProvStorageOptimized;
import org.ligoj.app.plugin.prov.model.ProvStoragePrice;
import org.ligoj.app.plugin.prov.model.ProvStorageType;
import org.ligoj.app.plugin.prov.model.Rate;
import org.ligoj.app.resource.ServicePluginLocator;
import org.ligoj.bootstrap.core.DescribedBean;
import org.ligoj.bootstrap.core.INamableBean;
import org.ligoj.bootstrap.core.json.TableItem;
import org.ligoj.bootstrap.core.json.datatable.DataTableAttributes;
import org.ligoj.bootstrap.core.validation.ValidationJsonException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

/**
 * The storage part of the provisioning.
 */
@Service
@Path(ProvResource.SERVICE_URL)
@Produces(MediaType.APPLICATION_JSON)
@Transactional
public class ProvQuoteStorageResource extends AbstractCostedResource<ProvQuoteStorage> {

	@Autowired
	protected ServicePluginLocator locator;

	@Autowired
	private ProvQuoteInstanceResource instanceResource;

	@Autowired
	private ProvQuoteInstanceRepository qiRepository;

	@Autowired
	private ProvQuoteStorageRepository qsRepository;

	@Autowired
	private ProvStorageTypeRepository stRepository;

	@Autowired
	private ProvStoragePriceRepository spRepository;

	/**
	 * Delete all storages from a quote. The total cost is updated.
	 * 
	 * @param subscription
	 *            The related subscription.
	 * @return The updated computed cost.
	 */
	@DELETE
	@Path("{subscription:\\d+}/storage")
	@Consumes(MediaType.APPLICATION_JSON)
	public FloatingCost deleteAll(@PathParam("subscription") final int subscription) {
		subscriptionResource.checkVisibleSubscription(subscription);

		// Delete all storages related to any instance, then the instances
		qsRepository.deleteAll(qsRepository.findAllBy("configuration.subscription.id", subscription));

		// Update the cost. Note the effort could be reduced to a simple
		// subtract of storage costs.
		return resource.updateCost(subscription);
	}

	/**
	 * Create the storage inside a quote.
	 * 
	 * @param vo
	 *            The quote storage details.
	 * @return The created instance cost details with identifier.
	 */
	@POST
	@Path("storage")
	@Consumes(MediaType.APPLICATION_JSON)
	public UpdatedCost create(final QuoteStorageEditionVo vo) {
		return saveOrUpdate(new ProvQuoteStorage(), vo);
	}

	/**
	 * Update the storage inside a quote.
	 * 
	 * @param vo
	 *            The quote storage update.
	 * @return The new cost configuration.
	 */
	@PUT
	@Path("storage")
	@Consumes(MediaType.APPLICATION_JSON)
	public UpdatedCost update(final QuoteStorageEditionVo vo) {
		return saveOrUpdate(resource.findConfigured(qsRepository, vo.getId()), vo);
	}

	@Override
	public FloatingCost refresh(final ProvQuoteStorage qs) {
		final ProvQuote quote = qs.getConfiguration();

		// Find the lowest price
		final Integer qi = Optional.ofNullable(qs.getQuoteInstance()).map(ProvQuoteInstance::getId).orElse(null);
		final String location = Optional.ofNullable(qs.getLocation()).map(INamableBean::getName).orElse(null);
		qs.setPrice(
				validateLookup("storage", lookup(quote, qs.getSize(), qs.getLatency(), qi, qs.getOptimized(), location)
						.stream().findFirst().orElse(null), qs.getName()));
		return updateCost(qs);
	}

	/**
	 * Check and return the storage price matching to the requirements and related name.
	 */
	private ProvStoragePrice findByTypeName(final int subscription, final String name, final String location,
			final ProvQuote quote) {
		return assertFound(spRepository.findByTypeName(subscription, name,
				Optional.ofNullable(location).orElse(quote.getLocation().getName())), name);
	}

	/**
	 * Save or update the storage inside a quote.
	 * 
	 * @param entity
	 *            The storage entity to update.
	 * @param vo
	 *            The new quote storage data to persist.
	 * @return The formal entity.
	 */
	private UpdatedCost saveOrUpdate(final ProvQuoteStorage entity, final QuoteStorageEditionVo vo) {
		DescribedBean.copy(vo, entity);

		// Check the associations
		final int subscription = vo.getSubscription();
		final ProvQuote quote = getQuoteFromSubscription(subscription);
		final String node = quote.getSubscription().getNode().getRefined().getId();
		entity.setConfiguration(quote);
		entity.setLocation(resource.findLocation(node, vo.getLocation()));
		entity.setPrice(findByTypeName(subscription, vo.getType(), vo.getLocation(), quote));
		entity.setInstanceCompatible(vo.getInstanceCompatible());
		entity.setLatency(vo.getLatency());
		entity.setOptimized(vo.getOptimized());
		entity.setSize(vo.getSize());

		// Check the related quote instance
		entity.setQuoteInstance(
				Optional.ofNullable(vo.getQuoteInstance()).map(i -> resource.findConfigured(qiRepository, i)).map(i -> {
					resource.checkVisibility(i.getPrice().getType(), node);
					return i;
				}).orElse(null));

		// Check the storage requirements to validate the linked price
		final ProvStorageType type = entity.getPrice().getType();
		if (!lookup(quote, entity.getSize(), entity.getLatency(), vo.getQuoteInstance(), entity.getOptimized(),
				vo.getLocation()).stream().map(qs -> qs.getPrice().getType()).anyMatch(type::equals)) {
			// The related storage type does not match these requirements
			throw new ValidationJsonException("type", "type-incompatible-requirements", type.getName());
		}

		// Save and update the costs
		final UpdatedCost cost = newUpdateCost(qsRepository, entity, this::updateCost);
		Optional.ofNullable(entity.getQuoteInstance()).ifPresent(
				q -> cost.setRelatedCosts(Collections.singletonMap(q.getId(), instanceResource.updateCost(q))));
		return cost;
	}

	/**
	 * Delete a storage from a quote. The total cost is updated.
	 * 
	 * @param id
	 *            The {@link ProvQuoteStorage}'s identifier to delete.
	 * @return The updated computed cost.
	 */
	@DELETE
	@Path("storage/{id:\\d+}")
	@Consumes(MediaType.APPLICATION_JSON)
	public FloatingCost delete(@PathParam("id") final int id) {
		return deleteAndUpdateCost(qsRepository, id, Function.identity()::apply);
	}

	/**
	 * Return the storage types the instance inside a quote.
	 * 
	 * @param subscription
	 *            The subscription identifier, will be used to filter the storages from the associated provider.
	 * @param uriInfo
	 *            filter data.
	 * @return The valid storage types for the given subscription.
	 */
	@GET
	@Path("{subscription:\\d+}/storage-type")
	@Consumes(MediaType.APPLICATION_JSON)
	public TableItem<ProvStorageType> findType(@PathParam("subscription") final int subscription,
			@Context final UriInfo uriInfo) {
		subscriptionResource.checkVisibleSubscription(subscription);
		return paginationJson.applyPagination(uriInfo,
				stRepository.findAll(subscription, DataTableAttributes.getSearch(uriInfo),
						paginationJson.getPageRequest(uriInfo, ProvResource.ORM_COLUMNS)),
				Function.identity());
	}

	/**
	 * Return the available storage types from the provider linked to the given subscription..
	 * 
	 * @param subscription
	 *            The subscription identifier, will be used to filter the storage types from the associated provider.
	 * @param size
	 *            The requested size in GB.
	 * @param latency
	 *            The optional requested minimal {@link Rate} class.
	 * @param instance
	 *            The optional requested quote instance to be associated.
	 * @param optimized
	 *            The optional requested {@link ProvStorageOptimized}.
	 * @param location
	 *            Optional location name. May be <code>null</code>.
	 * @return The valid storage types for the given subscription.
	 */
	@GET
	@Path("{subscription:\\d+}/storage-lookup")
	@Consumes(MediaType.APPLICATION_JSON)
	public List<QuoteStorageLoopup> lookup(@PathParam("subscription") final int subscription,
			@DefaultValue(value = "1") @QueryParam("size") final int size, @QueryParam("latency") final Rate latency,
			@QueryParam("instance") final Integer instance,
			@QueryParam("optimized") final ProvStorageOptimized optimized,
			@QueryParam("location") final String location) {

		// Check the security on this subscription
		return lookup(getQuoteFromSubscription(subscription), size, latency, instance, optimized, location);
	}

	private List<QuoteStorageLoopup> lookup(final ProvQuote configuration, final int size, final Rate latency,
			final Integer instance, final ProvStorageOptimized optimized, final String location) {

		// Get the attached node and check the security on this subscription
		final String node = configuration.getSubscription().getNode().getId();

		// The the right location from instance first
		final String resolvedLocation = Optional.ofNullable(location)
				.orElseGet(() -> configuration.getLocation().getName());

		return spRepository
				.findLowestPrice(node, size, latency, instance, optimized, resolvedLocation, PageRequest.of(0, 10))
				.stream().map(spx -> (ProvStoragePrice) spx[0]).map(sp -> newPrice(sp, size, getCost(sp, size)))
				.collect(Collectors.toList());
	}

	/**
	 * Build a new {@link QuoteInstanceLookup} from {@link ProvInstancePrice} and computed price.
	 */
	private QuoteStorageLoopup newPrice(final ProvStoragePrice sp, final int size, final double cost) {
		final QuoteStorageLoopup result = new QuoteStorageLoopup();
		result.setCost(cost);
		result.setPrice(sp);
		result.setSize(size);
		return result;
	}

	@Override
	protected FloatingCost getCost(final ProvQuoteStorage quoteStorage) {
		final double base = getCost(quoteStorage.getPrice(), quoteStorage.getSize());
		return Optional.ofNullable(quoteStorage.getQuoteInstance()).map(i -> instanceResource.computeFloat(base, i))
				.orElseGet(() -> new FloatingCost(base));
	}

	/**
	 * Compute the cost of a storage.
	 * 
	 * @param storagePrice
	 *            The storage to evaluate.
	 * @param size
	 *            The requested size in GB.
	 * @return The cost of this storage.
	 */
	private double getCost(final ProvStoragePrice storagePrice, final int size) {
		return round(Math.max(size, storagePrice.getType().getMinimal()) * storagePrice.getCostGb()
				+ storagePrice.getCost());
	}

}
