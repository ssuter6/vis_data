# Projet de visualisation de données

## Introduction                                                                 

Ce project de visualisation de données prend place dans le cadre du cours de "Visualisation de données" donné par le Porfesseur Mr. Isaac Pante à l'Université de Lausanne.
L'idée de ce projet est de réaliser une visualisation web basé sur des données géographiques, qui permettent de visualiser et d'interagir avec les différents type de limites
admnistratives qui prennent place à l'échelle de la Suisse. A savoir, les limites nationales correspondantes aux frontières avec les autres pays limitrophes. Les limites cantonales, les limites de districts et finalement les limites communales.


## Environnement de travail

Le projet a été réaliser en grande partie sur la base de langage Javascript associé à du HTML ainsi que du CSS pour les éléments de style. Nous pouvons noter que dans le cadre de ce travail, nous avons utilisé les librairies Leaflet ainsi Jquery. Deux librairies Javascript qui permettent de faciliter le traitement de données (dans notre cas géographiques).


## Création du porjet

### Fond de carte: 

Comme mentionné ci-dessus, ce travail à entre autre fait recour à la bibliothèque javascript leaflet. A savoir, est une bibliothèque libre de cartographie en ligne développée par _Vladimir Agafonkin_ de CloudMade et de nombreux autres contributeurs. Cette bibliothèque donne accès à un certain nombre de fond de carte qui peuvent être très utile dans le cadre de la cartographie web. De plus, en utilisant les fonctions adéquates, cette dernière permet également d'ajouter de l'interactivité à notre projet. Dès lors dans le cadre de ce dernier, nous avons fait recours à différents fond de carte qu'il est possible de selectionner directement dans l'afficahge de la carte. Nous avons ainsi un élément de support sur lequel nous allons pouvoir projeté nos données qui permettent de visualiser les limites administratives de la Suisse
![ch_esri](https://user-images.githubusercontent.com/81638170/148357329-06e40d3d-6615-4fc8-ad14-881efc3f9b9e.JPG)

### Habillage de la carte

Une fois que notre fond de carte a été créer, nous pouvons désormais ajouter nos éléments d'habillage à la carte. Pour ce faire, nous avons du procéder par plusieurs étapes. Dans un premier temps, il a fallut trouver les données nécessaire à la création de nos éléments, à savoir les différentes limites administratives de la Suisse. Pour ce faire, nous avons décidé de travailler à partir d'un jeu de donnée gratuit rendu disponible par _Swisstopo_. Il s'agit là du jeu de donnée [swissBOUNDARIES3D](https://www.swisstopo.admin.ch/fr/geodata/landscape/boundaries3d.html). A savoir un jeu de données concernant des informations liées au territoire de la Suisse. 
Ce jeu de donnée contient dès lors des fichier Shapefile correspondant au différentes limites administrative de la Suisse. En transformant ces fichiers Shapefile en fichier Geojson au travers d'un logiciel SIG (ici [QGIS](https://www.qgis.org/fr/site/)), il est ensuite possible d'exploiter ces données dans notre pojet.
![Capture](https://user-images.githubusercontent.com/81638170/148370274-8191f090-0941-41e3-8424-cbe41a640f4b.JPG)




## Création de l'interface du projet 

Dès lors que les éléments de fonds de carte et d'habillages ont été définis. Nous avons créer un interface qui permet d'interagir avec la carte et les données Geojson que nous avons créer. Cet interface se décompose en plusieurs parties. A savoir, une carte interactive qui permet de visualiser nos limites administratives de la Suisse, une partie permettant à l'utilisateur de selectionner quelles limites ce dernier souhaite visualiser. Et finalement, une partie permettant d'apporter des informations sur l'interactivité du projet et sur les éléments que l'utilisateur à choisi de selectionner.
![projet_vis_data](https://user-images.githubusercontent.com/81638170/148364214-4c2a3c3d-bceb-47ba-adf3-a30cdc6fbd8f.JPG)


### Interactivité 

L'utilisateur peut dès lors selectionner un type de limites administrative qu'il souhaite visualiser en cliquant sur l'élément souhaité en dessous de la carte. Cette fonction permet en effet d'afficher les limites sur la carte. De plus une fois que les limites sont affichées, l'utilisateur peut ensuite passer la souris en dessus de la carte ce qui met en évidence l'élement survolé. Finalement, lorsque l'on clique sur une des limites de la carte, le nom de cette dernière s'afficher dans la parie de droite pour apporter des éléments sur le nom et le nombre d'habitants figurant dans cette zone administrative. 
![exempe](https://user-images.githubusercontent.com/81638170/148365150-1a70f6ec-9fb6-4a8b-981a-9e145db0e475.JPG)

