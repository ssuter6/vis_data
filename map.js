
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


var swissLayer = L.tileLayer.swiss()


// Ajout de la couche geo tile pour le load de la page
terrain.addTo(myMap);

// Ajout du controller en haut a droite pour changer de couche
const controlLayers = L.control.layers().addTo(myMap);

// Ajout des couches de bases au controller
controlLayers.addBaseLayer(osmLayer, 'OpenStreeMap');
controlLayers.addBaseLayer(googleSat, 'Satellite');
controlLayers.addBaseLayer(terrain, 'Terrain');


// Ajout de l'échelle à la carte
L.control.scale({
  position: 'bottomleft'
}).addTo(myMap);


					/////////////////////////////////////////////////////////////////////////////////////
					//	Chargement des donées geojson à l'aide de JQuery
					// 	Chaque fichier geojson peut être chargé à la carte en appuyant sur le boutton voulu
					//////////////////////////////////////////////////////////////////////////////////////
					

/////////////////////////////////////////////////////////////// Suisse //////////////////////////////////////////////////////////////////////////////////
const style_ch = {
	"color": "#800000",
	"weight": 4,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_ch = $("#Limite_CH").click(function(){								// On va chercher notre boutton et on ouvre une fonction lorsqu'on click dessus

	$.getJSON("Suisse.geojson", function (data) {									// la fonction va chercher notre données geojson des limites ch et applique une fonction sur ces données
		
		L.geoJSON(data,{ style: style_ch,  										// On créer une variable qui contient notre nouvelles couche issuent des données geojson
			onEachFeature: function onEachFeature(feature, layer) { 			// On applique un mouseover au dessus des différents polygone de chaque couche

				layer.on('click', function(){
					$(".parent0").html(feature.properties.img)});				// On affiche le drapeau CH

				layer.on('click', function(){
					$(".parent1").html('<b>Pays</b>'+' '+':'+' '+ feature.properties.NAME)});	// Affichage nom de la couche selectionnée 

				layer.on('click', function(){
					$(".parent2").html('<b>Nombre total habitants</b>'+' '+':'+' '+ feature.properties.suisse_population)}) // Affichage du nombre d'habitant en Suisse

				layer.on('click', function(){
					$(".parent3").html('<b>Supérficie totale</b>'+' '+':'+' '+ feature.properties.suisse_surface+' '+'hectare')}) // Affichage de la supérficie de la Suisse
		
				layer.on('click', function(){
					$(".parent4").html('<b>Surface de sol non naturelle</b>'+' '+':'+' '+ feature.properties.suisse_surface_naturelle+' '+'hectare')})	// Affichage de la surface de sol non naturel
				
				
				layer.on('mouseover', function () {	// La couche s'affiche en surbrillance lorsqu'on passe la souris par dessus
					this.setStyle({
						'fillColor': '#0000ff'
					});
				});
				layer.on('mouseout', function () {  // La couche redevient normale lorsque la souris n'est plus dessus
					  this.setStyle({
						'fillColor': 'rgba(255, 255, 255, 0.5)'
					});
				});
				layer.bindPopup('<strong>' + feature.properties.NAME ); 	// Lorsqu'on click sur le polygon le nom de ce dernier s'affiche
			}
		}).addTo(myMap);
	});
});



////////////////////////////////////////////////////////////////////////// Cantons ///////////////////////////////////////////////////////////////////////////
const style_cantons = {
	"color": "#000075",
	"weight": 3,
	"opacity": 0.7,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_canton = $("#Limite_cantonales").click(function(){

	$.getJSON("Cantons.geojson", function (data) {

		L.geoJSON(data,{style: style_cantons,
			onEachFeature: function onEachFeature(feature, layer) {

				layer.on('click', function(){
					$(".parent0").html(feature.properties.img)});	// Affichage du drapeau du canton

				layer.on('click', function(){
					$(".parent1").html('<b>Canton</b>'+' '+':'+' '+ feature.properties.name)});	// Affichage nom du canton selectionné

				layer.on('click', function(){
					$(".parent2").html('<b>Nombre total habitants</b>'+' '+':'+' '+ feature.properties.canton_pop_Population)}); // Affichage du nombre d'habitant dans le canton selectionné

				layer.on('click', function(){
					$(".parent3").html('<b>Supérficie totale</b>'+' '+':'+' '+ feature.properties.surface_canton_Surface_total +' '+'hectare')}); // Affichage de la supérficie totale
				
				layer.on('click', function(){
					$(".parent4").html('<b>Surface de sol non naturelle</b>'+' '+':'+' '+ feature.properties.surface_canton_Surfaces_non_naturelles +' '+'hectare')}); // Affichage de la supérficie totale
					

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

		layer.bindPopup('<strong>' + feature.properties.name);
		}
		}).addTo(myMap);			
	});
});


///////////////////////////////////////////////////////////// Districts//////////////////////////////////////////////////////////////////////////////////
const style_districts = {
	"color": "#e6194B",
	"weight": 2,
	"opacity": 1,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_districts = $("#Limite_districts").click(function(){

	$.getJSON("Districts.geojson",  function (data) {

		L.geoJSON(data, {style: style_districts,
				onEachFeature: function onEachFeature(feature, layer) {

					layer.on('click', function(){
						$(".parent0").html(feature.properties.img)});	// Affichage du drapeau du canton	

					layer.on('click', function(){
						$(".parent1").html('<b>District</b>'+' '+':'+' '+ feature.properties.NAME)});	// Affichage nom du district selectionné
	
					layer.on('click', function(){
						$(".parent2").html('<b>Nombre total habitants</b>'+' '+':'+' '+ feature.properties.EINWOHNERZ)}); // Affichage du nombre d'habitants dans le district selectionné
	
					layer.on('click', function(){
						$(".parent3").html('<b>Supérficie totale</b>'+' '+':'+' '+ feature.properties.district_1+' '+'hectare')}); // Affichage de la supérficie totale
					
					layer.on('click', function(){
						$(".parent4").html('<b>Surface de sol non naturelle</b>'+' '+':'+' '+ feature.properties.district_2+' '+'hectare')}); // Affichage de la supérficie totale de sol non naturel
						

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
});


////////////////////////////////////////////////////////////////////// Communes //////////////////////////////////////////////////////////////////////////////////
var style_communes = {
	"color": "#000000",
	"weight": 0.6,
	"opacity": 1,
	"fillColor": 'rgba(255, 255, 255, 0.5)',
   };

const button_communes = $("#Limite_communales").click(function(){

	$.getJSON("Communes.geojson", function (data) {
		L.geoJSON(data, {style: style_communes,

				onEachFeature: function onEachFeature(feature, layer) {

					layer.on('click', function(){
						$(".parent0").html(feature.properties.img)});	// Affichage du drapeau du canton	

					layer.on('click', function(){
						$(".parent1").html('<b>Commune</b>'+' '+':'+' '+ feature.properties.NAME)});	// Affichage nom de la commune selectionnée
	
					layer.on('click', function(){
						$(".parent2").html('<b>Nombre total habitants</b>'+' '+':'+' '+ feature.properties.EINWOHNERZ)}); // Affichage du nombre d'habitant dans la commune selectionnée
	
					layer.on('click', function(){
						$(".parent3").html('<b>Supérficie totale</b>'+' '+':'+' '+ feature.properties.communes_surface_Surf_tot+' '+'hectare')}); // Affichage de la supérficie totale
					
					layer.on('click', function(){
						$(".parent4").html('<b>Surface de sol non naturelle</b>'+' '+':'+' '+ feature.properties.communes_surface_Surf_non_nat+' '+'hectare')}); // Affichage de la supérficie totale
						

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
});





