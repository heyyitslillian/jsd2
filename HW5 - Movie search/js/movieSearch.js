
// Events
// ----------------------------------------------

var form = document.querySelector("form");
var results = document.querySelector(".results");
var movieSearch = document.querySelector("form .search");


// Event handlers
// ----------------------------------------------
form.addEventListener('submit', getMovies);


// Update page
// ----------------------------------------------

//Step 2: after we create, we need to update the created elements with updated data from json
//This is the handler function

function updateMovies (json){
	console.log('updateMovies,json');
	
	//Step 2.1: Append the "Movies" that we created below into the innerHTML 
	results.innerHTML = "";

	//Step 2.2: For each object in the array, we want to createMovies (run the function)
	json.Search.forEach(createMovies);
}


//Step 1: Create movie results (but not yet pushed)
function createMovies (item){

	//Step 1.1: Create the elements that we will ultimately be pushing
var li = document.createElement("li");
var img = document.createElement("img");
var p = document.createElement("p");

	//Step 1.2: In these empty elements we just created above, what "materials" do we want in them?
img.src = item.Poster;
p.textContent = item.Title;
li.id = item.imdbID;



	//Step 1.3: Push our new elements with content into what? 
results.appendChild(li);
li.appendChild(img);
li.appendChild(p);

}


//Step 3: Get data for movie results

function getMovies (event){
	
	event.preventDefault();

	//Step 3.1: We want to grab whatever search value entered in the search box, then append it to the last string in the api url 
	var search = movieSearch.value;
	console.log(search);

	//Step 3.2: Appending the search value into api string
	var url = "http://www.omdbapi.com/?s=" + search;

	//Step 3.3: So we're "getting the data", not we must update the json 
	$.getJSON(url, updateMovies);

}

//clicking on the result will show movie poster and detail//
//------------------------------------------------------------

results.addEventListener('click',getDetails);

var detailsPoster = document.querySelector(".details .image .poster");
var detailsDescription = document.querySelector(".details .text .plot");
var detailsTitle = document.querySelector(".details .text .title");
var detailsLink = document.querySelector(".details .text .imdb-link");

var movieUrl = "http://www.imdb.com/title/";


function getDetails (event) {
	console.log(getDetails);

	if (event.target.nodeName != "LI"){

		var movieId = event.target.parentElement.id;
		var url = "http://www.omdbapi.com/?i=" + movieId;
		$.getJSON(url, updateDetails);

	} else if(event.target.tagName = "LI") {
		console.log("Ohh dear you have a bug");
	}

}

function updateDetails (e) {



	detailsPoster.src = e.Poster;
	detailsDescription.textContent = e.Plot;
	detailsTitle.textContent = e.Title;
	detailsLink.href = "http://www.imdb.com/title/" + e.imdbID;

}

	




