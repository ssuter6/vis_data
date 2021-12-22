
//////////////////////////////////////////////////
////////// IMPLEMENTATION DE CARTE ///////////////
//////////////////////////////////////////////////

// Options de carte
let myMap = L.map('map', {
	
	// Gestion des parametres
	center: [46.33, 6.97],
	minZoom: 10,
	maxZoom: 18,
	zoom: 13,  
});

// Ajout de nos couches de base (layers)
/*const mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/theogerritsen/cktvgvy4d294h18lp92dm804n/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhlb2dlcnJpdHNlbiIsImEiOiJja3R2Zzkybzkwa25oMm5tcGp1MWY0enh1In0.n_ye_r9ELbLqxyWl-giSlA', {
    attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a>',
    tileSize: 512,
       oomOffset: -1
});*/

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

// Ajout de la couche pour le load de la page
osmLayer.addTo(myMap);

// Ajout des 4 couches dans une letiables pour le baseMaps controller
const baseMaps = {
  	"OpenStreetMap": osmLayer,
  	//"Mapbox": mapboxTiles,
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