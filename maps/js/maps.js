console.log("template loaded");
	
// Elements
var mapEl = document.querySelector('.map');
	
// setup
var map;


// Map options
var options = {
	center: {lat: 37.790841, lng: -122.40128},
	zoom: 15
};


	function updateLocation(position) {
		console.log('update location');
		console.log(position.coords);

		var lat = position.coords.latitude;
		var lng = position.coords.longitude;

		var marker = new google.maps.Marker({
			map: map,
			position: {
				lat: lat,
				lng: lng

			}
		})
	}


function initMap() {
		
	
// setup new google map object
	map = new google.maps.Map(mapEl, options)

	var marker = new google.maps.Marker({
		map: map,
		title: "GA",
		position: {lat: 37.790841, lng: -122.40128}
	});

	var marker2 = new google.maps.Marker({
		map: map,
		title: "SF",
		position: {lat: 37.783157, lng: -122.425163}
	});

// setup new places api search
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: {lat: 37.783157, lng: -122.425163},
		radius: 100,
		type: ['store']
	}, displayResults);

// callback function with search result data
// callcreateMarker 1 time for each place
	function displayResults (results, status) {
		console.log("displayResults");
	//	results.forEach(createMarker);
	}

// create one marker for each place
	function createMarker (place) {
		var marker = new google.maps.Marker({
			map: map,
			title: "GA",
			position: place.geometry.location
		});
	}	
navigator.geolocation.getCurrentPosition(updateLocation);

}
