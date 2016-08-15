// Structure
// ------------------------------------
var form = document.querySelector("form");
var results = document.querySelector(".results");
var zip = document.querySelector("form .zip");

// Events
// ------------------------------------

form.addEventListener('submit', getRestaurants);

function getRestaurants (event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	//if this isn't a 5 digit number, show an error
	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
	//$.getJSON(url, 'success' callback)
	$.getJSON(url, updateRestaurants);

}



//Update page
	
	//getting the json data, and calling the guy below one time (item in the array);
function updateRestaurants (json) {
	console.log('updateRestaurants,json');
	
	// clears out the old results
	results.innerHTML = " ";

	//add new result for each item in array
	json.restaurants.forEach(createRestaurant);

}

	//expecting to receive one restaurant object, to be added to the page

function createRestaurant (x){

//step 1: create elements
	var li = document.createElement("li");
	var img = document.createElement("img");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");

//step 2: add content / attributes
	
	img.src = x.image_url;
	h2.textContent = x.name;
	p.textContent = x.address;

	// notes: hardcoded first 	
	//img.src = "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg";
	//h2.textContent = "Thai Express 17";
	//p.textContent = "3654 24th St., SF, cA, 94109";

//Step 3: append to parents

	results.appendChild(li);
	li.appendChild(img);
	li.appendChild(h2);
	li.appendChild(p);

}
// var italian = {
// 		name: "italian food",
// 		address: "2345 13th St., SF, CA, 94109",
// 		image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg"

// 	};

// var pizza = {
// 		name: "extra cheesy pizza",
// 		address: "2345 Montgomery., SF, CA, 94209",
// 		image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg"

// 	};

// var japanese = {
// 		name: "sushi delight",
// 		address: "1155 Ellis St., SF, CA, 94109",
// 		image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg"

// 	};
// */
// var restaurants = [];

// restaurants.push(italian,pizza,japanese);

