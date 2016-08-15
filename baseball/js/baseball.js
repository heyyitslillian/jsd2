// Elements
// ------------------------------------------
var date = document.querySelector('.date');
var games = document.querySelector('.games');

var dateTemplate = document.querySelector("#date-template");
var gamesTemplate = document.querySelector("#games-template");




// Templates
// ------------------------------------------
	
var templateFunctionDate = Handlebars.compile(dateTemplate.innerHTML);
date.innerHTML = templateFunctionDate(mockdata);

var templateFunctionGames = Handlebars.compile(gamesTemplate.innerHTML);
games.innerHTML = templateFunctionGames(mockdata);