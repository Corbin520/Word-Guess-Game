 // userGuess needs to display a letter on a - when it is guessed correctly //

// I will need to call on something with HTML to display these letters for the user //

// Now that its all layed out, focus on one at a time. Finish Roczen before you move to a different one //

// Start concol.log things to see if it works // look into different objects such as getElementById //



var riderChoice = ['roczen', 'anderson', 'wilson'];

var word1 = "roczen";
var word2 = "anderson";
var word3 = "wilson";
var space = "_"

var roczenSpell = ["r", "o", "c", "z", "e", "n"];
var andersonSpell = ["a", "n", "d", "e", "r", "s", "o", "n"];
var wislonSpell = ["w", "i", "l", "s", "o", "n"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m",
                "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                

var wins = 0;
var remaining = 13;


var riderChoice = event.key

// Math.random will choose a random rider from riderChoice for the user to guess //
var riderChoice = riderChoice[Math.floor(Math.random() * riderChoice.length)];


// Roczen hang-man If/Else //
if ((userGuess === "r") || (userGuess === "o") || (userGuess === "c") || (userGuess === "z") ||
(userGuess === "e") || (userGuess === "n")) {
    

    
} else {
    remaining--;
}




























// // Anderson hang-man If/Else //
// if ((userGuess === "a") || (userGuess === "n") || (userGuess === "d") || (userGuess === "e") ||
// (userGuess === "r") || (userGuess === "s") || (userGuess === "o") || (userGuess === "n")) {

//     console.log()

// } else {
//     remaining--;
// }

// // Wilson hang-man If/Else //
// if ((userGuess === "w") || (userGuess === "i") || (userGuess === "l") || (userGuess === "s") ||
// (userGuess === "o") || (userGuess === "n")) {

//     console.log()

// } else {
//     remaining--;
// }