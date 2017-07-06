define({
	'root': {
		'service:prov': 'Provisioning',
		'service:prov:manage': 'Manage',
		'service:prov:instances-block': 'Instances',
		'service:prov:storages-block': 'Storages',
		'service:prov:os': 'OS',
		'service:prov:os-title': 'Operating System',
		'service:prov:os-help': 'Operating System pre-installed for this instance. The instance price includes the corresponding license, and is often in relation to the amount of running CPU',
		'service:prov:cpu': 'CPU',
		'service:prov:cpu-any': 'Any',
		'service:prov:cpu-variable': 'Variable',
		'service:prov:cpu-constant': 'Constant',
		'service:prov:cpu-title': 'Operating System',
		'service:prov:cpu-help': 'The requested CPU. The best instance matching to this requirement may include more than this amount. So it is important to request a balanced resource (CPU/RAM) to limit this loss.<div class=\'text-left\'><i class=\'fa fa-bolt fa-fw\'></i> Variable CPU has credit with turbo.<br><i class=\'fa fa-minus fa-fw\'></i> Constant CPU delivers a continous power.</div>',
		'service:prov:ram': 'RAM',
		'service:prov:ram-mega': 'MB',
		'service:prov:ram-giga': 'GB',
		'service:prov:ram-help': 'The requested memory in MB. The best instance matching to this requirement may include more than this amount. So it is important to request a balanced resource (CPU/RAM) to limit this loss',
		'service:prov:instance-name': 'Server',
		'service:prov:instance-name-title': 'Logical server name',
		'service:prov:instance-quantity': 'Quantity',
		'service:prov:instance-quantity-to': 'to',
		'service:prov:instance-quantity-help': 'Quantity of this instance. The associated storages and the total cost will reflect this amount',
		'service:prov:instance-quantity-title': 'Variable quantity of this instance. When the max quantity is not provided, the cost is unbounded. When the max is different from the min quantity, auto-scale is automatically enabled',
		'service:prov:instance-auto-scale-title': 'Auto-scale capability is automatically enabled when the maximal and the minimal quantities are different',
		'service:prov:instance': 'Instance',
		'service:prov:instance-title': 'VM type with predefined resources',
		'service:prov:instance-help': 'The best instance matching to the required resource',
		'service:prov:instance-custom': 'Custom instance',
		'service:prov:instance-custom-title': 'VM type with custom resources',
		'service:prov:instance-deleted': 'Instance "{{[0]}}" ({{[1]}}) is deleted',
		'service:prov:instance-cleared': 'All instances and attached storages have been deleted',
		'service:prov:instance-choice': 'The best instance of the provider is determined from the provided requirements',
		'service:prov:instance-type': 'Type',
		'service:prov:instance-type-title': 'Instance type of the provider',
		'service:prov:instance-max-variable-cost': 'Max cost',
		'service:prov:instance-max-variable-cost-title': 'Maximum cost this instance would be valid',
		'service:prov:instance-max-variable-cost-help': 'Optional maximum cost this instance would be valid. When undefined, there is no limit. When the threshold is reached the instance would be terminated.',
		'service:prov:internet': 'Internet access',
		'service:prov:internet-title': 'Internet access from/to this instance',
		'service:prov:internet-help': 'Internet access option. Public access will be an Internet facing instance.',
		'service:prov:price-type': 'Usage',
		'service:prov:price-type-title': 'Price condition and usage',
		'service:prov:price-type-help': 'Price condition, period and contract. In general, the shortest is the contract, the more expensive is the instance',
		'service:prov:price-type-upload': 'Default usage',
		'service:prov:price-type-upload-help': 'Price condition, period and contract used when no condition are present in the imported file. In general, the shortest is the contract, the more expensive is the instance',
		'service:prov:memory-unit-upload': 'Memory unit',
		'service:prov:memory-unit-upload-help': 'Memory unit for RAM within the imported file',
		'service:prov:storage': 'Storage',
		'service:prov:storage-title': 'Block Storage, in GB',
		'service:prov:storage-type': 'Type',
		'service:prov:storage-type-title': 'Storage type of the provider',
		'service:prov:storage-frequency': 'Frequency',
		'service:prov:storage-frequency-help': 'How often the stored data is accessed',
		'service:prov:storage-frequency-title': 'Storage frequency access',
		'service:prov:storage-frequency-cold': 'Cold',
		'service:prov:storage-frequency-cold-title': 'Infrequent access, medium to high latency. Not suitable for boot instance',
		'service:prov:storage-frequency-hot': 'Hot',
		'service:prov:storage-frequency-hot-title': 'Frequent access, low latency',
		'service:prov:storage-frequency-archive': 'Archive',
		'service:prov:storage-frequency-archive-title': 'Very infrequent access, or high latency. Not suitable for instance',
		'service:prov:storage-select': 'Specify the storage size in GB',
		'service:prov:storage-optimized': 'Optimized',
		'service:prov:storage-optimized-title': 'Storage optimization purpose',
		'service:prov:storage-optimized-help': 'What is the most important for this storage',
		'service:prov:storage-optimized-throughput': 'Throughput',
		'service:prov:storage-optimized-throughput-title': 'Data volume exchange, generally HDD based storage',
		'service:prov:storage-optimized-iops': 'IOPS',
		'service:prov:storage-optimized-iops-title': 'I/O per seconds, generally SSD based storage',
		'service:prov:storage-instance-title': 'Related instance of this storage. Is deleted when instance is deleted, even if their life cycle is independent at runtime',
		'service:prov:storage-instance-help': 'Related instance',
		'service:prov:storage-size': 'Size',
		'service:prov:storage-size-title': 'Block size in GB',
		'service:prov:storage-deleted': 'Storage "{{[0]}}" ({{[1]}}) is deleted',
		'service:prov:storage-cleared': 'All storages have been deleted',
		'service:prov:cost': 'Cost',
		'service:prov:cost-title': 'Monthly billed',
		'service:prov:resources': 'Resources',
		'service:prov:total-ram': 'Total memory',
		'service:prov:total-cpu': 'Total CPU',
		'service:prov:total-storage': 'Total storage',
		'service:prov:nb-instances': 'Number of instances',
		'service:prov:cost-month': 'Month',
		'service:prov:efficiency-title': 'Global efficiency of this quote : CPU, RAM and storage',
		'service:prov:price-type-lowest': 'Lowest, auto',
		'service:prov:terraform:execute': 'Execute',
		'service:prov:terraform:started': 'Terraform started',
		'instance-import-message': 'Import instances from a CSV file, <code> ;</code> as separator',
		'instance-import-sample': 'Sample',
		'service:prov:cost-refresh-title': 'Refresh (full compute) the global cost',
		'service:prov:refresh-needed': 'The global cost has been updated, reload the details ...'
	},
	'fr': true
});
