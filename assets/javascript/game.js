
// Creating a list of riders that the user can guess
var riderChoices = ["roczen", "anderson", "wilson", "webb"];
// Creating a list of letters the user can click on
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// empty array we will store letters that have been guessed in
var lettersGuessed = [];
// The score that the user will see
var wins = 0;
var remaining = 13;
// calling the ID's from HTML and storing them in a variable 
var currentWordText = document.getElementById("current-word");
var guessesText = document.getElementById("guesses-left");
var lettersText = document.getElementById("letters-used");
var winsText = document.getElementById("wins");
var randomIndex;
var riderChoice;
var underscores;


// the function that we will run before the user clicks any keys. We can call this at anytime to reset the game also
function startGame(){
    // grabbing a random rider from riderChoice(s)
    randomIndex = Math.floor(Math.random() * riderChoices.length);
    // storing the random rider to riderChoice
    riderChoice = riderChoices[randomIndex];
    // show the rider in the console // just for grading and testing
    console.log(riderChoice);
    // empty arrays that we will be pushing content into
    underscores = [];
    lettersGuessed = [];
    // the remaining score that will always be displayed when we restart or play again
    remaining = 13;
    // for loop pushing an "_" for each letter in the riders name
    for(var i = 0; i < riderChoice.length; i++){
        // ["_", "_"]
        underscores.push("_");
    }
    // displaying "current word: " + the underscores for the user to see before they guess
    currentWordText.textContent = "Current Word:  "+ underscores.join(" ");
}
    // start the game by calling the function
    startGame()



    // when the user lets their finger off a key run a function
    document.onkeyup = function(event) {
        // store the event to a variable
        var userGuess = event.key.toLowerCase();

        var letterFound = false;
        // if the alphabet includes the users guess, run the code below
        if (alphabet.includes(userGuess)) {
            // this cannot be a letter that the user has already guessed
            if (lettersGuessed.includes(userGuess) === false) {
                for(var i = 0; i < riderChoice.length; i++){
                    // if the userGuess key entered is equal to our letter in rider choice at the index,
                    // then take the code below and apply it
                    if(userGuess === riderChoice[i]){
                        // the code below will run if the above statement is true.
                        //in our undercores array we will replace that underscore with the letter the user guessed
                        //your user types a letter that exist in your rider choice
                        letterFound = true;
                        underscores[i] = userGuess
                        lettersGuessed.push(userGuess) 
                    }
                }
                // if the letter wasnt in word 
                if(letterFound === false){
                    // minus 1 from score
                    remaining--
                    // add the letter to already guessed letters
                    lettersGuessed.push(userGuess)
                }

                //if the user has any remaining guesses they lost
                if(remaining <= 0){
                    // alet the user and ask if they want to continue
                    if(confirm("you lost, would you like to continue?")){
                        // start the game over
                        startGame()
                    }
                    // if the user does not have guesses remaining, then inform the user that they lost &
                    // ask if they want to play another game.

                    }else{
                    //user has guesses remaining and we check to see if the user guessed the whole word
                    if(riderChoice === underscores.join("")){
                        if(confirm("Congradulations you WON!!!, Do you want to try your luck again?")){
                            // add 1 to the wins
                            wins++
                            // start game over
                            startGame()
                        }
                    } 
                }
            }
        }
        // call the word, display content on the HTML doc + the vaiable we want to show or updte
        currentWordText.textContent = "Current Word:  "+ underscores.join(" ");
        guessesText.textContent = "Remaining Guesses: " + remaining;
        lettersText.textContent = "Letters Guessed:  " + lettersGuessed.join(", ");
        winsText.textContent = "Wins: "+ wins;
    }




