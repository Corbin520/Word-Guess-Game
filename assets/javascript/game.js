

var riderChoices = ["roczen", "anderson", "wilson"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersGuessed = [];
var selectedWord = [];


var wins = 0;
var remaining = 13;
                    // Variables Above //

var currentWordText = document.getElementById("current-word");
var guessesText = document.getElementById("guesses-left");
var lettersText = document.getElementById("letters-used");
var winsText = document.getElementById("wins");

var randomIndex = Math.floor(Math.random() * riderChoices.length);

var riderChoice = riderChoices[randomIndex];
console.log(riderChoice);



document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    if (alphabet.includes(userGuess)) {
        if (lettersGuessed.includes(userGuess) === false) {
            lettersGuessed.push(userGuess);
        }
    
        if (riderChoice.includes(userGuess)) {
            //  User Guessed correctly //
            console.log("correctly");
        } else {
            // user guessed in-correctly //
           console.log("incorrect");
           remaining--;
        }
        if (lettersGuessed.includes(riderChoice))

        // this text below will display after the user presses a key a-z //
        currentWordText.textContent = "Current Word:  "+ riderChoice.length.fill("_");
        guessesText.textContent = "Remaining Guesses: " + remaining;
        lettersText.textContent = "Letters Guessed:  " + lettersGuessed.join(", ");
        winsText.textContent
    }
}
