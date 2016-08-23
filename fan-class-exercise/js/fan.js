console.log("template loaded");

// structure 
// ----------------------------------------

var messageName = document.querySelector(".form-group");
var messageBoardList = document.querySelector(".panel-body");
var form = document.querySelector("form");

var app = {
	messages: [],
}




// events
// ----------------------------------------

//window.addEventListener("load", getMessages);
form.addEventListener("submit", addMessage);


function addMessage (e) {
	event.preventDefault();

	var message = {
	content: messageName.value,
	voteCount: 12,
	dateCreated: "August 17, 2016",
};

	createMessage(message);

	app.messages.push(message)
	//saveMessage();

	form.reset();

}



function createMessage () {

	var li = document.createElement("li");
	var trash = document.createElement("i");
	var thumbsUp = document.createElement("i");
	var thumbsDown = document.createElement("i");
	var points = document.createElement("div");

trash.className = "fa fa-trash pull-right delete";
thumbsUp.className = "fa fa-thumbs-up pull-right";
thumbsDown.className = "fa fa-thumbs-down pull-right";
points.className = "pull-right";

li.textContent = message.content;

	li.appendChild(trash);
    li.appendChild(points);
    li.appendChild(thumbsUp);
    li.appendChild(thumbsDown);

messageBoardList.appendChild(li);
}






