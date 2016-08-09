// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
var li = document.querySelector("li");

li.addEventListener("click", testing)

function testing (e) {
	console.log("testing");
	console.log(e.target);

var target = e.target;

	if (target.tagName != "LI") {
		console.log("GOT child, finding parent..");
		target = target.parentElement;
	}

	console.log(target);
}

// Update page
// ----------------------------------------------
