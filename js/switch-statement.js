//var food= "hot cheetos";
//var food = prompt("what's your favorite food?");
var food;
switch (food){
	case 'donuts':
		console.log("i like donuts");
		break;
	case 'hot cheetos':
		console.log("YASSSSSSS HOT CHEETOS");
		break;
	case 'bananas':
		console.log("i like bananas");
		break;
}

var grade = "A";
//var grade = prompt("what's your grade?");

if (grade === "A") {
	console.log("WOWWW awesome");
} else if (grade === "B") {
	console.log("Good job!");
} else if (grade === "C") {
	console.log("C's get degree's");
} else if (grade === "D") {
	console.log("not so good....");
} else if (grade === "F") {
	console.log("you need a tutor");
} else {
	console.log("unexpected grade. system error");
}

switch (grade){
	case 'A':
	case 'B':	
		console.log("Good job!");
	break;
	case 'C':
		console.log("C's get degree's");
	case 'D':
		console.log("not so good....");
	case 'F':
		console.log("you need a tutor");
	break;
	default:
		console.log("unexpected grade. system error");
}
