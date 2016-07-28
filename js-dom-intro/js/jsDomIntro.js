// Structure
// ------------------------------------------
var form = document.querySelector("body form");
var list = document.querySelector("#fav-list");
var input = document.querySelector(".new-thing");
var button = document.querySelector(".new-thing-button");
// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing() {
	//e.preventDefault();
	console.log('createNewThing');
	var li = document.createElement("li");
	li.innerHTML= "hello"
	input.appendChild(li);
}


// Update Page function
// ------------------------------------------
function addToList() {
	console.log('addToList');
	var li = document.createElement("li");
	li.innerHTML= ""
	input.appendChild(li);

}

