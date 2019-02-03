/*
 * Licensed under MIT (https://github.com/ligoj/ligoj/blob/master/LICENSE)
 */
package org.ligoj.app.plugin.prov.model;

import java.io.Serializable;

import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

import org.ligoj.bootstrap.core.model.AbstractNamedEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * An priced database instance with billing configuration. <br>
 * The cost attribute is the corresponding effective monthly cost of this instance. Includes the initial cost to
 * allow quick sort. To compute the remaining monthly cost reduced by the initial cost, the formula is :
 * <code>cost - (initialCost / 24 / 365)</code>.
 *
 * @param <T>
 *            Resource type.
 */
@Getter
@Setter
@ToString(of = { "term", "license" }, callSuper = true)
@MappedSuperclass
public abstract class AbstractTermPrice<T extends AbstractNamedEntity<?>> extends AbstractPrice<T>
		implements Serializable {

	/**
	 * The optional initial cost required to use this instance. May be <code>null</code>.
	 */
	private Double initialCost;

	/**
	 * The cost for the period.<br>
	 */
	private double costPeriod;

	@NotNull
	@ManyToOne
	private ProvInstancePriceTerm term;

	/**
	 * Optional built-in license model. Special license term is {@value #LICENSE_BYOL}. When <code>null</code>, license
	 * is included in the price or not applicable.
	 */
	private String license;

}
