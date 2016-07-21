// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var streetNumber = ["1155", "256", "109", "954","543","2","4","5"];
var streetName = ["tenderfoot", "laguna", "eddy", "ellis"];
var city = ["san francisco", "los angeles", "diamond bar", "anaheim"];
var state = ["california", "florida", "washington", "oregon"];
var postalCode = ["94109", "91765", "91710", "95051"];


// Event Listeners
// ------------------------------------------
function generateAddress() {
	var randomstreetNumber=streetNumber[getRandomInt(0,(streetNumber.length)-1)];
	var randomstreetName=streetName[getRandomInt(0,4)];
	var randomcity=city[getRandomInt(0,4)];
	var randomstate=state[getRandomInt(0,4)];
	var randompostal=postalCode[getRandomInt(0,4)];
	var getRandom=randomstreetNumber+" "+randomstreetName+" "+randomcity+" "+randomstate+" "+randompostal;
	console.log(getRandom);
	addAddress(getRandom);
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}




