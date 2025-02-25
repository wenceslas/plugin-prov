/*
 * Licensed under MIT (https://github.com/ligoj/ligoj/blob/master/LICENSE)
 */
package org.ligoj.app.plugin.prov.model;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import org.hibernate.annotations.ColumnDefault;
import org.ligoj.bootstrap.core.model.AbstractDescribedEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * A resource with floating cost.
 *
 * @param <P> Price configuration type.
 */
@Getter
@Setter
@MappedSuperclass
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public abstract class AbstractQuote<P extends AbstractPrice<?>> extends AbstractDescribedEntity<Integer>
		implements Costed {

	/**
	 * SID
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * The minimal computed monthly cost of the resource.
	 */
	@NotNull
	@PositiveOrZero
	private double cost;

	/**
	 * Maximal determined monthly cost of the resource. When there is an unbound maximal (<code>null</code>) quantity,
	 * the minimal cost is used.
	 */
	@NotNull
	@PositiveOrZero
	private double maxCost;

	/**
	 * Minimal initial cost. Does not include support cost.
	 */
	@NotNull
	@PositiveOrZero
	private double initialCost = 0d;

	/**
	 * Maximal initial cost. Does not include support cost.
	 *
	 * @see #maxCost
	 */
	@NotNull
	@PositiveOrZero
	private double maxInitialCost = 0d;
	/**
	 * The parent quote.
	 */
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private ProvQuote configuration;

	/**
	 * Optional expected location for this resource.
	 */
	@ManyToOne
	private ProvLocation location;

	/**
	 * Return resolved price configuration.
	 *
	 * @return Resolved price configuration.
	 */
	public abstract P getPrice();

	/**
	 * Set the resolved price configuration.
	 *
	 * @param price The resolved price.
	 */
	public abstract void setPrice(P price);

	/**
	 * Return the effective location applied to the current resource.
	 *
	 * @return The related location. Never <code>null</code>.
	 */
	@Transient
	@JsonIgnore
	public ProvLocation getResolvedLocation() {
		return location == null ? getConfiguration().getLocation() : location;
	}

	/**
	 * Return the resource type.
	 *
	 * @return The resource type.
	 */
	public abstract ResourceType getResourceType();

	/**
	 * The minimal computed monthly CO2 consumption of the resource.
	 */
	@NotNull
	@PositiveOrZero
	@ColumnDefault("0")
	private double co2 = 0d;

	/**
	 * Maximal determined monthly CO2 consumption of the resource. When there is an unbound maximal (<code>null</code>)
	 * quantity, the minimal co2 is used.
	 */
	@NotNull
	@PositiveOrZero
	@ColumnDefault("0")
	private double maxCo2 = 0d;

}
