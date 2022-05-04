# Projet de visualisation de données

## Introduction                                                                 

Ce project de visualisation de données prend place dans le cadre du cours de "Visualisation de données" donné par le Porfesseur Mr. Isaac Pante à l'Université de Lausanne.
L'idée de ce projet est de réaliser une visualisation web basé sur des données géographiques, qui permet de visualiser et d'intéragir avec les différents type de limites
admnistratives qui prennent place à l'échelle de la Suisse. A savoir, les limites nationales correspondantes aux frontières de la Suisse avec les autres pays limitrophes. Les limites cantonales, les limites de districts et finalement les limites communales.



## Environnement de travail

Le projet a été réaliser en grande partie sur la base de langage Javascript associé à du HTML ainsi que du CSS pour les éléments de style. Nous pouvons noter que dans le cadre de ce travail, nous avons principalement utilisé les librairies Leaflet ainsi Jquery. Deux librairies utilisant le langage Javascript, qui permettent de faciliter le traitement de données (dans notre cas géographiques).
De plus, l'ensemble des données que nous avons utilisées pour ce travail ont été traiter à partir de divers fichiers GeoJson qui ont été créer spécifiquement pour ce projet. Ces derniers ont pu être réalisé à partir d'un système d'information géographique (SIG) et dans notre cas nous avons fait recours à un logiciel open source, à savoir QGIS. Nous pouvons encore noter qu'un fichier GeoJson représente ainsi un format ouvert d'encodage d'ensemble de données géospatiales utilisant la norme JSON. Ces derniers permettent ainsi de décrire des données spatiales sous la forme de lignes, de points ou encore de polygones. Il est dès lors possible d'associer d'autres variables à ces ensembles de données, qui ne représentent cette fois pas de données spatiales.


## Création du porjet

### Fond de carte: 

Comme mentionné ci-dessus, ce travail à entre autre fait recour à la bibliothèque javascript leaflet. A savoir, est une bibliothèque libre de cartographie en ligne développée par _Vladimir Agafonkin_ de CloudMade et de nombreux autres contributeurs. Cette bibliothèque donne accès à un certain nombre de fond de carte qui peuvent être très utile dans le cadre de projet de cartographie web. De plus, en utilisant des fonctions adéquates, cette dernière permet également d'ajouter de l'interactivité à notre projet. Dès lors dans le cadre de ce dernier, nous avons fait recours à différents fond de carte qu'il est possible de selectionner directement dans l'afficahge de la carte. Nous avons ainsi un élément de support sur lequel nous allons pouvoir projeté nos données GeoJson dans le but de permettre la visualisation des différentes limites administratives de la Suisse.

![ch_esri](https://user-images.githubusercontent.com/81638170/148357329-06e40d3d-6615-4fc8-ad14-881efc3f9b9e.JPG)



### Habillage de la carte

Une fois que notre fond de carte a été créer, nous pouvons désormais ajouter nos éléments d'habillage à la carte. Pour ce faire, nous avons du procéder par plusieurs étapes. Dans un premier temps, il a fallut trouver les données nécessaire à la création de nos éléments, à savoir les différentes limites administratives de la Suisse. Pour ce faire, nous avons décidé de travailler à partir d'un jeu de données gratuites rendu disponible par _Swisstopo_. Il s'agit là du jeu de données [swissBOUNDARIES3D](https://www.swisstopo.admin.ch/fr/geodata/landscape/boundaries3d.html). A savoir un jeu de données concernant des informations liées au territoire de la Suisse. 
Ce jeu de données contient dès lors une série de fichiers Shapefile correspondants au différentes limites administrative de la Suisse. En transformant ces fichiers Shapefile en fichier Geojson au travers d'un logiciel SIG (ici [QGIS](https://www.qgis.org/fr/site/)), il est ensuite possible d'exploiter ces données dans notre pojet. 
De plus, dans l'objectif d'apporter une série d'informations supplémentaires autres que les simples limites admnistratives de la Confédération Hélvetique à ce projet. Il a été décidé d'associer un certains nombre de variables quantitatives aux divers fichiers GeoJson que nous avons créé. Ces  variables concernent ainsi la taille de populations de chacune des limites administratives, leurs supérficie totale ainsi que la superficie de leurs surface de sol non naturel. Ces informations ont été collecter sur le site de l'office fédérale de la statistique, à savoir: [Stat-tab](https://www.bfs.admin.ch/bfs/fr/home/services/recherche/stat-tab-donnees-interactives.html). Une fois associée aux fichiers GeoJson, ces informations peuvent être affichées dans l'interface de notre projet, au travers de fonction javascript.

![Capture](https://user-images.githubusercontent.com/81638170/148370274-8191f090-0941-41e3-8424-cbe41a640f4b.JPG) 




## Création de l'interface du projet 

Dès lors que les éléments de fonds de carte et d'habillages ont été définis. Nous avons créer un interface qui permet d'interagir avec la carte et les données Geojson que nous avons créer. Cet interface se décompose dès lors en trois parties. A savoir, une carte interactive qui permet de visualiser nos limites administratives de la Suisse, une partie permettant à l'utilisateur de selectionner quelles limites ce dernier souhaite visualiser. Et finalement, une partie permettant d'apporter des informations sur l'interactivité du projet et qui permet également de faire figurer les informations quantitatives des divers variables que nous avons retenus pour ce projet.

![projet1](https://user-images.githubusercontent.com/81638170/165460763-d2d90675-0c44-4d70-a582-3983bee7cce6.png)



### Interactivité 

L'utilisateur peut dès lors selectionner un type de limites administrative qu'il souhaite visualiser en cliquant sur l'élément souhaité en dessous de la carte. Cette fonction permet en effet d'afficher les limites sur la carte. De plus une fois que les limites sont affichées, l'utilisateur peut ensuite passer la souris en dessus de la carte ce qui met en évidence l'élément survolé. Finalement, lorsque l'utilisateur clique sur une des limites de la carte, les informations associées à cette dernière s'affichent dans l'encadrer prévu à cet effet.

![projet_3](https://user-images.githubusercontent.com/81638170/166636793-3c9251fc-696b-44b8-8148-9fe925aba33c.png)


