/*
 * Licensed under MIT (https://github.com/ligoj/ligoj/blob/master/LICENSE)
 */
package org.ligoj.app.plugin.prov;

import java.util.List;

import org.ligoj.app.iam.SimpleUserOrg;
import org.ligoj.app.plugin.prov.model.ProvLocation;
import org.ligoj.app.plugin.prov.model.ProvQuoteInstance;
import org.ligoj.app.plugin.prov.model.ProvQuoteStorage;
import org.ligoj.app.plugin.prov.model.ProvUsage;
import org.ligoj.app.plugin.prov.model.TerraformStatus;
import org.ligoj.bootstrap.core.DescribedAuditedBean;

import lombok.Getter;
import lombok.Setter;

/**
 * The complete data of a quote.
 */
@Getter
@Setter
public class QuoteVo extends DescribedAuditedBean<SimpleUserOrg, Integer> {

	/**
	 * SID
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Monthly cost, computed during the creation.
	 */
	private FloatingCost cost;

	/**
	 * The optional Terraform status.
	 */
	private TerraformStatus terraformStatus;

	/**
	 * Quoted instance.
	 */
	private List<ProvQuoteInstance> instances;

	/**
	 * Related storages instance.
	 */
	private List<ProvQuoteStorage> storages;

	/**
	 * Default location of this quote.
	 */
	private ProvLocation location;

	/**
	 * Default usage of this quote. May be <code>null</code>.
	 */
	private ProvUsage usage;

	/**
	 * Default license model. May be <code>null</code>, equivalent to 'INCLUDED'.
	 */
	private String license;

	/**
	 * Rate applied to required RAM to lookup the suiting instance type. This rate is divided by <code>100</code>, then
	 * multiplied to the required RAM of each memory before calling the lookup. Values lesser than <code>100</code>
	 * allows the lookup to elect an instance having less RAM than the requested one. Value greater than
	 * <code>100</code> makes the lookup to request instance types providing more RAM than the requested one.
	 */
	private int ramAdjustedRate = 100;
}
