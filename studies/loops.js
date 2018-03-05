// There are a few different types of loops we can use in javascript depending on what we want to loop over.
// To loop over an array, we use a for loop, which looks like

var array = [];

for (var i = 0; i < array.length; i++) { // in this line we use the 3 parts of the definition of a for loop
// first, the initalization, then the condition during which the loop should run; then the incrementor.
    console.log (array[i])// at each istance of i in the array, execute the code here; in this example,
    // log the value at i to the console
}

// The above is an example of looping forward over an array. Below is an example of looping backwards over an array.

for (var i = array.length-1; i > -1; i--) {
    console.log(array[i]);
}

// we can also use a for loop to count forward or backward -- doesn't need to over an array. For example.

for (var num = 1; num < 11; num ++) {
    console.log(num); // will log to the console the numbers 1 through 10
}

// we can also do this backwards...

for (var num = 10; num > 0; num--) {
    console.log(num); // will log to the console numbers 10 through 1
}

// To loop over an object, we would use a for in loop, which looks like

var user = {
    firstName: "Mary",
    lastName: "Matthews",
    age: 29
};

for (var key in user) {
    console.log(user[key])// execute the code here; would log to the console the value at each key in the object 
}

// Because objects are unordered; and rather properities with key-value pairs, there is no "forwards" and "backwards"
// when it comes to objects. 

// a while loop may also be used, and looks like

var count = 6;

while (count < 10) {
    console.log(count);
    count++; // increments, so that the loop ends once we reach the condition at which count is no longer less than 10
}