function calcFahrenheitToCelcius(tempF){
	var tempC = (tempF - 32) * 5/9;
	return tempC;
}

function calcCelciusToFahrenheit(tempC){
	var tempF = (tempC * (9/5) + 32);
	return tempF;
}

function calcCircumference(radius){
	var Pi = 3.14;
	var c = 2 * Pi * radius;
	return c;
}

function calcLongestSide(a,b){
	var pyth = Math.sqrt((a * a) + (b * b));
	return pyth;
}








