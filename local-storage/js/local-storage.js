/*
console.log("template loaded");
// localstorage demo


// save strings & numbers
localStorage.setItem('name', 'lillian');
localStorage.setItem('birthday', 1989);

var myName = localStorage.getItem('name');
var myBirthday = localStorage.getItem('birthday');

var car = {
	make:"Ford",
	model: "Mustang",
	year: 1967
};


// convert object to string
var carString = JSON.stringify(car);


// save objects
localStorage.setItem('car', carString);

// retrieve object from local storage
var myCar = localStorage.getItem('car');

// convert string to object
myCar = JSON.parse(myCar);

*/

var model = document.querySelector(".model");
var button = document.querySelector("button");
var color = document.querySelector(".color");
var p = document.querySelector("p");

// event listener
window.addEventListener('load', updateCar);
button.addEventListener('click', saveCar);

// events-----------
function saveCar (e) {
	console.log('saveCar');

	console.log(color.value);

	var car = {
		model: model.value,
		color: color.value
	}

	// convert to a string
	car = JSON.stringify(car);

	// save to localStorage
	localStorage.setItem('car', car);
	updateCar();
}

// clear data
function clearCar () {
	localStorage.removeItem('car');
}


// update page
function updateCar () {

	// get object from localStorage
	var car = localStorage.getItem('car');
	
	// validation - check if value (aka: car) is null
	// first time run, no value is saved yet 
	if (car == null){
		return;
	}

	// convert to an object
	car = JSON.parse(car);
	p.textContent = car.color + " " + car.model; 
}





