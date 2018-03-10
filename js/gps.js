var x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else { 
	x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
lat = position.coords.latitude;
lon = position.coords.longitude;
latlon = new google.maps.LatLng(lat, lon);

mapholder = document.getElementById('mapholder');
mapholder.style.height = '550px';
mapholder.style.width = '100%';

var myOptions = {
center:latlon,zoom:19,
mapTypeId:google.maps.MapTypeId.ROADMAP,
mapTypeControl:false,
navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
}

var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});

var lasb = new google.maps.Marker({
position: {lat: 43.773992, lng: -79.505331},
map: map,
title: 'Lassonde Building Rooms Available: 101, 102',
icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
});

var curtis = new google.maps.Marker({
position: {lat: 43.773175, lng: -79.505201},
map: map,
title: 'CLH Rooms Available: 105, 106, 107',
icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
});

var varihall = new google.maps.Marker({
position: {lat: 43.773051, lng: -79.503581},
map: map,
title: 'Vari Hall Room Available: 103',
icon: 'http://labs.google.com/ridefinder/images/mm_20_green.png'
});

}

function showError(error) {
switch(error.code) {
case error.PERMISSION_DENIED:
x.innerHTML = "User denied the request for Geolocation."
break;
case error.POSITION_UNAVAILABLE:
x.innerHTML = "Location information is unavailable."
break;
case error.TIMEOUT:
x.innerHTML = "The request to get user location timed out."
break;
case error.UNKNOWN_ERROR:
x.innerHTML = "An unknown error occurred."
break;
}
}