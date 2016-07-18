// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
	var randomstartupX=startupX[getRandomInt(0,5)];
	var randomstartupY=startupY[getRandomInt(0,5)];


	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"

	startupIdea = 'A startup that is'+" "+randomstartupX+" "+'but for'+" "+randomstartupY;


	// Update page with new startup idea
	startup.innerHTML = startupIdea;
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function saveFavorite() {

	// TODO: add the new idea to the array
	favorites.push(startupIdea);

}

function printFavorites() {
var favoritesText= " ";	
// clear out favorites element
	list.innerHTML = '';

favorites.forEach(concatenateFavs)
	function concatenateFavs(itemInArray){
		favoritesText=favoritesText+itemInArray+"<br>";

}

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")


	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;

}

// Init
// ------------------------------------------
generateStartup();

