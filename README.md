# Projet de visualisation de données

## Introduction                                                                 

Ce project de visualisation de données prend place dans le cadre du cours de "Visualisation de données" donné par le Porfesseur Mr. Isaac Pante à l'Université de Lausanne.
L'idée de ce projet est de réaliser une visualisation web basé sur des données géographiques, qui permet de visualiser et d'intéragir avec les différents type de limites
admnistratives qui prennent place à l'échelle de la Suisse. A savoir les limites 1) nationales, 2) Les limites cantonales, 3) les limites de districts et finalement, 4) les limites communales.


## Librairies utilisées et environnement de travail

Le projet a été réaliser en grande partie sur la base de langage Javascript associé à du HTML ainsi que du CSS pour les éléments de style. Nous pouvons noter que dans le cadre de ce travail, nous avons principalement utilisé les librairies Leaflet ainsi Jquery. Deux librairies utilisant le langage Javascript, qui permettent de faciliter le traitement de données (dans notre cas géographiques). En effet Jquery est une librairie JavaScript gratuite multiplatforme qui facilite l'écriture de scripts. Elle permet entre autre la manipulation du Document Object Model (DOM). Leaflet est pour ça part, une librairie gratuite JavaScript, utilisée dans le cadre de cartographie web.
A côté de ces deux librairies principales, l'ensemble des données que nous avons utilisées pour ce travail ont été traiter à partir de divers fichiers GeoJson qui ont été créer spécifiquement pour ce projet. Ces derniers ont pu être réalisé à partir d'un système d'information géographique (SIG) et dans notre cas nous avons fait recours à un logiciel open source, à savoir __QGIS__. Un fichier GeoJson représente ainsi un format ouvert d'encodage d'ensemble de données géospatiales utilisant la norme JSON. Ces derniers permettent ainsi de décrire des données spatiales sous la forme de lignes, de points ou encore de polygones. Il est dès lors possible d'associer d'autres variables à ces ensembles de données, qui ne représentent cette fois pas de données spatiales.


## Détail du processus de création

Pour mener à bien ce projet, nous avons travaillé par plusieurs étapes de création. Etant donné que nous travaillons ici sur un projet de cartographie, nous avons commencé par travailler sur notre fond de carte et sur l'habillage de ce dernier. Dans un deuxième temps, nous avons travaillé sur la création de l'interface générale du projet.


### Fond de carte: 

Comme mentionné ci-dessus, ce travail à entre autre fait recour à la bibliothèque javascript leaflet. A savoir, est une bibliothèque libre de cartographie en ligne développée par _Vladimir Agafonkin_ de CloudMade et de nombreux autres contributeurs. Cette bibliothèque donne accès à de nombreux de fonds de carte qui peuvent être très utile dans le cadre de projet de cartographie web. De plus, la librairie autorise l'ajout d'éléments interactifs. Elle a ainsi permis de créer le fond de carte sur lequel sont projetées nos limites administratives.
Dans le cadre de ce projet, nous avons ainsi fait recours à différents fond de carte qu'il est possible de selectionner directement dans l'afficahge de la carte. Nous avons ainsi un élément de support sur lequel nous allons pouvoir projeté nos données GeoJson dans le but de permettre la visualisation des différentes limites administratives de la Suisse.

![ch_esri](https://user-images.githubusercontent.com/81638170/148357329-06e40d3d-6615-4fc8-ad14-881efc3f9b9e.JPG)


### Recherche de données topographiquees & habillage de la carte

Une fois le fond de carte créé, nous pouvons ajouter nos éléments d'habillage à la carte, dont les données des différentes limites administratives de la Suisse. Nous avons décidé de travailler à partir d'un jeu de donnée gratuit rendu disponible par _Swisstopo_. Il s'agit ainsi du jeu de donnée [swissBOUNDARIES3D](https://www.swisstopo.admin.ch/fr/geodata/landscape/boundaries3d.html) qui contient des fichiers Shapefile correspondant au différentes limites administrative de la Suisse. En transformant ces fichiers Shapefile en fichier Geojson au travers d'un logiciel SIG (ici [QGIS](https://www.qgis.org/fr/site/)), il est ensuite possible d'exploiter ces données dans notre pojet.

Par ailleur, dans l'objectif d'apporter une série d'informations supplémentaires autres que les simples limites admnistratives de la Suisse à ce projet. Il a été décidé d'associer un certains nombre de variables quantitatives aux divers fichiers GeoJson que nous avons créé. Ces  variables concernent ainsi la taille de populations de chacune des limites administratives, leurs supérficie totale ainsi que la superficie de leurs surface de sol non naturel. Ces informations ont été collecter sur le site de l'office fédérale de la statistique, à savoir: [Stat-tab](https://www.bfs.admin.ch/bfs/fr/home/services/recherche/stat-tab-donnees-interactives.html). Une fois associée aux fichiers GeoJson, ces informations peuvent être affichées dans l'interface de notre projet, au travers de fonction javascript.

![Capture](https://user-images.githubusercontent.com/81638170/148370274-8191f090-0941-41e3-8424-cbe41a640f4b.JPG) 


### Création de l'interface du projet 

Une fois les éléments de fond de carte et d'habillages définis, nous avons créé une interface d'interaction avec la carte et les données Geojson. Cette interface se décompose en trois parties :

-  une carte interactive qui permet de visualiser nos limites administratives de la Suisse,	
-  une liste de boutons permettant de sélectionner les limites à afficher,
-  une zone textuelle où s'inscriront les informations relatives aux divers limites administratives.

![finalement 5](https://user-images.githubusercontent.com/81638170/171654239-f0afaf79-6edb-41c1-af8f-107a4a52b3de.png)


### Interactivité 
Il est dès lors possible de sélectionner un type de limite administrative à visualiser en cliquant sur l'élément souhaité en dessous de la carte. Cette fonction permet d'afficher les limites sur la carte, mises en évidence au survol de la souris. Un clic sur une zone affiche le nombre d'habitants figurant dans cette zone administrative dans l'encadré prévu à cette effet.

![finalement](https://user-images.githubusercontent.com/81638170/171653537-f5366db8-d88b-424d-a8eb-9293b7637397.png)

![finalement 2](https://user-images.githubusercontent.com/81638170/171653587-266fed85-43cd-465f-82d6-4406b594bb74.png)

![finalement 3](https://user-images.githubusercontent.com/81638170/171653622-406f9010-3d60-490e-ade5-ab702acd9c68.png)

![finalement 4](https://user-images.githubusercontent.com/81638170/171653648-c0d17ee8-7a11-42ff-a192-446dbfbc81ef.png)



## Visualisation du project avec **Visual Studio Code**

L'accès à la visualisation de ce projet doit ce faire au travers d'un serveur local. Plusieurs façons permettent de le faire mais l'une des plus évidente est de travailler à partir de l'éditeur de code **Visual Studio Code**. Un éditeur développé par Microsoft pour Windows, Linux et macOS. Une fois que cet éditeur est installé sur notre ordinateur, il suffit de: 

  1. Télecharger le ficher ZIP du projet et extraire ce dernier dans un dosser de son choix.
  2. Ouvrir le dossier principal que nous venons d'extraire (vis_data-main) dans Visual Code Studio.
  3. Faire un click droit sur _index.html_ et selectionner _"Open with live server"_. Dès lors il est possible de visualiser le projet.






