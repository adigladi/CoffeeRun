//console.log(firebase.database());

/* Fungerande funktion för att logga "bajs" var 3:e sekund.
setInterval(function() {
	console.log("bajs!");
}, 3*1000);
*/

var map;
var mapType = 'roadmap';
var startzoom = 15;

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


	// Map bounds
	var strictBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(59.344249, 18.055795),
		new google.maps.LatLng(59.357791, 18.080514)
	);

	// Listen for the dragend event
	google.maps.event.addListener(map, 'bounds_changed', function () {
		if (strictBounds.contains(map.getCenter())) return;

		// We're out of bounds - Move the map back within the bounds
		var c = map.getCenter(),
			x = c.lng(),
			y = c.lat(),
			maxX = strictBounds.getNorthEast().lng(),
			maxY = strictBounds.getNorthEast().lat(),
			minX = strictBounds.getSouthWest().lng(),
			minY = strictBounds.getSouthWest().lat();

		if (x < minX) x = minX;
		if (x > maxX) x = maxX;
		if (y < minY) y = minY;
		if (y > maxY) y = maxY;

		map.setCenter(new google.maps.LatLng(y, x));
	});


}

//MARKERS END

function addNewMarker(id, type, place) {
	var markername = "marker" + id;
	var infoname = "info" + id;
	var markerinfo = type + " from " + place;
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

var copyToClipboard = function (num) {
	var el = document.createElement('textarea');
	el.value = num;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

var showRequest = function () {
	document.getElementById('requestPage').style.display = 'block';
	document.getElementById('map').style.filter = 'blur(5px)';
};

var hideRequest = function () {
	document.getElementById('requestPage').style.display = 'none';
	document.getElementById('map').style.filter = 'blur(0px)';
};

var getOrder = function (id) {
	var navigator = document.getElementById('navigator');
	navigator.pushPage('order.html').then(function () {
		var type = document.getElementById("orderType");
		var num = document.getElementById("coffeeNum");
		var name = document.getElementById("orderedBy");
		var delivery = document.getElementById("delivery");
		var details = document.getElementById("details");
		var runBtn = document.getElementById("runBtn");
		document.getElementById("resolveBtn").style.display = 'none';
		var currentOrder = "";
		var runName = "";
		for (var i = 0; i < orders.length; i++) {
			if (orders[i].id === id) {
				currentOrder = orders[i];
			}
		}
		type.innerHTML = currentOrder.order[0] + " from " + currentOrder.order[1];
		num.append(currentOrder.order[2]);
		name.append(currentOrder.order[3])
		delivery.append(currentOrder.order[4]);
		details.append(currentOrder.order[5]);

		runBtn.addEventListener("click", function () {

			ons.notification.prompt({
				message: "Enter your name:",
				title: ""
			}).then(function (input) {
				runName = input;
				ons.notification.alert({
					message: "View your Coffee Run by selecting it under 'In progress runs'",
					title: ""
				});
				removeOrder();
				coffeeRun(id, runName);
			});
		});
	});
};

var viewOrder = function (id) {
	var navigator = document.getElementById('navigator');
	navigator.pushPage('order.html').then(function () {
		var type = document.getElementById("orderType");
		var num = document.getElementById("coffeeNum");
		var name = document.getElementById("orderedBy");
		var delivery = document.getElementById("delivery");
		var details = document.getElementById("details");
		var resolveBtn = document.getElementById("resolveBtn");
		document.getElementById("runBtn").style.display = 'none';
		var currentRun = "";
		var runName = "";
		for (var i = 0; i < runs.length; i++) {
			if (runs[i].id === id) {
				currentRun = runs[i];
			}
		}
		type.innerHTML = currentRun.order[0] + " from " + currentRun.order[1];
		num.append(currentRun.order[2]);
		name.append(currentRun.order[3])
		delivery.append(currentRun.order[4]);
		details.append(currentRun.order[5]);

		resolveBtn.addEventListener("click", function () {

			ons.notification.prompt({
				message: "Enter order code (from coffee buyer):",
				title: ""
			}).then(function (input) {
				if (input == id) {
					removeRun(id);
					removeOrder();
				}
				else {
					ons.notification.alert({
						message: "Wrong order code, please try again!",
						title: ""
					});
				}
			});
		});
	});
};

var removeOrder = function () {
	var navigator = document.getElementById('navigator');
	navigator.popPage();
};

var coffeeRun = function (idIn, name) {
	for (var i = 0; i < orders.length; i++) {
		if (orders[i].id === idIn) {
			orders[i].order.push(name);
			runs.push(orders[i]);
			orders.splice(i, 1);
			updateOrders();
		}
	}
}

var removeRun = function (idIn) {
	for (var i = 0; i < runs.length; i++) {
		if (runs[i].id === idIn) {
			runs.splice(i, 1);
			updateOrders();
		}
	}
}
//End of ONSEN UI

//Order functions
var orders = [];
var runs = [];

var placeOrder = function () {
	var type = document.getElementById("coffeeType").value;
	var place = document.getElementById("coffeePlace").value;
	var number = document.getElementById("coffeeNumber").value;
	var requestName = document.getElementById("requestName").value;
	var requestPlace = document.getElementById("requestPlace").value;
	var addInfo = document.getElementById("addInfo").value;
	var toast = document.getElementById("orderToast");
	var toastCode = document.getElementById("code");
	var rand = getId();

	if(type == "" || place == "" || number == "" || requestName == "" || requestPlace == ""){
		alert("Please fill out the entire form!")
	}

	else {


	var arr = [type, place, number, requestName, requestPlace, addInfo];
	var obj = { id: rand, order: arr };

	orders.push(obj);
	updateOrders();
	toastCode.innerHTML = "Order code copied to clipboard: " + rand;
	toast.toggle();
	copyToClipboard(rand);
	addNewMarker(rand, type, place);
	requestClick();
	}
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
	$("#inProgress").html("");
	for (var i = 0; i < orders.length; i++) {
		$("#available").append("<ons-card id='" + orders[i].id + "'onclick='getOrder(" + orders[i].id + ")'><div class='title'>" + orders[i].order[2] + " " + orders[i].order[0] + " from " + orders[i].order[1] + "</div></ons-card>");
	}
	for (var j = 0; j < runs.length; j++) {
		$("#inProgress").append("<ons-card id='" + runs[j].id + "'onclick='viewOrder(" + runs[j].id + ")'><div class='title'>" + runs[j].order[2] + " " + runs[j].order[0] + " from " + runs[j].order[1] + "</div><div class='content'><ons-list><ons-list-header>Runner: " + runs[j].order[6] + "</ons-list-header></ons-list></div></ons-card>");
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

firebase.database().ref().on('value', function (snapshot) {
	console.log(snapshot.val());
});