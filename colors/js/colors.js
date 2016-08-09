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


//event delegation
//"return early" if an li element
//make sure we only get the clicks on the element we want
if (e.target.tagName != "LI"){
	return;
	}

	console.log(e.target.dataset.color)
	change(e.target.dataset.color);
}


function change (color) {
	console.log("change", color);
	body.className = color;
}