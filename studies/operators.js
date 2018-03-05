// OPERATORS

/*
Operators act on data by either assigning, comparing or executing mathematical operations. 
They are classified by the number of operands (operands are the values operators operate on).
unary - 1 value
binary - 2 values
ternary - 3 values

Assignment operators -- assign a value.
*/

// var x = 10; // assings x value of 10
// x += 10; // reassigns x value of 20

// Arithmetic operators - returns the result of a mathematical operation on the operands.

/*
Comparison operators - compare 2 values and return a boolean of either true or false.
*/

// var x = 2;
// if (x <= 2) {
//     return "Yes, that is true!";
// } else {
//     return "Sorry, not true.";
// }

// Logical operators - include the AND operator, the OR, operator and the bang operator. 
// AND looks liked && (means both operands must be true); OR looks like || (one or the othe rmust be true)
// bang looks like ! and means not true

var operatorTest = 2;

if (operatorTest !==3) {
    console.log("The answer is not three.");
}
 /*
 Binary operators include 2 operands. 
 One such example is the bang example described in the section above). Though the studies instruction ask us to
 include type of here under binary, I don't think it's a binary operator because it just 
 operates on 1 value like below */
 console.log(typeof 1); // will return "number";

// - will multiply the operand by -1;

var i = 1;
console.log (-i); // will log to the console -1

// TURNARY OPERATORS
// Turnary operators take 3 operands; javascript only takes one type of turnary operator, the conditional
// turnary operator, which can be used in the place of if statements and looks like a?b: c. 
// a is an expression; if a evaluates to true, b is returned; if a evaluates to flase, c is returned. 

var myVariable = 2;

console.log((myVariable === 2) ? "hello": "goodbye"); // condition is true, so returns "hello"