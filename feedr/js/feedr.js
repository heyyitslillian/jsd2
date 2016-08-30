var search = document.querySelector(".container #search");
var results = document.querySelector("#main");
var article = document.querySelector(".article");
var dropdown = document.querySelector(".container nav ul li");


// div popup
var popUp = document.getElementById('popUp');
var close = document.querySelector('a.closePopUp');
var popupContainer = document.querySelector('#popUp .container');


// global data 
var articleStuff;
// handlebar
var articleTemplate = document.querySelector("#article-template");
var popupTemplate = document.querySelector("#popup-template");



dropdown.addEventListener('click', getArticles);
results.addEventListener('click', getLoader);
close.addEventListener('click', closePopUp);


function getArticles (e) {
	// want to just push content into elements
	popUp.classList = "loader";

	var target = e.target.closest('li').id;
		if (target === "source-1") {
			var url = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=popular&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
		} else if (target === "source-2") {
			var url = "https://newsapi.org/v1/articles?source=buzzfeed&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
		} else if (target === "source-3"){
			var url = "https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
		} 

		else {
			return;
		}
	$.getJSON(url, updateArticles);
}

function updateArticles (json) {
	console.log('updateArticles,json');
	popUp.classList = "hidden";

	// compiling the template source from <script> tag
	// into a Handlebars template
	var template = Handlebars.compile(articleTemplate.innerHTML);
	results.innerHTML = template(json.articles);

	articleStuff = json.articles;
}

function getLoader (e) {
	console.log('loader hidden clicked');
	// e.target to dynamically pull in data 

	// var index = e.target.closest('article').dataset.index;
	index = $(e.target).closest('article').data('id');
  
  	// var data = {
   //  title: articleStuff[index].title,
   //  description: articleStuff[index].description,
   //  url: articleStuff[index].url
  	// }

	popUp.classList = "";

	var url = " https://newsapi.org/v1/articles?source=techcrunch&sortBy=popular&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
	$.getJSON(url, callArticleStuff);

}

function callArticleStuff (json) {
	console.log('callArticleStuff,json');


	// compiling the template source from <script> tag
	// into a Handlebars template
	var newTemplate = Handlebars.compile(popupTemplate.innerHTML);
	popupContainer.innerHTML = newTemplate(json.articles[index]);

}



function closePopUp() {
  popUp.classList.add('hidden');
}

