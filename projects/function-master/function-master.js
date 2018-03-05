//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return its values in an array

function objectValues(object) {
    var array = [];
    
    for (var key in object) {
        array.push(object[key]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its keys in a string each separated with a space

function keysToString(object) {
    var string = "";
    
    for (var key in object) {
        string += key + " ";
    }
    return string.slice(0, string.length - 1) // returns A new string containing the extracted section of the string.
    
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space",

function valuesToString(object) {
    var newString = "";
    
    for (var key in object) {
        if (typeof object[key] === "string") {
        newString += object[key] + " ";    
        }
    }
    
    return newString.slice(0, newString.length - 1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object"

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (typeof collection === 'object') {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized"

function capitalizeWord(string) {
    var firstLetter = string[0];
    firstLetter = firstLetter.toUpperCase();
    var stringWithoutFirst = string.slice(1,string.length);
    var newString = firstLetter + stringWithoutFirst;
    return newString;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
// note for Thursday: should probably reuse the function above in this problem!!
// "welcome to new orleans"
// ["welcome", "to", "new", "orleans"]

function capitalizeAllWords(string) {
    var arrayOfWords = string.split(" "); // ["my", "name", "is", "mary"]
    for (var i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = capitalizeWord(arrayOfWords[i]);
    }
    return arrayOfWords.join(" ");
    
}




//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'"

function welcomeMessage(object) {
    object.name = capitalizeWord(object.name);
    return "Welcome" + " " + object.name + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name and a species and return '<Name> is a <Species>'"

function profileInfo(object) {
    object.name = capitalizeWord(object.name);
    object.species = capitalizeWord(object.species);
    return object.name + " is a " + object.species;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array 
// return them as a string separated by a space, if there are no noises return 'there are no noises'"

function maybeNoises(object) {
    if (object.noises) {
        if (object.noises.length > 0) {
            return object.noises.join(" ");
        } else {
            return "there are no noises";
        }
        
    } else {
        return "there are no noises";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and 
// return true if <word> is in <string of words>, otherwise return false."

function hasWord(string, word) {
    var stringArray = string.split(" "); // string = "my name is" word = 'mary' 
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === word) {
            return true;
        } 
            
    } return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object"

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
function isFriend(name, object) {
    if (object.friends) {
         var friendArray = object.friends;
    for (var i = 0; i < friendArray.length; i++) {
        if (friendArray[i] === name) {
            return true;
        }
    }
    return false;
    } else {
        return false;
    }
   

}

//////////////////////////////////////////////////////////////////////
// # 25 -- Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with"

function nonFriends(name, arrayOfPeople) {
  var arrayAllNames = [];
  for (var i = 0; i < arrayOfPeople.length; i++) {
    arrayAllNames.push(arrayOfPeople[i].name); // notFriednsWith includes all names;
    // would want to loop through and check if each name is in friends of <name> and 
    //delete from notFriendsWith if they are friends
    }
  
  var person = {};
  var personFriends = [];
  
  for (var i = 0; i < arrayOfPeople.length; i++) {
    if (name === arrayOfPeople[i].name) {
      person = arrayOfPeople[i];
      personFriends = person.friends; // personFriends is the list of friends for the name we pass in
    }
  }
  
//   console.log("arrayAllNames", arrayAllNames);
//   console.log("personFriends", personFriends);
  
  var nonFriendsList = [];
  
  for (var i = 0; i < arrayAllNames.length; i++) {
    if (personFriends.indexOf(arrayAllNames[i]) === -1) {
      if (arrayAllNames[i] !== name) {
      nonFriendsList.push(arrayAllNames[i]);
    }
    }
  }
  return nonFriendsList;
  
}



// }

// check thename 

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. 
// Should update the property <key> on <object> with new <value>. 
// If <key> does not exist on <object> create it."

function updateObject(object, key, value) {
       object[key] = value;
       return object;
   }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and an array of strings. 
// Should remove any properties on <object> that are listed in <array>

function removeProperties(object, array) {
    var propertiesInObject = [];
   
    for (var key in object) {
        propertiesInObject.push(key); //propertiesInObject is array of properities
    }
  
  console.log("propertiesInObject", propertiesInObject);
  
    for (var i = 0; i < propertiesInObject.length; i++) {
        if (array.indexOf(propertiesInObject[i]) !== -1) {
          console.log(propertiesInObject[i]);  
          delete object[propertiesInObject[i]];
        }
    }
    
    return object; 
  
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should take an array and return an array with all the duplicates removed

function dedup(array) {
    var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}