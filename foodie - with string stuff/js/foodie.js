// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");

var restaurantTemplate = document.querySelector("#restaurant-template");

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
	//json.restaurants.forEach(createRestaurant);


	//compiling the template source from <scrip> tag into a handlebars template

	var template = Handlebars.compile(restaurantTemplate.innerHTML);
	debugger
	//technique #1 - one line solution
	results.innerHTML = template(json.restaurants);

	//technique #2 - save in variable first
	var html = template(json.restaurants);
	results.innerHTML = html;
}

// funct ion createRestaurant(restaurant) {

// 	//still create the li, and pump everything (as a string) into the HTML
// 	var li = document.createElement("li");

// 	var template =
// 	'<img src="' + restaurant.image_url + '">' +
// 	'<h2>' + restaurant.name + '</h2>' +
// 	'<p>' + restaurant.address + '</p>';

// 	// li.innerHTML = template;
// 	// results.appendChild(li);

// }

