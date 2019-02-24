/*
 * Licensed under MIT (https://github.com/ligoj/ligoj/blob/master/LICENSE)
 */
package org.ligoj.app.plugin.prov;

import java.util.function.Consumer;

import javax.transaction.Transactional;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.ligoj.app.plugin.prov.dao.ProvQuoteRepository;
import org.ligoj.app.plugin.prov.model.AbstractPrice;
import org.ligoj.app.plugin.prov.model.AbstractQuoteResource;
import org.ligoj.app.plugin.prov.model.Costed;
import org.ligoj.app.plugin.prov.model.ProvQuote;
import org.ligoj.app.resource.subscription.SubscriptionResource;
import org.ligoj.bootstrap.core.dao.RestRepository;
import org.ligoj.bootstrap.core.json.PaginationJson;
import org.ligoj.bootstrap.core.model.AbstractNamedEntity;
import org.ligoj.bootstrap.core.validation.ValidationJsonException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Getter;

/**
 * The common features of a costed entity.
 *
 * @param <C>
 *            Quoted resource type.
 * @param <P>
 *            Quoted resource price type.
 * @param <T>
 *            Quoted resource price type type.
 */
@Service
@Path(ProvResource.SERVICE_URL)
@Produces(MediaType.APPLICATION_JSON)
@Transactional
public abstract class AbstractCostedResource<T extends AbstractNamedEntity<?>, P extends AbstractPrice<T>, C extends AbstractQuoteResource<P>>
		implements QuoteRelated<C> {

	@Autowired
	protected PaginationJson paginationJson;

	@Autowired
	@Getter
	protected SubscriptionResource subscriptionResource;

	@Autowired
	@Getter
	private ProvQuoteRepository repository;

	@Autowired
	protected ProvResource resource;

	/**
	 * Check the lookup succeed.
	 *
	 * @param resourceType
	 *            The resource type you are looking for. Will be used to generate the error when not found.
	 * @param lookup
	 *            The expected not null lookup.
	 * @param context
	 *            The key identifier of the lookup. Will be used to generate the error when not found.
	 * @return The price of the not <code>null</code> lookup. Never <code>null</code>.
	 * @param <T>
	 *            The price type.
	 */
	public P validateLookup(final String resourceType, final AbstractLookup<P> lookup, final String context) {
		if (lookup == null) {
			throw new ValidationJsonException(resourceType, "no-match-" + resourceType, "resource", context);
		}
		return lookup.getPrice();
	}

	/**
	 * Update the total cost of the associated quote, and then delete a configured entity.
	 *
	 * @param repository
	 *            The repository managing the entity to delete.
	 * @param id
	 *            The entity's identifier to delete.
	 * @param callback
	 *            The {@link Consumer} call after the updated cost and before the actual deletion.
	 * @return The parent quote configuration.
	 * @param <Q>
	 *            The quote resource type.
	 */
	protected <Q extends AbstractQuoteResource<?>> ProvQuote deleteAndUpdateCost(
			final RestRepository<Q, Integer> repository, final Integer id, final Consumer<Q> callback) {
		// Check the entity exists and is visible
		final Q entity = resource.findConfigured(repository, id);

		// Remove the cost of this entity
		addCost(entity, e -> {
			e.setCost(0d);
			e.setMaxCost(0d);
			return new FloatingCost();
		});

		// Callback before the deletion
		callback.accept(entity);

		// Delete the entity
		repository.deleteById(id);

		return entity.getConfiguration();
	}

	/**
	 * Update the actual monthly cost of given resource.
	 *
	 * @param qr
	 *            The {@link Costed} to update cost.
	 * @return The new cost.
	 */
	protected FloatingCost updateCost(final C qr) {
		return updateCost(qr, this::getCost);
	}

	/**
	 * Compute the monthly cost of the given resource.
	 *
	 * @param qr
	 *            The {@link Costed} resource to evaluate.
	 * @return The cost of this instance.
	 */
	protected abstract FloatingCost getCost(final C qr);
}
