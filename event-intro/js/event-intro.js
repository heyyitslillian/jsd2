console.log("event-intro ");

var counter = 0;
//Structure
var body = document.querySelector("body");

// Create Element
var h1 = document.createElement("h1");
h1.innerHTML="Events";
body.appendChild(h1);

// Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("dblclick");


h1.addEventListener("dblclick", count);

function count(e) {
	counter++;
	console.log('count', counter);
	console.log(me.type);
	console.log(me.target.innerHTML);
}

h1.dispatchEvent(me);