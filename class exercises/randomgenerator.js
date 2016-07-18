
/* Assignment 2: Random Address Generator

Write a script that can generate random addresses.

1. As a first step, create arrays that contain dummy data for each of the following: 
   1. street number, 
   2. street name, 
   3. city name, 
   4. state name 
   5. postal code
2. Your script should randomly select one item from each of these arrays and then use them to construct a random address
3. Each time you run the script, it should print a new randomly-generated address to the console. 
4. For example: 1139 Grand Ave, Chicago, IL 60642 */


/* pseudo code
1. create arrays (so we have dummy code to pull)
2. figure out what the random generator code is
3. create a function for randomGenerator (we're trying to ultimately "call" s randomly generated string)
4. assign the random generator to each variable (randomly pick a position number assigned to each variable)
5. log into console to check work 
*/

var street=["43857","23456","33455","34234"];
var streetName=["hayes", "ellis", "eddy", "laguna"];
var city=["san francisco", "santa clara", "sunnyvale", "mountain view"];
var state=["california", "oregon", "washington", "florida"];
var postal=["91765", "95054", "94109", "91109"];

function randomGenerator() {
	var randomStreet=street[getRandomInt(0,3)];
	var randomStreetName=streetName[getRandomInt(0,3)];
	var randomCity=city[getRandomInt(0,3)];
	var randomState=state[getRandomInt(0,3)];
	var randomPostal=postal[getRandomInt(0,3)];
	var getRandom=randomStreet+" "+randomStreetName+" "+randomCity+" "+randomState+" "+randomPostal;
	console.log(getRandom);
}




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
