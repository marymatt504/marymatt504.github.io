/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = "dog";

animal['name'] = "Josie";

animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'ruff';

// Using an array function add another noise to the end of noises.

noises.push('grr'); // will push "grr" onto the end of noises

noises.unshift('yelp'); // will unshift 'yelp' onto the front of the array

//  Using bracket syntax again, add another element to the end of noises. 
// Make sure that the way you do this step would work no matter how many elements noises had. 
// In other words, don't hard code the position of the new element.

noises[noises.length] = "yipee";

console.log("this should be the array of noises", noises);

//  console.log the length of noises

console.log("length of noises",noises.length);

//  console.log the last element in noises again without hard coding the index.

console.log("last element in noises", noises[noises.length-1]);

//  console.log the whole array.

console.log("the whole array noises", noises);

//  Does it look right?




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  Using bracket syntax, assign the noises property on animal to our new noises array.

console.log('should be the object animal still with an empty array for noises', animal);

animal['noises'] = noises;
 
console.log('animal object should now have the noises in the array on it', animal);
 
 //  Using any syntax add another noise to the noises property on animal.

animal.noises.push('hello');

//  console.log animal.
console.log('animal should now have 5 noises', animal);

//  Does it look right?
 
 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
    
    You can access properities on objects via dot notation and bracket notation.
    Object.key = value;
    or Object[key] = value;
 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
    // You can access elements on an array via bracket notation. 
    // You can also also use methods to access arrays.
    var array = [2,3];
    array[0]; // will access the array at index 0
    
    

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Create a variable named animals and assign it to an empty array.

var animals = [];

animals.push(animal); // pushing the ojbect animal (dog) onto the array of animals

console.log('this is the array animals', animals);

var duck;

duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

animals.push(duck);

console.log('animals with duck should be below');
console.log(animals);

// Create two more animal objects each with a species, a name, and at least two sounds 
// sounds and add each one of them to `animals.

var secondAnimalObject = {
    species: 'cat',
    name: 'Rosie',
    noises: ['meow', 'hiss']
};

var thirdAnimalObject = {
    species: 'rabbit',
    name: "Roger",
    noises: ['pitter', 'patter']
};

animals.push(secondAnimalObject);

animals.push(thirdAnimalObject);

console.log('this should show animals with 4 objects');
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // choosing an object as the data structure because we will just
// list here the friends' names

// Write a function that takes our animals array and returns 
// the index of a random element using Math.random

function getRandom(animals) {
    return Math.floor(Math.random()*animals.length);
}

// Using a random index from this function that you just created, 
// get a random animal and add its name to friends.
//  console.log friends

var randomAnimalNameToAdd = animals[getRandom(animals)].name;

console.log('this is a random animal name', randomAnimalNameToAdd); 

friends.push(randomAnimalNameToAdd);

console.log('this should be the array of friends with the randomAnimal object');
console.log(friends);

// add friends as a property named friends on one of the animals in animals

animal.friends = friends;





/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
