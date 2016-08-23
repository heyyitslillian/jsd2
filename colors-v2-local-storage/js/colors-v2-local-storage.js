console.log("template loaded");


var body = document.querySelector("body");
var ul = document.querySelector("ul");


//events
ul.addEventListener("click", clickColor);
window.addEventListener('load', restoreColor);

// TODO: on window load, get color from local storage

//event handler (figuring out what was clicked)
//----------


function restoreColor(e) {

	//get color from local storage
	var scheme = localStorage.getItem('color');

	if (scheme == null) {
		return;
	}
	// convert to an object
	scheme = JSON.parse(scheme);

	// call change
	change(scheme.color);
}


function clickColor (e) {

	//	console.log("clickColor",e.target);
	console.log(e);

//event delegation
//"return early" if an li element
//make sure we only get the clicks on the element we want
	if (e.target.tagName != "LI"){
		return;
	}

	var dataColor = e.target.dataset.color;
	console.log(dataColor)
	change(dataColor);
	

	var scheme = {
		color: e.target.dataset.color
	}

	// convert to a string
	scheme = JSON.stringify(scheme);

	// save to localStorage
	localStorage.setItem('color', scheme);
	restoreColor();
	// save color to local storage
}

//var change = function(color) {
//	console.log("change", color);
//	body.className = color;
//}

function change (color) {
	console.log("change", color);
	body.className = color;
}