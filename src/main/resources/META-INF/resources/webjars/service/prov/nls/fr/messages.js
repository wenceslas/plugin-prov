define({
	'service:prov': 'Provisionnement',
	'service:prov:manage': 'Gérer',
	'service:prov:default': 'Défaut',
	'service:prov:no-requirement': 'Pas d\'exigence',
	'service:prov:instances-block': 'Instances',
	'service:prov:storages-block': 'Stockages',
	'service:prov:os': 'OS',
	'service:prov:os-title': 'Système d\'exploitation',
	'service:prov:os-help': 'Système d\'exploitation préinstallé pour cette instance. Le prix de l\'instance inclue la licence correspondante, et est souvent en relation avec la quantité de CPU',
	'service:prov:cpu': 'CPU',
	'service:prov:cpu-any': 'Importe',
	'service:prov:cpu-variable': 'Variable',
	'service:prov:cpu-constant': 'Constant',
	'service:prov:cpu-title': 'Système d\'exploitation',
	'service:prov:cpu-help': 'Le CPU demandé. La meilleure instance correspondante à cette exigence peut inclure plus que cette quantité. Il est alors important de bien équilibrer la ressource (CPU/RAM) pour limiter cette perte.<div class=\'text-left\'><i class=\'fa fa-bolt fa-fw\'></i> CPU variable, dispose de crédit turbo.<br><i class=\'fa fa-minus fa-fw\'></i> CPU constant délivre une puissance continue.</div>',
	'service:prov:ram': 'RAM',
	'service:prov:ram-mega': 'Mo',
	'service:prov:ram-giga': 'Go',
	'service:prov:ram-help': 'La mémoire demandée. La meilleure instance correspondante à cette exigence peut inclure plus que cette quantité. Il est alors important de bien équilibrer la ressource (CPU/RAM) pour limiter cette perte',
	'service:prov:instance-name': 'Serveur',
	'service:prov:instance-name-title': 'Nom logique serveur',
	'service:prov:instance-quantity': 'Quantité',
	'service:prov:instance-quantity-to': 'à',
	'service:prov:instance-quantity-help': 'Quantité pour cette instance. Les stockages associés et le coût total reflèteront cette quantité',
	'service:prov:instance-quantity-title': 'Quantité variable pour cette instance. Lorsque la quantité maximale n\'est pas renseignée, les coûts ne sont plus bornés. Lorsque les quantités maximale et minimale sont différentes, auto-scale est activée automatiquement',
	'service:prov:instance-auto-scale-title': 'Le mode auto-scale est activé dès lors que les quantités maximale et minimale sont différentes',
	'service:prov:instance': 'Instance',
	'service:prov:instance-title': 'Type de VM avec ressources prédéfinies',
	'service:prov:instance-help': 'La meilleur instance répondant aux ressources demandées',
	'service:prov:instance-custom': 'Instance personnalisée',
	'service:prov:instance-custom-title': 'Type de VM avec des ressources personnalisées',
	'service:prov:instance-deleted': 'Instance "{{[0]}}" ({{[1]}}) est supprimée',
	'service:prov:instance-cleared': 'Toutes les instances et leurs stockages attachés ont été supprimées',
	'service:prov:instance-choice': 'La meilleure instance du fournisseur sera choisie en fonction des exigences exprimées',
	'service:prov:instance-type': 'Type',
	'service:prov:instance-type-title': 'Type d\'instance du fournisseur',
	'service:prov:instance-ephemeral': 'Ephémère',
	'service:prov:instance-ephemeral-title': 'Accepte des comportements éphémères',
	'service:prov:instance-ephemeral-help': 'Un comportement éphémère induit une durée de vie incertaine des instance, préemptible suivant des condition de disponibilité ou de coût variable.',
	'service:prov:instance-max-variable-cost': 'Coût max',
	'service:prov:instance-max-variable-cost-title': 'Coût maximum où cette instance sera valide',
	'service:prov:instance-max-variable-cost-help': 'Coût maximum optionnel où cette instance sera valide. Lorsque non définie, il n\'y a pas de limite. Lorsque ce seuil est atteint, l\'instance serait supprimée.',
	'service:prov:internet': 'Accès Internet',
	'service:prov:internet-title': 'Accès Internet depuis/vers cette instance',
	'service:prov:internet-help': 'Option d\'accès Internet. Un accès public implique une instance frontale Internet.',
	'service:prov:term': 'Utilisation',
	'service:prov:term-title': 'Condition de prix et utilisation',
	'service:prov:term-help': 'Condition de prix, période et contrat. En général, plus le contrat est court et plus il est cher',
	'service:prov:memory-unit-upload': 'Unité mémoire',
	'service:prov:memory-unit-upload-help': 'Unité mémoire pour la RAM dans le fichier importé',
	'service:prov:storage': 'Stockage',
	'service:prov:storage-giga': 'GiB',
	'service:prov:storage-title': 'Taille du stockage, en Go',
	'service:prov:storage-type': 'Type',
	'service:prov:storage-type-title': 'Type de stockage du fournisseur',
	'service:prov:storage-latency': 'Latence',
	'service:prov:storage-latency-help': 'La latence d\'accès aux données du stockage',
	'service:prov:storage-latency-title': 'Latence d\'accès au stockage. Plus elle est faible, meilleure elle est.',
	'service:prov:storage-latency-worst': 'Plus faible',
	'service:prov:storage-latency-worst-title': 'La plus faible performance',
	'service:prov:storage-latency-low': 'Faible',
	'service:prov:storage-latency-low-title': 'Faible performance',
	'service:prov:storage-latency-medium': 'Moyenne',
	'service:prov:storage-latency-medium-title': 'Performance moyenne',
	'service:prov:storage-latency-good': 'Bonne',
	'service:prov:storage-latency-good-title': 'Bonne performance',
	'service:prov:storage-latency-best': 'Meilleur',
	'service:prov:storage-latency-best-title': 'Meilleure performance',
	'service:prov:storage-latency-invalid': 'Pas accessible',
	'service:prov:storage-latency-invalid-title': 'Stockage non lisible ou écrivable directement',
	'service:prov:storage-select': 'Taille du stockage en Go',
	'service:prov:storage-optimized': 'Optimisé',
	'service:prov:storage-optimized-title': 'Optimisation du stockage',
	'service:prov:storage-optimized-help': 'Ce qui est le plus important for ce stockage',
	'service:prov:storage-optimized-throughput': 'Débit',
	'service:prov:storage-optimized-throughput-title': 'Volume des échanges de données, généralement basé sur du stockage de type HDD',
	'service:prov:storage-optimized-durability': 'Durability',
	'service:prov:storage-optimized-durability-title': 'Data durability over performance',
	'service:prov:storage-optimized-iops': 'IOPS',
	'service:prov:storage-optimized-iops-title': 'I/O par second, généralement basé sur du stockage de type SSD',
	'service:prov:storage-instance-title': 'Instance associée à ce stockage. Sera supprimée lorsque cette instance le sera, même leur cycle de vie sont indépendants à l\'exécution',
	'service:prov:storage-instance-help': 'Instance associée',
	'service:prov:storage-size': 'Taille',
	'service:prov:storage-size-title': 'Taille du bloc en Go',
	'service:prov:storage-size-help': 'Taille requise. Suivant cette valeur, les types disponibles varient',
	'service:prov:storage-deleted': 'Stockage "{{[0]}}" ({{[1]}}) est supprimé',
	'service:prov:no-attached-instance': 'Aucune instance attachée',
	'service:prov:cannot-attach-instance': 'Non disponible',
	'service:prov:storage-cleared': 'Tous les stockages ont été supprimés',
	'service:prov:cost': 'Coût',
	'service:prov:cost-title': 'Facturés par mois',
	'service:prov:resources': 'Ressources',
	'service:prov:total-ram': 'Mémoire totale',
	'service:prov:total-cpu': 'CPU total',
	'service:prov:total-storage': 'Stockage total',
	'service:prov:nb-public-access': 'Nombre d\'instances exposées sur Internet',
	'service:prov:nb-instances': 'Nombre d\'instances',
	'service:prov:cost-month': 'Mois',
	'service:prov:efficiency-title': 'Efficacité globale de cette demande : CPU, RAM et stockage',
	'service:prov:terraform:execute': 'Exécuter',
	'service:prov:terraform:started': 'Terraform démarré',
	'instance-import-message': 'Importer des instances depuis un fichier CSV, <code> ;</code> comme séparateur',
	'instance-import-sample': 'Exemple',
	'service:prov:cost-refresh-title': 'Raffraichir (calcul complet) le coût global',
	'service:prov:refresh-needed': 'Le coût global a changé, rechargement des détails ...',
	'service:prov:refresh-no-change': 'Pas de changement de coût',
	'service:prov:location-failed': 'L\'emplacement sélectionné {{this}} ne supporte pas toutes vos exigences',
	'service:prov:location': 'Emplacement',
	'service:prov:location-title': 'Emplacement de cette ressource',
	'service:prov:location-help': 'Emplacement géographique de cette resource. Les prix dépendent de l\emplacement sélectionné. Lorsque l\'emplacement n\'est pas défini, celui du devis est utilisé.',
	'service:prov:usage-failed': 'L\'usage sélectionné {{this}} ne supporte pas toutes vos exigences',
	'service:prov:usage': 'Utilisation',
	'service:prov:usage-upload-help': 'Utilisation à associer à chaque instance importée',
	'service:prov:usage-default': 'Niveau d\'utilisation par défaut : {{this}}%',
	'service:prov:usage-actual-cost': 'Niveau d\'utilisation actuel : {{this}}%',
	'service:prov:usage-partial': 'Utilisation seulement de {{[0]}} sur {{[1]}} disponibles ({{[2]}}%)',
	'service:prov:usage-rate': 'Niveau',
	'service:prov:usage-rate-title': 'Pourcentage d\'utilistion. 100% signifiant une utilisation plein temps.',
	'service:prov:usage-rate-help': 'Taux dutilisation correspondant à la durée de disponibilité de cette resource. 100% implique toujours disponible.',
	'service:prov:usage-duration': 'Durée',
	'service:prov:usage-duration-help': 'Durée estimée d\'utilisation en mois. Suivant cette valeur, le meilleur terme est déterminé.',
	'quote-location': 'Emplacement par défaut pour cette Default location for ce devis. Suivant les disponibilités et les types d\'instances, les prix peuvent varier.',
	'csv-headers-included': 'CSV contient les entêtes',
	'csv-headers': 'Entêtes',
	'csv-headers-included-help': 'Lorsque les entêtes sont en première ligne du fichier',
	'm49': {
		'2': 'Afrique',
		'5': 'Amérique du Sud',
		'9': 'Océanie',
		'18': 'Afrique australe',
		'19': 'Amériques',
		'21': 'Amérique septentrionale',
		'30': 'Asie orientale',
		'34': 'Asie du Sud',
		'35': 'Asie du Sud-Est',
		'36': 'Australie',
		'39': 'Europe méridionale',
		'40': 'Autriche',
		'53': 'Australie et Nouvelle-Zélande',
		'56': 'Belgique',
		'76': 'Brésil',
		'100': 'Bulgarie',
		'124': 'Canada',
		'142': 'Asie',
		'143': 'Asie centrale',
		'145': 'Asie occidentale',
		'150': 'Europe',
		'151': 'Europe orientale',
		'154': 'Europe septentrionale',
		'155': 'Europe occidentale',
		'156': 'Chine',
		'208': 'Danemark',
		'246': 'Finlande',
		'250': 'France',
		'276': 'Allemagne',
		'300': 'Grèce',
		'344': 'Hong Kong',
		'356': 'Inde',
		'372': 'Irlande',
		'376': 'Israël',
		'380': 'Italie',
		'392': 'Japon',
		'410': 'Corée du sud',
		'442': 'Luxembourg',
		'528': 'Pays-Bas',
		'554': 'Nouvelle-Zélande',
		'578': 'Norvège',
		'616': 'Pologne',
		'620': 'Portugal',
		'634': 'Qatar',
		'643': 'Russie',
		'702': 'Singapour',
		'710': 'Afrique du sud',
		'724': 'Espagne',
		'752': 'Suède',
		'764': 'Thaïlande',
		'792': 'Turquie',
		'804': 'Ukraine',
		'826': 'Royaume-Uni',
		'840': 'États-Unis',
	}
});
