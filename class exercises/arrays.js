d/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */
var q1 =["image1.png","image2.png","image3.png"];
console.log("question1" + q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */
var q2 = q1[0];
console.log("question2", q2);


/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */
var q3=q1.length

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */
var q4=q1[q1.length-1];
console.log("question4",q4)

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach loop function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

var x=[1,2,3,4];
var q5=[];

x.forEach(increase);
	function increase(num){
		var z=num+1;
		q5.push(z);
	console.log(q5);
}

console.log("question 5", q5);



/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */


//avg = total / number of items



var sum=0;
q5.forEach(addItUp);
function addItUp(itemInArray){
	sum=sum+itemInArray;
	console.log("here",sum);
}



var numberOfItems =q5.length;

console.log("sum", sum);
console.log("question 6", numberOfItems);

var q6=sum/numberOfItems;
console.log("question 6",q6);








