
//////////////////////////////////////////////////
////////// IMPLEMENTATION DE CARTE ///////////////
//////////////////////////////////////////////////

// Options de carte
let myMap = L.map('map', {
	
	// Gestion des parametres
	center: [46.7, 8.2],
	minZoom: 1,
	maxZoom: 18,
	zoom: 7.6,  
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

// Ajout des 3 couches dans une letiables pour le baseMaps controller
const baseMaps = {
    "ESRI": ESRI,
  	"OpenStreetMap": osmLayer,
  	"Satellite": googleSat,
  	"Terrain": googleTerrain
};

// Ajout du controller en haut a droite pour changer de couche
const overlays = {};
L.control.layers(baseMaps, overlays).addTo(myMap);

// Ajout de l'échelle à la carte
L.control.scale({
  position: 'bottomleft'
}).addTo(myMap);


//chargement des donéées
// On ajoute la librairie JQuery
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"</script>
// On créer un fonction dans laquelle on charge notre fichier geojson 
// On utilise ensuite la fonction pour afficher nos données sur la carte

$.getJSON("canton.geojson",function(data){
    // L.geoJson function is used to parse geojson file and load on to map
    L.geoJson(data).addTo(myMap);
    });