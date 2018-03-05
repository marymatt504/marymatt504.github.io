/*

Functions are blocks of code that allow us to store and reuse code later in our program. By using paramaters in our
functions, we can separate the logic from and avoid hard-coding into our program, so that we can reuse the same logic
again later. 

Functions themselves are a data type. 

Functions first need to be declared, then later called or invoked.

A function can either be named or not named, and stored in a variable or not stored in a variable. If they are stored
in a variable, we can call the function simply by using the variable.

The below is an example of declaring a function.

*/

function sum (param1, param2) {
    return param1 + param2;
}

// we now have a function that takes two paramaters and adds them together. When we pass in a values for the variables
// at invocation they are called arguments.

// Below is an example of calling the function with the arguments 2 and 5.

sum(2,5); // will return 7

// A NAMED FUNCTION will start with keyword function, then the name of the function, then two parentheses, 
// with paramaters inside if there are parameters, like this:

function myFunction(a) {
    return a + 2;
}

//  we could assign the above function a variable like this

var yourFunction = function myFunction(a) {
    return a + 2;
}

// then we can call the function by using the variable like

yourFunction(2);

// we specify inputs by calling the function with arguments. 
// we return a value in a function by using return and the value we want to return within the curly brackets of the 
// function.

// Here we will demonstrate that simple values are passed to a function by copy.

function testSimpleData(myNum) {
  var mySecondNumber = myNum;
  myNum+=1;
  console.log(mySecondNumber);
  console.log(myNum);
}

testSimpleData(7); // logs to the console 7, then 8 because mySecondNumber copied by value the number 7

function testComplexData(myArray) {
  var mySecondNumber = myArray;
  myArray.push(1);
  console.log(mySecondNumber); // because mySecondNumber is copied by reference i.e. pointing towards myArray, it has 
  // the same value as myArray 
  console.log(myArray); 
}

testComplexData([2,3,4]); // logs to the console [2,3,4,1] from both mySecondNumber and myArray

// FUNCTION SCOPES - functions can see and modify variables in parent scopes (first example below); 
// in the parent scope variables that are inside a function cannot be seen and modified.

var x = 2;

function scopeFunction() {
    x = 4;
}
console.log(x); // logs 2

scopeFunction();

console.log(x); // after running the function, the value of x is 4 

// second example: the inverse is not true

function scopeFunction() {
    var x = 4;
}

scopeFunction();

// console.log(x); // returns error; x is not defined

// 8. Closures: Functions form closures around the data they house. If an object returned from the 
// Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can 
// continue to exist in these closures! (See: our meeting-room app for an example!) 

function makeProduct(id, name) {
    var discount = 0;
    return {
        id: id,
        name: name,
        setDiscount: function(discount) {
            discount = discount; // here is a closure referencing discount
        }
    };
}

