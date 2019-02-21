

var riderChoices = ["roczen", "anderson", "wilson", "brockbank"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersGuessed = [];

var wins = 0;
var remaining = 13;
                    // Variables Above //

var currentWordText = document.getElementById("current-word");
var guessesText = document.getElementById("guesses-left");
var lettersText = document.getElementById("letters-used");
var winsText = document.getElementById("wins");
var randomIndex;
var riderChoice;
var underscores;

function startGame(){
    //scope random index set the global var
    randomIndex = Math.floor(Math.random() * riderChoices.length);
    //chose our rider "roczen"
     //scope riderChoice set the global var
    riderChoice = riderChoices[randomIndex];
    console.log(riderChoice);
    underscores = [];
    lettersGuessed = [];
    remaining = 13;
    for(var i = 0; i < riderChoice.length; i++){
        // ["_", "_"]
        underscores.push("_");
    }
    currentWordText.textContent = "Current Word:  "+ underscores.join(" ");
}
startGame()

// var riderChoice = "roczen"
// var lettersGuessed = ['r', 'o'];


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    //loops through alpabet and checks if usergues is a valid letter
    var letterFound = false;
    //has to be a valid letter in the alphabet
    if (alphabet.includes(userGuess)) {
        //cannot be a letter that the user has already guessed
        if (lettersGuessed.includes(userGuess) === false) {
            for(var i = 0; i < riderChoice.length; i++){
                //if tuserGuess is equal to our letter in rider choice
                if(userGuess === riderChoice[i]){
                    //in our undercores array we will replace that underscore with the letter the user guessed
                    letterFound = true; //your user types a letter that exist in your rider choice
                    underscores[i] = userGuess
                    lettersGuessed.push(userGuess)
                }
            }
            //if the letter wasnt in word 
            if(letterFound === false){
                //minus 1 from score
                remaining--
                //add the letter to already guessed letters
                lettersGuessed.push(userGuess)
            }
            //see if the userhas no guessedremaining they lost
            if(remaining <= 0){
                if(confirm("you lost, would you like to continue?")){
                    startGame()
                }

            }else{
                //user has guesses remaining and we check to see if the user guessed the whole word
                if(riderChoice === underscores.join("")){
                    if(confirm("you are a winner, would you like to continue")){
                        startGame()
                    }
                } 

            }

        }
        //loop thourhg our riderChoice 
    }
    currentWordText.textContent = "Current Word:  "+ underscores.join(" ");
    guessesText.textContent = "Remaining Guesses: " + remaining;
    lettersText.textContent = "Letters Guessed:  " + lettersGuessed.join(", ");
    winsText.textContent 
}