//Handlebars
// var source = $("#restaurant-template").html();

var headerTemplate = document.querySelector("#header-template");
var restaurantTemplate = document.querySelector("#restaurant-template");
// var template = Handlebars.compile(source);

// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");
var header = document.querySelector(".header");

// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';

	// add new result for each item in array
	// json.restaurants.forEach(createRestaurantTemplate
	var template = Handlebars.compile(restaurantTemplate);
	var html = template(json);
	header.innerHTML = html;

	var html = template(json.restaurants);
	results.innerHTML = html;



	
}

// function createRestaurantTemplate(restaurant){
// 	var li = document.createElement('li');

// 	var template = 
// 	'<div>' +
// 	'<img src=" '+restaurant.image_url +' ">' +
// 	'<h2>'+ restaurant.name +'</h2>' +
// 	'<p>'+ restaurant.address +'</p>'+
// 	'</div';

// 	console.log(template);

// 	li.innerHTML = template; 
// 	results.appendChild(li);
// }

	




