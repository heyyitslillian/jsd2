console.log("template loaded");


var body = document.querySelector("body");
var ul = document.querySelector("ul");


//events
ul.addEventListener("click", clickColor);

//elements


//event handler (figuring out what was clicked)
//----------
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
}

//var change = function(color) {
//	console.log("change", color);
//	body.className = color;
//}

function change (color) {
	console.log("change", color);
	body.className = color;
}