
//////////////////////////////////////////////////
////////// IMPLEMENTATION DE CARTE ///////////////
//////////////////////////////////////////////////

// Options de carte
let myMap = L.map('map', {
	
	// Gestion des parametres
	center: [46.83, 8.2],
	minZoom: 1,
	maxZoom: 10.3,
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

const terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});


// Ajout de la couche geo tile pour le load de la page
terrain.addTo(myMap);

// Ajout du controller en haut a droite pour changer de couche
const controlLayers = L.control.layers().addTo(myMap);

// Ajout des couches de bases au controller
controlLayers.addBaseLayer(ESRI, 'ESRI');
controlLayers.addBaseLayer(osmLayer, 'OpenStreeMap');
controlLayers.addBaseLayer(googleSat, 'Satellite');
controlLayers.addBaseLayer(terrain, 'Terrain');


// Ajout de l'échelle à la carte
L.control.scale({
  position: 'bottomleft'
}).addTo(myMap);


/////////////////////////////////////////////////////////////////////////////////////
//	Chargement des donéées geojson à l'aide de JQuery
// 	Chaque gichier geojson peut être chargé à la carte en appuyant sur le boutton voulu
//////////////////////////////////////////////////////////////////////////////////////

/// Suisse ///
var style_ch = {
	"color": "#800000",
	"weight": 3,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_ch = $("#Limite_CH").click(function(){
	$(this).prop('disabled', true);
	$.getJSON("ch.geojson", function (data) {
		var limite_ch = L.geoJSON(data,{
			style: style_ch,
				onEachFeature: function onEachFeature(feature, layer) {
					layer.on('mouseover', function () {
					  this.setStyle({
						'fillColor': '#0000ff'
					  });
					});
					layer.on('mouseout', function () {
					  this.setStyle({
						'fillColor': 'rgba(255, 255, 255, 0.5)'
					  });
					});
					layer.bindPopup('<strong>' + feature.properties.NAME );
				}
			}).addTo(myMap);
	});
})

/// Cantons ///
var style_cantons = {
	"color": "#000075",
	"weight": 2,
	"opacity": 0.7,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_canton = $("#Limite_cantonales").click(function(){
	$(this).prop('disabled', true);
	$.getJSON("canton.geojson", function (data) {
		var limite_canton = L.geoJSON(data,{
			style: style_cantons,
				onEachFeature: function onEachFeature(feature, layer) {
					layer.bindPopup('<strong>' + feature.properties.NAME );

					layer.on('mouseover', function () {
					  this.setStyle({
						'fillColor': '#0000ff'
					  });
					});
					layer.on('mouseout', function () {
						this.setStyle({
						  'fillColor': 'rgba(255, 255, 255, 0.5)'
						});
					  });
				}
			}).addTo(myMap);		
	});
})


/// Districts//
var style_districts = {
	"color": "#e6194B",
	"weight": 1,
	"opacity": 1,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_districts = $("#Limite_districts").click(function(){
	$(this).prop('disabled', true);
	$.getJSON("districts.geojson",  function (data) {
		var limite_districts= L.geoJSON(data,{
			style: style_districts,
				onEachFeature: function onEachFeature(feature, layer) {
					layer.on('mouseover', function () {
					  this.setStyle({
						'fillColor': '#0000ff'
					  });
					});
					layer.on('mouseout', function () {
					  this.setStyle({
						'fillColor': 'rgba(255, 255, 255, 0.5)'
					  });
					});
					layer.bindPopup('<strong>' + feature.properties.NAME );
				}
			}).addTo(myMap);
			
	});
})


/// Communes ///
var style_communes = {
	"color": "#ffe119",
	"weight": 0.6,
	"opacity": 1,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_communes = $("#Limite_communales").click(function(){
	$(this).prop('disabled', true);
	$.getJSON("communes_p.geojson", function (data) {
		var limite_communes = L.geoJSON(data,{
			style: style_communes,
				onEachFeature: function onEachFeature(feature, layer) {
					layer.on('mouseover', function () {
					  this.setStyle({
						'fillColor': '#0000ff'
					  });
					});
					layer.on('mouseout', function () {
					  this.setStyle({
						'fillColor': 'rgba(255, 255, 255, 0.5)'
					  });
					});
					layer.bindPopup('<strong>' + feature.properties.NAME );
				}
			}).addTo(myMap);
			
	});
})





