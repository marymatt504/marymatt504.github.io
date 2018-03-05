// CONTROL FLOW
// Control flow refers to the use of conditional statements to control the flow (i.e. what code is executed) in our code.
// There are a few different ways we can do this including if statements and their chain if else if
// statements, as well as switch statements, which can make the code easier to read when there are several conditions.
// They work by evaluating whether the condition is true or false. Truthyness or Falsyness can also coerce the condition
// to a true or false value, to then contorl the flow of the code in a certain way.

// The first example is an if else statement. 

var x = 2;

if (x === 2) {
    var message = "X equals two!";
} else {
    var message = "X does not equal two.";
}

console.log(message); // would log to the console "X equals two!" 

// we could add a 2nd condition that if x === 3, to return "X equals three." And we'd change the else to something like
// "X doesn't equal two or three".
// Instead we'll do this with a switch statement.

var number = 3;

switch (number) {
    case 2: 
        console.log ("X equals two!");
        break;
    case 3: 
        console.log ("X equals three!");
        break;
    default: 
        console.log("X doesn't equal two or three, sorry!");
}