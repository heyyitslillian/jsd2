console.log("score-keeper loaded");

var score = 0;
var increase = document.querySelector("#increase-5");
var decrease = document.querySelector("#decrease-5");
var setScore = document.querySelector("#submit-custom-score");
var scoreboard = document.querySelector("#score");
var scoreField = document.querySelector("#custom-score");
var x = 5;

increase.addEventListener('click', add);
decrease.addEventListener('click', minus);
setScore.addEventListener('click', set);



function add () {
	//e.preventDefault();
	console.log('add');

	score = score + x;
	if (score < 0){
		scoreboard.innerHTML="no negative";
	} else if (score >= 0){
		scoreboard.innerHTML= score + " " + "points";
	}
}

function minus () {
	score = score - x;
	if (score < 0){
		scoreboard.innerHTML="no negative";
	} else if (score >= 0){
		scoreboard.innerHTML= score + " " + "points";
	}
}

function set () {
	score = parseInt(scoreField.value);
	if (score < 0){
		scoreboard.innerHTML= "no negative";
	} else if (score >= 0){
	scoreboard.innerHTML= score+" "+"points";
}
}

