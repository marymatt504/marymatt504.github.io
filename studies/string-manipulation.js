// There are several ways we can manipulate strings, with string operators and with string methods.
// In this first example, we will manipulate a string with a string operator. We can use the + to do 
// string concatenation.

var myString = "My name is ";

var myName = "Mary";

myString += myName; // reassigns myString to the concatenation of myString and myName

// We can also use methods to manipulate strings, such as split, join, and splice.

myString.split(" "); // will split myString into an array of strings, splitting at each space between words;
// if we want to be able to access the array, we would need to save the above to a variable
// We could then join the array of strings back together in one string with join.
// splice is used to delete certain characters in a string