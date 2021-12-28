
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
	attribution: 'Tiles &copy; Esri and the GIS User Community'
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

// Ajout des couches de bases au controller
controlLayers.addBaseLayer(ESRI, 'ESRI');
controlLayers.addBaseLayer(osmLayer, 'OpenStreeMap');
controlLayers.addBaseLayer(googleSat, 'Satellite');
controlLayers.addBaseLayer(googleTerrain, 'Terrain');


// Ajout de l'échelle à la carte
L.control.scale({
  position: 'bottomleft'
}).addTo(myMap);


//chargement des donéées geojson à l'aide de JQuery
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"</script>
// Chaque gichier geojson peut être chargé à la carte en appuyant sur le boutton voulu

// Suisse
const button_ch = $("#Limite_CH").click(function(){
	$.getJSON("ch.geojson", function (data) {
		var limite_ch = L.geoJSON(data,
			{
				onEachFeature: function onEachFeature(feature, layer) {
					layer.bindPopup('<strong>' + feature.properties.NAME ); // On affiche le nom du canton lorsqu'on click dessus
			}
			}).addTo(myMap);
			
	});
})

// Cantons
const button_canton = $("#Limite_cantonales").click(function(){
	$.getJSON("canton.geojson", function (data) {
		var limite_canton = L.geoJSON(data,
			{
				onEachFeature: function onEachFeature(feature, layer) {
					layer.bindPopup('<strong>' + feature.properties.NAME ); 
			}
			}).addTo(myMap);
			
	});
})

// Districts
const button_districts = $("#Limite_districts").click(function(){
	$.getJSON("districts.geojson", function (data) {
		var limite_districts= L.geoJSON(data,
			{
				onEachFeature: function onEachFeature(feature, layer) {
					layer.bindPopup('<strong>' + feature.properties.NAME ); 
			}
			}).addTo(myMap);
			
	});
})

// Communes
const button_communes = $("#Limite_communales").click(function(){
	$.getJSON("communes_p.geojson", function (data) {
		var limite_communes = L.geoJSON(data,
			{
				onEachFeature: function onEachFeature(feature, layer) {
					layer.bindPopup('<strong>' + feature.properties.NAME );
			}
			}).addTo(myMap);
			
	});
})





