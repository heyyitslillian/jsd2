// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');


// Templates
// ------------------------------------------
	
function updateDate (e) {
	var template = Handlebars.compile(date);
	var html = template(mockdata);
	h2.innerHTML = html;
}
