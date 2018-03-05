/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals,name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]['name'] === name) {
            return animals[i];
        }
    
    } return null;
}

// Takes a paramater representing a String, the name of an animal on which to perform a search.
// Looks through the animals Array, and returns the animal's Object if an animal with that name exists.
// Returns null if no animal with that name exists



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i,1,replacement);
        }
    }
    return animals;
};



// Write a function called replace with a signature of replace(animals, name, replacement) { //... } that:
// Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, 
// and an Object that represents the replacement animal.
// If an animal with that name exists within the animals Array, 
// replace it's entire Object with the replacement Object.
// Otherwise do nothing.
// Test it on the website.


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
     for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i,1);
        }
    }
    return animals;
}

// Write a function called remove with a signature of remove(animals, name) that:
// Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
// If an animal with that name exists within the animals Array, remove it.
// Test that it works on the website.


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Add
// Write a function called add with a signature of add(animals, animal) { //... } that:
// Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.

// Checks that the animal Object has a name property with a length > 0.
// Checks that the animal Object has a species property with a length > 0.
// Has a unique name, meaning no other animals have that name.
// Adds this new Object to the animals Array, only if all the other conditions pass.
// Make sure it works.
// This is called data validation and it's extremely important in web development!

function add(animals, animal) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
            return;
        } else {
            if (animal.name.length > 0 && animal.species.length > 0) {
                return animals.push(animal);
            }
        }
    }
};

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
