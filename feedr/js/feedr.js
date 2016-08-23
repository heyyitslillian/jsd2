var search = document.querySelector(".container #search");
var results = document.querySelector(".main");
var h3 = document.querySelector("h3");

search.addEventListener('submit', getArticles);

function getArticles (e) {

	
	// want to just push content into elements

	var url = "https://newsapi.org/v1/articles?source=buzzfeed&apiKey=0669cf110a1740a38d8c3b2b36606bc1";
	$.getJSON(url, updateArticles);

}

function updateArticles (json) {
	console.log('updateArticles,json');
	
	
	//results.innerHTML = "";

	
	json.articles.forEach(createArticles);
}

function createArticles (item) {

	//Step 1.1: Create the elements that we will ultimately be pushing
	var article = document.createElement("article");
	var featuredImage = document.createElement("img");
	var articleContent = document.createElement("a");
	var title = document.createElement("h3");
	var subtitle = document.createElement("h6");

	
	title.textContent = item.title;
	subtitle.textContent = item.description;



	//Step 1.3: Push our new elements with content into what? 
	h3.appendChild(title);






}