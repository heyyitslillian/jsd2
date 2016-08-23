console.log("template loaded");

// Setup
//---------------------

// establish a connection with Firebase
var firebaseReference = new Firebase("https://jsd2-6e549.firebaseio.com/");

// elements
//---------------------
var button = document.querySelector("button");

// events
//---------------------
window.addEventListener('load', restoreChanges);
button.addEventListener('click', saveChanges);

function saveChanges (e) {
	console.log('saveChanges');

	var theme = {
		color: 'red'
	}

	console.log(theme);
	// save data to firebase
	firebaseReference.set(theme);
}

function restoreChanges (e) {
	firebaseReference.on("value", changeColor);

}

function changeColor (snapshot) {
	console.log('changeColor');

	var theme = snapshot.val();
	console.log(theme);
}





