/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables 
 * are named identifiers that can point to values of a particular type, like a Number, String, 
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we 
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */ 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// VAR, LET, CONST // 

/*
var, let and const 
In order to reaccess values throughout time in a program, we need to store them in either a var, let or constant.
Let and constant became available in ES6.

VAR:
Using keywork var, we can store a value in a variable. Variables are either scoped to the function within which
they are declared (local scope), or if declared outside of a function, they are globally scoped. Variable declarations
are also hoisted to the top of their scope.
For example,
*/

function myFunction() {
    return myVariableTwo;
}

console.log(myFunction());

var myVariableTwo = 10;

/*
Even though myVariableTwo is not defined in the function, calling the function doesn't return an error
because myVariableTwo is declared below and hoisted to the top.

LET:
let is the keyword to declare a block-scoped variable, meaning that it is scoped to a block of code, inside
a for loop or if-statement. Unlike constants, let can be reassigned a new value. Let can also be hoisted to the
top of it's scope.
For example,
*/

// if (true) {
//     console.log (x);
//     let x = 2;
// }

// console.log(x) after the if block of code will return an error because x does not exist outside of it's block scope
// The if statement code will log to the console undefined because x is a let and is hoisted to the top of the block scope.

/*
CONST:
the keyword const declares a variable that cannot be reassigned a new value. Constants must be assigned a value
at the time at which they are declared. Constants, like lets, are block-scoped. However, their 
declarations do not get hoisted to the top of their scope.
For example,
*/

// if (true) {
//     console.log(b);
//     const b = "hello";
// }

// const b is not available when it is logged because it is not available until it is defined/assigned; i.e. it is not hoisted
// to the top of its scope.

/*
HOISTING:
Hoisting refers to whether or not the declaration of a variable with keywords var, let and const "hoists" the declaration
to the top of the variables scope. variables defined with keyword var are hoisted to the top of their scope; variables
declared with the keyword let are also hoisted to the top of their scope. Variables declared with the keyword const are
not hoisted. See examples in var, let and const sections above.

CLOSURE:
Closure is when a variable has a value due to its declaration in a parent scope.
For example,
*/

var b = "bubbles";

function myBubbleFunction() {
    return b + " for everyone!";
}

/*
Variable b can be used in the function because it's value has been previously defined in a parent scope. 
*/







