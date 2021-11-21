/*
 * Licensed under MIT (https://github.com/ligoj/ligoj/blob/master/LICENSE)
 */
define({
    'root': {
        'global-configuration': 'Global configuration',
        'instance-import-message': 'Import instances from a CSV file, <code> ;</code> as separator',
        'instance-import-sample': 'Sample',
        'quote-assumptions': 'Assumptions',
        'quote-ram-adjust': 'Adjustment rate applied to required RAM to lookup the suiting instance type. Below 100%, the lookup value will be lesser than required value. Above 100%, the lookup will use a greater value than the required one.',
        'service:prov:reservation-mode-reserved': 'Reserved',
        'service:prov:reservation-mode-max': 'Maximal used',
        'service:prov:reservation-mode-help': 'Lookup mode based on observed or reserved CPU/RAM values',
        'service:prov': 'Provisioning',
        'service:prov:nb': 'Nb',
        'service:prov:date': 'Date',
        'service:prov:manage': 'Manage',
        'service:prov:currency': 'Currency',
        'service:prov:default': 'Default',
        'service:prov:network': 'Network',
        'service:prov:no-requirement': 'No requirement',
        'service:prov:instances-block': 'Instances',
        'service:prov:storages-block': 'Storages',
        'service:prov:support-block': 'Supports',
        'service:prov:support-access-all': 'All',
        'service:prov:support-access-technical': 'Technical',
        'service:prov:support-access-billing': 'Billing',
        'service:prov:support-api': 'API',
        'service:prov:support-api-help': 'Who need to access to support using API',
        'service:prov:support-phone': 'Phone',
        'service:prov:support-phone-help': 'Who need to access to support using phone',
        'service:prov:support-email': 'Mail',
        'service:prov:support-email-help': 'Who need to access to support using e-mail',
        'service:prov:support-chat': 'Chat',
        'service:prov:support-chat-help': 'Who need to access to support using chat',
        'service:prov:support-level': 'Level',
        'service:prov:support-level-help': 'Support level',
        'service:prov:support-level-low': 'General guidance',
        'service:prov:support-level-medium': 'Contextual guidance',
        'service:prov:support-level-good': 'Contextual review',
        'service:prov:support-seats': 'Seats',
        'service:prov:support-seats-help': 'Required seats. When undefined, will be be unlimited',
        'service:prov:support-type': 'Type',
        'service:prov:support-type-help': 'Support type',
        'service:prov:support-commitment': 'Commitment',
        'service:prov:os': 'OS',
        'service:prov:os-help': 'Operating System pre-installed for this instance. The instance price includes the corresponding license, and is often in relation to the amount of running CPU',
        'service:prov:cpu': 'CPU',
        'service:prov:cpu-help': 'The requested CPU. The best instance matching to this requirement may include more than this amount. So it is important to request a balanced resource (CPU/RAM) to limit this loss.<div class=\'text-left\'><i class=\'fas fa-bolt fa-fw\'></i> Variable CPU has credit with turbo.<br><i class=\'fas fa-minus fa-fw\'></i> Constant CPU delivers a continuous power.</div>',
        'service:prov:gpu': 'GPU',
        'service:prov:gpu-help':'The requested GPU.',
        'service:prov:constant-null': 'Any',
        'service:prov:constant-false': 'Variable',
        'service:prov:constant-true': 'Constant',
        'service:prov:physical-null': 'Any',
        'service:prov:physical-false': 'Virtual',
        'service:prov:physical-true': 'Physical',
        'service:prov:physical-help': 'Physical (metal) or virtual constraint',
        'service:prov:ram': 'RAM',
        'service:prov:ram-mega': 'MB',
        'service:prov:ram-giga': 'GB',
        'service:prov:ram-tera': 'TB',
        'service:prov:ram-help': 'The requested memory in. The best instance matching to this requirement may include more than this amount. So it is important to request a balanced resource (CPU/RAM) to limit this loss',
        'service:prov:instance-quantity': 'Quantity',
        'service:prov:instance-quantity-to': 'to',
        'service:prov:instance-quantity-help': 'Variable quantity of this instance. When the max quantity is not provided, the cost is unbounded. When the max is different from the min quantity, auto-scale is automatically enabled',
        'service:prov:instance-auto-scale-help': 'Auto-scale capability is automatically enabled when the maximal and the minimal quantities are different',
        'service:prov:instance': 'Instance',
        'service:prov:instance-help': 'The best instance type matching to the required resource',
        'service:prov:instance-custom': 'Custom instance',
        'service:prov:instance-custom-help': 'VM type with custom resources',
        'service:prov:instance-cleared': 'All instances and attached storages have been deleted',
        'service:prov:instance-choice': 'The best price is determined from the provided requirements',
        'service:prov:instance-type': 'Type',
        'service:prov:instance-type-help': 'Instance type of the provider',
        'service:prov:instance-ephemeral': 'Ephemeral',
        'service:prov:instance-ephemeral-help': 'Accepting ephemeral allow instance where provider could terminate it. Optionally, provide a maximum cost this instance would be valid. When undefined, there is no limit. When the threshold is reached the instance would be terminated.',
        'service:prov:instance-max-variable-cost': 'Max cost',
        'service:prov:instance-max-variable-cost-help': 'Maximal cost where this instance will be up. When undefined, no limit. When its limit is reached, this instance is terminated.',
        'service:prov:internet': 'Internet access',
        'service:prov:internet-help': 'Internet access option. Public access will be an Internet facing instance.',
        'service:prov:license': 'License',
        'service:prov:license-included': 'Included',
        'service:prov:license-byol': 'BYOL - License Mobility',
        'service:prov:license-help': 'The OS and the software licenses are included in the cost for "Included" option.<br>Currently only WINDOWS OS.<br>When undefined, the default license mode is used.',
        'service:prov:term': 'Term',
        'service:prov:term-help': 'Price condition, period and contract. In general, the shortest is the contract, the more expensive is the instance',
        'service:prov:merge-upload': 'Merge mode',
        'service:prov:merge-upload-help': 'The merge option indicates how the entries are inserted',
        'service:prov:merge-upload-update': 'Update',
        'service:prov:merge-upload-update-help': 'The existing entries will be updated with the not null values of this file',
        'service:prov:merge-upload-keep': 'Keep',
        'service:prov:merge-upload-keep-help': 'The existing entries are not touched, the new entries with the same name use counters as suffix',
        'service:prov:merge-upload-insert': 'insert',
        'service:prov:merge-upload-insert-help': 'Inserting an entry with the same name causes an error',
        'service:prov:memory-unit-upload': 'Memory unit',
        'service:prov:memory-unit-upload-help': 'Memory unit for RAM in the imported file',
        'service:prov:container': 'Container',
        'service:prov:container-type': 'Type',
        'service:prov:container-type-help': 'Container type of the provider',
        'service:prov:container-quantity': 'Quantity',
        'service:prov:container-quantity-help': 'Amount of containers',
        'service:prov:container-size': 'Size',
        'service:prov:containers-block': 'Containers',
        'service:prov:function': 'Function',
        'service:prov:function-requests-help' : 'Amount of invocations (in million) of this function during one month',
        'service:prov:function-duration-help': 'Maximal execution duration (in ms) of this function',
        'service:prov:function-concurrency-help': 'The average concurrency of this function. This parameter is hard to provides, and should correspond to a p99 value and not the actual average. Can be lesser than 1',
        'service:prov:function-requests' : 'Requests',
        'service:prov:function-millions' : 'Millions',
        'service:prov:function-milliseconds' : 'Milliseconds',
        'service:prov:function-duration': 'Duration',
        'service:prov:function-concurrency': 'Concurrency',
        'service:prov:functions-block': 'Functions',
        'service:prov:database': 'Database',
        'service:prov:database-type': 'Type',
        'service:prov:database-type-help': 'Database type of the provider',
        'service:prov:database-quantity': 'Quantity',
        'service:prov:database-quantity-help': 'Amount of database instances',
        'service:prov:database-engine': 'Engine',
        'service:prov:database-engine-help': 'Database engine: MySQL,...',
        'service:prov:database-edition': 'Edition',
        'service:prov:database-edition-help': 'Database edition for this engine',
        'service:prov:database-size': 'Size',
        'service:prov:databases-block': 'Databases',
        'service:prov:ramAdjustedRate-failed': 'RAM overhead to {{this}}%  makes some instances unavailable',
        'service:prov:reservedMode-failed': 'Reservation mode {{this}} makes some instances unavailable',
        'service:prov:processor-failed': 'Processor type {{this}} makes some instances unavailable',
        'service:prov:processor-default': 'Any',
        'service:prov:processor': 'Processor',
        'service:prov:processor-help': 'Required processor type. Only instance type matching to this type will be used. Vendor name are also accepted: "Intel", "AMD",...<br>Case is insensitive, and a contains is used for the match.',
        'service:prov:default-failed': 'Property "{{name}}" with value "{{value}}" makes some instances unavailable',
        'service:prov:storage': 'Storage',
        'service:prov:storage-giga': 'GiB',
        'service:prov:storage-help': 'Block Storage, in GiB',
        'service:prov:storage-quantity': 'Quantity',
        'service:prov:storage-quantity-help': 'Amount of storage volumes. When linked to an instance, corresponds to the quantity of the related instances.',
        'service:prov:storage-type': 'Type',
        'service:prov:storage-type-help': 'Storage type of the provider',
        'service:prov:storage-latency': 'Latency',
        'service:prov:storage-latency-help': 'Storage latency class. The lowest is the best.',
        'service:prov:storage-latency-invalid-help': 'Storage not directly readable or writable',
        'service:prov:storage-select': 'Specify the storage size in GiB',
        'service:prov:storage-optimized': 'Optimized',
        'service:prov:storage-optimized-help': 'What is the most important for this storage',
        'service:prov:storage-optimized-throughput': 'Throughput',
        'service:prov:storage-optimized-throughput-help': 'Data volume exchange, generally HDD based storage',
        'service:prov:storage-optimized-iops': 'IOPS',
        'service:prov:storage-optimized-iops-help': 'I/O per seconds, generally SSD based storage',
        'service:prov:storage-optimized-durability': 'Durability',
        'service:prov:storage-optimized-durability-help': 'Data durability over performance',
        'service:prov:storage-instance': 'Attachment',
        'service:prov:storage-instance-help': 'Related instance or database this storage is attached to. Is deleted when instance is deleted, even if their life cycle is independent at runtime',
        'service:prov:storage-size': 'Size',
        'service:prov:storage-size-help': 'Required size in GiB. Depending on this value the available types vary',
        'service:prov:storage-cleared': 'All storages have been deleted',
        'service:prov:no-attached-instance': 'No attached resource',
        'service:prov:cannot-attach-instance': 'Not available',
        'service:prov:cost': 'Cost',
        'service:prov:cost-help': 'Monthly billed',
        'service:prov:rate-invalid': 'N/A',
        'service:prov:rate-worst': 'Worst',
        'service:prov:rate-low': 'Low',
        'service:prov:rate-medium': 'Medium',
        'service:prov:rate-good': 'Good',
        'service:prov:rate-best': 'Best',
        'service:prov:resources': 'Resources',
        'service:prov:tag-help':'Tags of resources',
        'service:prov:total': 'Total',
        'service:prov:total-ram': 'Total memory',
        'service:prov:total-cpu': 'Total CPU',
        'service:prov:total-storage': 'Total storage',
        'service:prov:total-requests': 'Total requests',
        'service:prov:nb-public-access': 'Number of Internet facing instances',
        'service:prov:nb-instances': 'Number of instances',
        'service:prov:nb-databases': 'Total number of databases',
        'service:prov:nb-containers': 'Total number of containers',
        'service:prov:nb-functions': 'Total number of functions',
        'service:prov:cost-month': 'Month',
        'service:prov:efficiency-help': 'Global efficiency of this quote : CPU, RAM and storage',
        'service:prov:support': 'Support',
        'service:prov:support-help': 'Enabled supports',
        'service:prov:terraform:download': 'Download workspace',
        'service:prov:terraform:target': 'Target provider parameters',
        'service:prov:terraform:execute': 'Execute',
        'service:prov:terraform:destroy': 'Destroy',
        'service:prov:terraform:destroy-alert': 'You are destroying the all resources of the project <strong>{{this}}</strong>. This not a reversible operation.',
        'service:prov:terraform:destroy-confirm': 'Please type in the project to confirm',
        'service:prov:terraform:started': 'Terraform started',
        'service:prov:terraform:cidr': 'CIDR',
        'service:prov:terraform:private-subnets': 'Private subnets',
        'service:prov:terraform:public-subnets': 'Public subnets',
        'service:prov:terraform:public-key': 'Public key',
        'service:prov:terraform:key-name': 'Key name',
        'service:prov:terraform:status': 'Started {{startDate}} by {{author}}{{#if toAdd}}, {{toAdd}} to add{{/if}}{{#if toUpdate}}, {{toUpdate}} to update{{/if}}{{#if toReplace}}, {{toReplace}} to replace (x2){{/if}}{{#if toDestroy}}, {{toDestroy}} to destroy{{/if}} {{#if failed}}<i class="text-danger fas fa-exclamation-circle" data-toggle="tooltip" title="Failed {{endDate}} at <strong>{{command}}</strong> command<br>See logs for details"></i>{{else}}{{#if end}}<i class="text-success fas fa-check-circle" data-toggle="tooltip" title="Succeed {{endDate}}"></i>{{else}}<i class="text-primary fas fa-sync-alt fa-spin" data-toggle="tooltip" title="Pending <strong>{{command}}</strong> command..."></i>{{/if}}{{/if}}',
        'service:prov:terraform:status-generate': 'Generating',
        'service:prov:terraform:status-clean': 'Cleaning',
        'service:prov:terraform:status-secrets': 'Generating secrets',
        'service:prov:terraform:status-command': 'Terraform <strong>{{this}}</strong> command',
        'service:prov:terraform:status-completed': 'Terraform <strong>{{[0]}}</strong>: {{[1]}}/{{[2]}} completed changes',
        'service:prov:terraform:status-completing': 'Terraform <strong>{{[0]}}</strong>: completing {{[1]}} changes',
        'service:prov:terraform-dashboard': 'Live provider dashboard',
        'service:prov:cost-refresh-help': 'Refresh (full compute) the global cost',
        'service:prov:refresh-needed': 'The global cost has been updated, reloading the details ...',
        'service:prov:refresh-no-change': 'No updated cost',
        'service:prov:location-failed': 'Location {{this}} does not support all your requirements',
        'service:prov:location': 'Location',
        'service:prov:location-help': 'Geographical location of this resource. Prices depend on the elected location. When undefined, the default quote\'s location is used.',
        'service:prov:software-none': 'None',
        'service:prov:software': 'Software',
        'service:prov:software-help': 'Pre-installed software for this instance. Hourly price includes its cost, the contract is between the provider and the editor.',
        'service:prov:tags': 'Tags',
        'service:prov:usage-failed': 'Usage {{this}} does not support all your requirements',
        'service:prov:usage-null': 'Always used',
        'service:prov:usage-help': 'Chosen usage will infer the term, and the best cost. Available usages are at the subscription level. When undefined, the default usage is used. And when there is no default usage, it will be 100% for one month.',
        'service:prov:usage': 'Usage profile',
        'service:prov:usage-upload-help': 'Default usage to associate to each imported entry when undefined',
        'service:prov:usage-default': 'Default usage rate : {{this}}%',
        'service:prov:usage-actual-cost': 'Actual usage rate : {{this}}%',
        'service:prov:usage-partial': 'Use only {{[0]}} of {{[1]}} available ({{[2]}}%)',
        'service:prov:usage-rate': 'Rate',
        'service:prov:usage-rate-help': 'Usage rate corresponding to the time the corresponding resource must be available. 100% implies always up.',
        'service:prov:usage-duration': 'Duration',
        'service:prov:usage-duration-help': 'Estimated committed duration for this usage. Depending on this value the best term is determined.',
        'service:prov:usage-start': 'Start',
        'service:prov:usage-start-help': 'Positive or negative delay in month when this usage starts.',
        'service:prov:usage-template-full': 'Full time',
        'service:prov:budget-failed': 'Budget {{this}} does not support all your requirements',
        'service:prov:budget-help': 'Chosen budget will infer the term, and the best cost. Available budgets are at the subscription level. When undefined, the default budget is used. And when there is no default budget, it will be considered with no cash available.',
        'service:prov:budget': 'Budget profile',
        'service:prov:budget-null': 'No cash',
        'service:prov:budget-upload-help': 'Default budget profile to associate to each imported entry when undefined',
        'service:prov:budget-default': 'Default budget : {{this}}',
        'service:prov:budget-initialCost': 'Available cash:',
        'service:prov:budget-initialCost-help': 'Available cash dedicated to this budget',
        'service:prov:export:instances': 'Export',
        'service:prov:export:instances:inline': 'CSV Inlined, compatible import',
        'service:prov:export:instances:split': 'CSV One line per resource',
        'service:prov:export:full:json': 'Full',
        'service:prov:created': '{{#if more}}{{count}} created: {{/if}}{{sample}}{{#if more}}, ... (+{{more}}){{else}} created{{/if}}',
        'service:prov:deleted': '{{#if more}}{{count}} deleted: {{/if}}{{sample}}{{#if more}}, ... (+{{more}}){{else}} deleted{{/if}}',
        'service:prov:updated': '{{#if more}}{{count}} updated: {{/if}}{{sample}}{{#if more}}, ... (+{{more}}){{else}} updated{{/if}}',
        'csv-error-continue': 'Continue the import when errors are encountered',
        'csv-headers-included': 'CSV file has headers',
        'csv-headers': 'Headers',
        'csv-headers-included-help': 'When headers are in the first line of CSV file',
        'csv-create-missing-usage': 'Create usage',
        'csv-create-missing-usage-help': 'Create non existing usage instead of generating an error',
        'csv-separator': 'Separator',
        'csv-separator-help': 'Separator character of CSV fields',
        'error': {
            'service:prov-no-catalog': 'There is not yet any catalog for the provider "{{[0]}}" ({{[1]}}). It could be imported. <a class="btn btn-success btn-raised" href="#/prov/catalog">Import ...</button>',
            'no-match-instance': 'Update failed, at least the resource ({{resource}}) does not support all your requirements',
            'not-compatible-storage-instance': 'The storage {{[0]}} cannot be attached to the resource {{[1]}}'
        },
        'm49': {
            '2': 'Africa',
            '5': 'South America',
            '9': 'Oceania',
            '18': 'Southern Africa',
            '19': 'Americas',
            '21': 'Northern America',
            '30': 'Eastern Asia',
            '34': 'Southern Asia',
            '35': 'South-eastern Asia',
            '36': 'Australia',
            '39': 'Southern Europe',
            '40': 'Austria',
            '53': 'Australia and New Zealand',
            '56': 'Belgium',
            '76': 'Brazil',
            '100': 'Bulgaria',
            '124': 'Canada',
            '142': 'Asia',
            '143': 'Central Asia',
            '145': 'Western Asia',
            '150': 'Europe',
            '151': 'Eastern Europe',
            '154': 'Northern Europe',
            '155': 'Western Europe',
            '156': 'China',
            '208': 'Denmark',
            '246': 'Finland',
            '250': 'France',
            '276': 'Germany',
            '300': 'Greece',
            '344': 'Hong Kong',
            '356': 'India',
            '372': 'Ireland',
            '376': 'Israel',
            '380': 'Italy',
            '392': 'Japan',
            '410': 'South Korea',
            '442': 'Luxembourg',
            '528': 'Netherlands',
            '554': 'New Zealand',
            '578': 'Norway',
            '616': 'Poland',
            '620': 'Portugal',
            '634': 'Qatar',
            '643': 'Russia',
            '702': 'Singapore',
            '710': 'South Africa',
            '724': 'Spain',
            '752': 'Sweden',
            '764': 'Thailand',
            '792': 'Turkey',
            '804': 'Ukraine',
            '826': 'United Kingdom',
            '840': 'USA'
        }
    },
    'fr': true
});
