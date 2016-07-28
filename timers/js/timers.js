console.log("template loaded");

function boom() {
	console.log("BOOM");
}

var bomb = window.setTimeout(boom, 5000);

// clear timer example

function defuseBomb(){
	clearTimeout(bomb);
}



//interval setup
var i =0;
function count(){
	i++
	console.log("count:", i);

}

var counter = window.setInterval(count,2000);

function stop(){
	window.clearTimeout(counter);
}