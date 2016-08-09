console.log("ajax template loaded");

//structure
//------------------------------------------
var p = document.querySelector("body p");
var ul = document.querySelector("ul");

//create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";

//set up ajax request 
var jqxhr = $.getJSON(url, handleData);

//callback function for ajax request
//ajax callbacks expects the json data
function handleData (json) {
	console.log(json);

	//var description = json.description;
	var description = json['description'];

//debugging notes
//	debugger

p.textContent = description;

//if it's three or more we're diving into, then put it into a variable
//technique 1- unpack json and save to variable

//var concepts = json["_embedded"]["concepts"][]
//concepts.forEach();


//technique 2- just go right to array in json using bracket notation
json["_embedded"]["concepts"].forEach(createConcept);

//each time we create callback function, we need to pass it something
function createConcept (item) {
	//console.log('createConcept', item);
//	console.log(item["description"]);
var li = document.createElement("li");

	li.innerHTML = item["description"];
	ul.appendChild(li)


	}




}


