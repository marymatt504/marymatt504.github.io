/*
DATATYPES

Number - a number is a simple or primitive data type of numeric value. As a simple data type it is copied by value.
Numbers take up 8 bytes of memory.
For example,
*/

var x = 2; // x is assigned value 2

var y = x; // y is assinged the value a x, which is 2 (a simple data type); so it copies the value 2.

x = 4; // here we change the value of x, which will not affect y because y copied the value, not the reference x, which
// we can confirm below by logging the value of y.

console.log(y); // y still equals 2

/*
String - a string is a simple/primitive data type and is made up of characters between two like quotation marks.
*/

var string = "This is a String!";

/*
Boolean - a boolean is a simple/primitive data type with a value of eithe true or false, which takes up 1 byte of memory.
*/

/*
Array - an array is a complex data type, meaning it can be made of several different data types
separated by commas inside of square brackest like below. Arrays are ordered zero-indexed lists.
Values within an array can be accessed via their index like below.
*/

var myArray = [1,2,3,4,5];
console.log(myArray[0]); // will log to the console the value at index 0 of the array.

/*
Object - An object is a complex data type and list of key/value pairs. They are not ordered like an array, nor
zero-indexed; rather, objects values are accessed via their keys. See example below.
*/

var mary = {
    firstName: 'Mary',
    lastName: 'Matthews',
    age: 29,
    homeTown: 'New Orleans'
};

console.log (mary.firstName); // will log to the console the value at the key firstName, "Mary"

/*
Function - a function is a piece of stored code that can be invoked by calling the function. Like such...
It allows us to reuse code without repeating ourselves. A function can be stored in a variable as well.
*/

function myFunction() {
    return "When called, this will be returned by the function.";
}

/*
Undefined - is the value when a variable has been declared, but does not yet have a value.
*/

var dogName; // The varaible dogName is undefined. 

/*
null - null is when a value is specifically set to not have a value. Unlike undefined, which occurs naturally
when a variable is declared, but not yet initialized, null only occurs when the developer
specifically sets the variable to have no value.
*/

var dogName = null; // in this case dogName would be set to have no value.

/*
NaN - means Not a Number // indicates that a value is not a legal number
Infinity - a numberic value representing infinity
-infinity - the negative value of infinity.

Simple data types vs complex data types -- Simple data types include numbers, strings, booleans and NaN
undefined and null. They can only store their own data type within them. They are immutable (values don't get
changed; just get replaced) and have a defined size. They are copied by value.
Complex data types include objects, arrays, and functions -- they are unlimited in size, can store other data types
within them, and are copied by reference. See examples above under the "Number" section to see how simple data
types are copied by value. See below of copy by reference example.
*/

var exampleArray = [2,3,4,5];

var copyArray = exampleArray; // copyArray points towards exampleArray

exampleArray.push(6); // will push 6 onto exampleArray; because copyArray is pointing towards
// exampleArray, it too will update.

console.log(copyArray); // prints [2,3,4,5,6]


