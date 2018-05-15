//console.log(firebase.database());

/* Fungerande funktion för att logga "bajs" var 3:e sekund.
setInterval(function() {
	console.log("bajs!");
}, 3*1000);
*/

var map;
var mapType = 'roadmap';
var startzoom = 16;
var markernr = 7;

function Zoomplus() {
	map.setZoom(map.getZoom() + 1);

}

function Zoomminus() {
	map.setZoom(map.getZoom() - 1);

}

function mapRoad() {
	map.setMapTypeId('roadmap');
}

function mapSat() {
	map.setMapTypeId('satellite');
}

function centerOpen() {
	map.setCenter(marker3.position);;
}

function centerBiblo() {
	map.setCenter(marker2.position);;
}

function centerStads() {
	map.setCenter(marker1.position);;
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 59.347429, lng: 18.072269 },
		zoom: startzoom,
		mapTypeId: mapType,
		disableDefaultUI: true,
		styles: [
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ebe3cd"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#523735"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f1e6"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#c9b2a6"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#dcd2be"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ae9e90"
					}
				]
			},
			{
				"featureType": "administrative.neighborhood",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#93817c"
					}
				]
			},
			{
				"featureType": "poi.business",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#a5b076"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#447530"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f1e6"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#fdfcf8"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f8c967"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#e9bc62"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e98d58"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#db8555"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#806b63"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#8f7d77"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#ebe3cd"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#b9d3c2"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#92998d"
					}
				]
			}
		]
	});

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
		});
	}
	else {
		map.setCenter({ lat: 59.3272911, lng: 18.0543577 });
	}

	//MARKERS START

	var infowindow1 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>The Coffice</header><p>Sweetly scented arabica; for the perfectionist!</p><p><strong>$$</strong>$</p></div>",
		maxWidth: 250
	});

	marker1 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.350779, lng: 18.068313 },
		icon: 'images/marker.png'
	});
	marker1.addListener('click', function () {
		infowindow1.open(map, marker1);
	});

	var infowindow2 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>KTH Biblioteket</header><p>Enjoy a fresh cup of coffee with your best chums in the fountainhead of knowledge!</p><strong>$$</strong>$</p></div>",
		maxWidth: 250
	});

	marker2 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.3478927, lng: 18.072917 },
		icon: 'images/marker.png'
	});
	marker2.addListener('click', function () {
		infowindow2.open(map, marker2);
	});

	var infowindow3 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>Café Open</header><p>An oasis in the rush hour! Both a work space and a coffee provider</p><strong>$$</strong>$</p></div>",
		maxWidth: 250
	});

	marker3 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.346453, lng: 18.072463 },
		icon: 'images/marker.png'
	});
	marker3.addListener('click', function () {
		infowindow3.open(map, marker3);
	});

	var infowindow4 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>Syster O Rorb</header><p>Give us your moneeeeey!</p><strong>$$$$</strong></p></div>",
		maxWidth: 250
	});

	marker4 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.348593, lng: 18.071049 },
		icon: 'images/marker.png'
	});
	marker4.addListener('click', function () {
		infowindow4.open(map, marker4);
	});

	var infowindow5 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>KTH Entré</header><p>At the delta of KTH, there is no better place to fetch a fresh one on your way through the torrents of tekniska högskolans tunnelbanestation</p><strong>$</strong>$$</p></div>",
		maxWidth: 250
	});

	marker5 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.347112, lng: 18.072042 },
		icon: 'images/marker.png'
	});
	marker5.addListener('click', function () {
		infowindow5.open(map, marker5);
	});

	var infowindow6 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>Restaurang Q</header><p>No need for fancy words, in Q every man is equal; thus we keep or prices low!</p><strong></strong>$$$</p></div>",
		maxWidth: 250
	});

	marker6 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.350321, lng: 18.067408 },
		icon: 'images/marker.png'
	});
	marker6.addListener('click', function () {
		infowindow6.open(map, marker6);
	});

	var infowindow7 = new google.maps.InfoWindow({
		content: "<div id='iw-container'><header class='iw-title'>Brazilia Restaurang</header><p>Stroll across the imaginary pastures of KTH to reach this gem over at M!</p><strong>$$$</strong></p></div>",
		maxWidth: 250
	});

	marker7 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.353630, lng: 18.065098 },
		icon: 'images/marker.png'
	});
	marker7.addListener('click', function () {
		infowindow7.open(map, marker7);
	});
}

//MARKERS END

function addNewMarker() {
	markernr += 1;
	var markername = "marker" + markernr;
	var infomane = "infowindow" + markernr;
	var markerinfo = prompt("Description of the marker:");
	$("#available").append("<ons-card id=" + markername + "><div class='title'>" + markerinfo + "</div></ons-card>")
	var infoname = new google.maps.InfoWindow({
		content: markerinfo
	});

	markername = new google.maps.Marker({
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: map.getCenter()
	});
	map.setCenter(map.getCenter());
	markername.addListener('click', function () {
		infoname.open(map, markername);
	});
}

//ONSEN UI functions
window.fn = {};

window.fn.pushPage = function (page, anim) {
	if (anim) {
		document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
	} else {
		document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
	}
};

var requestClick = function () {
	if (document.getElementById('requestPage').style.display === 'none') {
		showRequest();
	}
	else {
		hideRequest();
	}
};

var showRequest = function () {
	document.getElementById('requestPage').style.display = 'block';
	document.getElementById('map').style.filter = 'blur(5px)';
};

var hideRequest = function () {
	document.getElementById('requestPage').style.display = 'none';
	document.getElementById('map').style.filter = 'blur(0px)';
};

var getOrder = function () {
	var navigator = document.getElementById('navigator');
	navigator.pushPage('order.html');
};

var removeOrder = function () {
	var navigator = document.getElementById('navigator');
	navigator.popPage();
};
//End of ONSEN UI

//Order functions
var orders = [];

var placeOrder = function () {
	var type = document.getElementById("coffeeType").value;
	var place = document.getElementById("coffeePlace").value;
	var number = document.getElementById("coffeeNumber").value;
	var requestName = document.getElementById("requestName").value;
	var addInfo = document.getElementById("addInfo").value;

	/*$("#available").append("<ons-card><div class='title'>"+ number + " " + type + " from " + place + "</div></ons-card>");
	hideRequest(); */

	var rand = getId();

	var arr = [type, place, number, requestName, addInfo];
	var obj = { id: rand, order: arr };
	orders.push(obj);
	updateOrders();
	console.log(orders);
	requestClick();
}

var getId = function () {
	var ids = [];
	for (var i; i < orders.length; i++) {
		ids.push(orders[i].id);
	}
	var num = Math.floor(Math.random() * 1000);
	do {
		num = Math.floor(Math.random() * 1000);
	}
	while ($.inArray(num, ids) > -1);
	return num;
}

var updateOrders = function () {
	$("#available").html("");
	for (var i = 0; i < orders.length; i++) {
		$("#available").append("<ons-card id=" + orders[i].id + "><div class='title'>" + orders[i].order[2] + " " + orders[i].order[0] + " from " + orders[i].order[1] + "</div></ons-card>");
	}
}
//End of Order functions

//Function to read from Firebase
var database = firebase.database();

function getOrderData() {
	return database.ref('/coffeeRequests').once('value').then(function (snapshot) {
		console.log(snapshot.val());
	});
}

//Function to write to Firebase
function writeOrderData(availableRuns, inProgressRuns) {
	var updates = {};
	updates['/available'] = "availableRuns";
	updates['/inProgress'] = "inProgressRuns";
	firebase.database().ref('/coffeeRequests').update(updates);
}

//writeOrderData();
//getOrderData();