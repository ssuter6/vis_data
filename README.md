# Projet de visualisation de données

## Introduction                                                                 

Ce projet de visualisation de données prend place dans le cadre du cours de "Visualisation de données" donné par le Porfesseur Mr. Isaac Pante à l'Université de Lausanne.
L'idée de ce projet est de réaliser une visualisation web basé sur des données géographiques, qui permet de visualiser et d'interagir avec les différents types de limites administratives qui prennent place à l'échelle de la Suisse. A savoir les limites 1) nationales, 2) Les limites cantonales, 3) les limites de districts et finalement, 4) les limites communales.




## Librairies utilisées et environnement de travail

Le projet a été réaliser en grande partie sur la base de langage Javascript associé à du HTML ainsi que du CSS pour les éléments de style. Nous pouvons noter que dans le cadre de ce travail, nous avons principalement utilisé les librairies de __Leaflet, D3 ainsi que JQuery__. Trois librairies utilisant le langage Javascript, qui permettent de faciliter le traitement de données (dans notre cas géographiques).

[__JQuery__](https://jquery.com/)est une librairie JavaScript gratuite multiplateforme qui facilite l'écriture de scripts. Elle permet entre autres la manipulation de Document Object Model (DOM). 

[__Leaflet__](https://leafletjs.com/) est pour ça part, une librairie gratuite JavaScript, utilisée dans le cadre de cartographie web.

[__D3__](https://d3js.org/) est librairie JavaScript qui permet de traiter des données de manière très aisée et facilite grandement leur visualisation. Une des grandes forces de cette librairie est qu'elle permet de lier des données directement à un DOM.

À côté de ces deux librairies principales, l'ensemble des données que nous avons utilisé pour ce travail ont été traité à partir de divers fichiers GeoJson qui ont été créer spécifiquement pour ce projet. Ces derniers ont pu être réalisés à partir d'un système d'informations géographiques (SIG). Dans notre cas nous avons fait recours à un logiciel open source, à savoir __QGIS__.
Un fichier GeoJson représente ainsi un format ouvert d'encodage d'ensemble de données géospatiales utilisant la norme JSON. Ces derniers permettent ainsi de décrire des données spatiales sous la forme de lignes, de points ou encore de polygones. Il est dès lors possible d'associer d'autres variables à ces ensembles de données, qui ne représentent cette fois pas de données spatiales.




## Détail du processus de création

Pour mener à bien ce projet, nous avons travaillé par plusieurs étapes de création. Étant donné que nous travaillons ici sur un projet de cartographie, nous avons commencé par travailler sur notre fond de carte et sur l'habillage de ce dernier. Dans un deuxième temps, nous nous sommes concentrés sur la création de l'interface générale du projet.




### Fond de carte: 

Comme mentionné ci-dessus, ce travail a entre autres fait recours à la bibliothèque Javascript [leaflet](https://leafletjs.com/). À savoir, est une bibliothèque libre de cartographie en ligne développée par _Vladimir Agafonkin_ de CloudMade et de nombreux autres contributeurs. Cette bibliothèque donne accès à de nombreux de fonds de carte qui peuvent être très utile dans le cadre de projets de cartographie web. De plus, la librairie autorise l'ajout d'éléments interactifs. Elle a ainsi permis de créer le fond de carte sur lequel sont projetées nos limites administratives. 
Dans le cadre de ce projet, nous avons ainsi fait recours à différents fonds de carte qu'il est possible de sélectionner directement dans l'affichage de la carte. Nous avons ainsi un élément de support sur lequel nous allons pouvoir projeter nos données GeoJson dans le but de permettre la visualisation des différentes limites administratives de la Suisse. Nous avons ainsi un élément de support sur lequel nous allons pouvoir projeter nos données GeoJson dans le but de permettre la visualisation des différentes limites administratives de la Suisse. 

![ch_esri](https://user-images.githubusercontent.com/81638170/148357329-06e40d3d-6615-4fc8-ad14-881efc3f9b9e.JPG)




### Recherche de données topographiques & habillage de la carte

Une fois le fond de carte créé, nous avons pu ajouter nos éléments d'habillage à la carte, dont les données permettant de faire figurer les différentes limites administratives de la Suisse. Nous avons décidé de travailler à partir d'un jeu de données gratuit rendu disponible par _Swisstopo_. Il s'agit ainsi du jeu de données [swissBOUNDARIES3D](https://www.swisstopo.admin.ch/fr/geodata/landscape/boundaries3d.html) qui contient des fichiers Shapefile correspondant au différentes limites administrative de la Suisse.
En transformant ces fichiers Shapefile en fichier Geojson au travers d'un logiciel SIG (ici [QGIS](https://www.qgis.org/fr/site/)), il est ensuite possible d'exploiter ces données dans notre projet. Nous pouvons noter ici que l'affichage des divers fichiers GeoJson a pu être fait en grande partie au travers des fonctions que nous pouvons rencontrer dans la bibliothèque [JQuery](https://jquery.com/).

Par ailleurs, dans l'objectif d'apporter une série d'informations supplémentaires autres que les simples limites administratives de la Suisse à ce projet. Il a été décidé d'associer un certain nombre de variables quantitatives aux divers fichiers GeoJson que nous avons créé. Ces variables concernent ainsi la taille de populations de chacune des limites administratives, leur superficie totale ainsi que la superficie de leurs surfaces de sol non naturel. Ces informations ont été collecter sur le site de l'office fédéral de la statistique, à savoir: [Stat-tab](https://www.bfs.admin.ch/bfs/fr/home/services/recherche/stat-tab-donnees-interactives.html). Une fois associée aux fichiers GeoJson, ces informations peuvent être affichées dans l'interface de notre projet.

Finalement, nous avons également décidé de réaliser un graphique figurant en dessous de la zone d'information, dans le but d'apporter une autre forme de visualisation à nos variables. Ce graphique (prenant la forme d'un histogramme), permet ainsi de visualiser la population vivant dans chacun des cantons Suisse. Pour réaliser ce dernier, nous avons fait recours à la librairie [D3](https://d3js.org/), qui nous a permis de lier nos données à un DOM pour en créer un graphique. 




### Création de l'interface du projet 

Une fois les éléments de fond de carte et d'habillages définis, nous avons créé une interface d'interaction avec la carte et les données Geojson. Cette interface se décompose en quatre parties :

-  une carte interactive qui permet de visualiser nos limites administratives de la Suisse.	
-  une liste de boutons permettant de sélectionner les limites à afficher.
-  une zone textuelle où s'inscriront les informations relatives aux diverses limites administratives.
-  un graphique permettant d'afficher la taille de la population de chacun des cantons de la Suisse.

![Page1](https://user-images.githubusercontent.com/81638170/172373243-16aac99f-0d73-433a-8240-ba34d90b2c27.png)




### Interactivité 
Il est dès lors possible de sélectionner un type de limites administratives à visualiser en cliquant sur l'élément souhaité en dessous de la carte. Cette fonction permet d'afficher les limites sur la carte, qui sont mises en évidence lors du survol de la souris par-dessus ces dernières. De plus, un clic sur une zone permet d’afficher le nombre d'habitants figurant dans cette zone administrative dans l'encadré prévu à cet effet.

![page2](https://user-images.githubusercontent.com/81638170/172373761-260e469e-24e0-4990-92c5-6cbcd80701b3.png)

![page3](https://user-images.githubusercontent.com/81638170/172373792-18becd89-ff24-4a59-9cac-d9012cbda7cd.png)

![page4](https://user-images.githubusercontent.com/81638170/172373822-74f92c0b-8442-4ba8-9ddd-6f0788fb2925.png)

![page5](https://user-images.githubusercontent.com/81638170/172373831-31c38097-79cf-423e-a3f1-91344f8a2024.png)




## Visualisation du projet avec **Visual Studio Code**

L'accès à la visualisation de ce projet doit se faire au travers d'un serveur local. Plusieurs méthodes permettent de le faire mais l'une des plus évidentes est de travailler à partir de l'éditeur de code **Visual Studio Code**. Un éditeur développé par Microsoft pour Windows, Linux et MacOs. Une fois que cet éditeur est installé sur notre ordinateur, il suffit de :

  1. Télécharger le ficher ZIP du projet et extraire ce dernier dans un dosser de son choix.
  2. Ouvrir le dossier principal que nous venons d'extraire (vis_data-main) dans Visual Code Studio.
  3. Faire un clic droit sur _index.html_ et sélectionner _"Open with live server"_. Dès lors il est possible de visualiser le projet.
