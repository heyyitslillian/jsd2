// Structure()
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here


function getPrivilege(age){
	var sentence = [];
	if (age <= 0) {
		sentence="you're not born yet..";
	}
	if (age < 16 && age > 0) {
		console.log("you cannot do much outside of going to school");
		sentence="you cannot do much outside of going to school";
	} else if (age >= 16 && age < 18) {
		console.log("you can drive");
		sentence="you can drive";
	} else if (age >= 18 && age < 21) {
		console.log("you can vote");
		sentence="you can vote";
	} else if (age >= 21 && age < 25) {
		console.log("you can drink alcohol");
		sentence="you can drink alcohol";
	} else if (age >= 25 && age < 35) {
		console.log("you can rent a car");
		sentence="you can rent a car";
	} else if (age >= 35 && age < 62) {
		console.log("you can run for president");
		sentence="you can run for president";
	} else if (age >= 62 && age <150) {
		console.log("you collect social security benefits");
		sentence="you collect social security benefits";
	} else if (age >= 150) {
		console.log("you should be dead");
		sentence="you should be dead";
	}
	return sentence;
}



