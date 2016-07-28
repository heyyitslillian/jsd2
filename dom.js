console.log("template loaded");

var div = document.querySelector("div")
var p = document.querySelector("div p")

p.innerHTML = "Basketball"

function updateParagraph (text){
	console.log('updateParagraph');
	p.innerHTML=text;	
}

var $div = $("div");
var $p = $("div p");

function updateParagraphWithQuery(text){
	console.log('bad updateParagraphWithQuery');
	$p.html(text);
}


//Adding Elements to DOM
//Structure
//---------------------------------
var menu = document.querySelector("#menu");

//Update page functions
//----------------------------------

// function addListItem(){
// console.log('addListItem');//Step 1: create new Elements
// var li = document.createElement("li");
// //Step 2: Add content/attributes to Elements
// li.innerHTML="4";

// //Step 3: Append new Element to DOM
// menu.appendChild(li);

// }

function addListItem(text){
console.log('addListItem',text);
//Error checking: "return early"

//Step 1: create new Elements
var li = document.createElement("li");
//Step 2: Add content/attributes to Elements
li.innerHTML=text;

//Step 3: Append new Element to DOM
menu.appendChild(li);

}

