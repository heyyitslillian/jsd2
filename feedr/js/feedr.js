var search = document.querySelector(".container #search");
var results = document.querySelector("#main");
var article = document.querySelector(".article");

// div popup
var popUp = document.getElementById('popUp');
// global data 
var articleStuff;
// handlebar
var articleTemplate = document.querySelector("#article-template");
var popupTemplate = document.querySelector("#popup-template");



search.addEventListener('click', getArticles);
results.addEventListener('click', getLoader);



function getArticles (e) {
	// want to just push content into elements

	var url = "https://newsapi.org/v1/articles?source=buzzfeed&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
	$.getJSON(url, updateArticles);
}

function updateArticles (json) {
	console.log('updateArticles,json');

	// compiling the template source from <script> tag
	// into a Handlebars template
	var template = Handlebars.compile(articleTemplate.innerHTML);
	results.innerHTML = template(json.articles);

	articleStuff = json.articles;
}

function getLoader (e) {
	console.log('loader hidden clicked');
	popUp.classList = "";
	popUp.classList.add('loader-hidden');

	var url = "https://newsapi.org/v1/articles?source=buzzfeed&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
	$.getJSON(url, callArticleStuff);

}

function callArticleStuff (json) {
	console.log('callArticleStuff,json');

	// compiling the template source from <script> tag
	// into a Handlebars template
	var template = Handlebars.compile(popupTemplate.innerHTML);
	popUp.innerHTML = template(json.articles);

}



