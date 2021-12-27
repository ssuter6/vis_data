
//////////////////////////////////////////////////
////////// IMPLEMENTATION DE CARTE ///////////////
//////////////////////////////////////////////////

// Options de carte
let myMap = L.map('map', {
	
	// Gestion des parametres
	center: [46.7, 8.2],
	minZoom: 1,
	maxZoom: 18,
	zoom: 7.5,  
});

// Ajout de nos couches de base (layers)

const ESRI = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
})

const osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  	attribution: '&copy; OpenStreetMap contributors'
});

const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
  	tileSize: 256,
  	subdomains:['mt0','mt1','mt2','mt3']
});

const googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
	tileSize: 256,
  	subdomains:['mt0','mt1','mt2','mt3']
});


// Ajout de la couche geo tile pour le load de la page
ESRI.addTo(myMap);

// Ajout du controller en haut a droite pour changer de couche
const controlLayers = L.control.layers().addTo(myMap);

// Ajout des couches de bases
controlLayers.addBaseLayer(ESRI, 'ESRI');
controlLayers.addBaseLayer(osmLayer, 'OpenStreeMap');
controlLayers.addBaseLayer(googleSat, 'Satellite');
controlLayers.addBaseLayer(googleTerrain, 'Terrain');


// Ajout de l'échelle à la carte
L.control.scale({
  position: 'bottomleft'
}).addTo(myMap);


//chargement des donéées geojson 
// On ajoute la librairie JQuery
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"</script>
// On créer un fonction dans laquelle on charge notre fichier geojson 
// On utilise ensuite la fonction pour afficher nos données sur la carte

// Limites Suisses
const Suisse = $.getJSON("ch.geojson", function (data) {
    var limite_suisse = L.geoJSON(data).addTo(myMap);
		controlLayers.addOverlay(limite_suisse, 'Limite Suisse');
});

// Limites Cantonale
const cant = $.getJSON("canton.geojson", function (data) {
    var limite_canton = L.geoJSON(data,
        {
            onEachFeature: function onEachFeature(feature, layer) {
                layer.bindPopup('<strong>' + feature.properties.NAME ); // On affiche le nom du canton lorsqu'on click dessus
        }
        }).addTo(myMap);
		controlLayers.addOverlay(limite_canton, 'Limite cantonale');
});


