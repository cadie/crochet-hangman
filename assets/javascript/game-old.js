// Word array list
var words = ["needle", "hook", "yarn", "wool", "cotton", "handmade", "blanket", "afghan", "craft"];
var wins = 0;
var losses = 0;
var guessesRemaining = 8;
var rightGuesses = 0;


// selects a random word from the words array and returns it to the function
function selectWord(){
  return words[Math.floor(Math.random() * words.length)];
}

// sets the computer chosen word to the variable chosenWord
var chosenWord = selectWord();

// returns underscores for all of the characters in the computer selected word that is passed as a parameter when the function is called
function answerBlanks(answerWord) {
  var wordLength = answerWord.length;
  var result = "";
  for (var i = 0; i<wordLength; i++){
    result = "_ " + result;
  }
  return result;
}

// set a variable for the computer selected word displayed with underscores
var hiddenWord = answerBlanks(chosenWord);

function letterCheck(userKey){
  for (var i = 0; i < chosenWord.length; i++) {
    if (userKey === chosenWord.charAt([i])) {
        str.replace(i, userKey);
        rightGuesses++
        if (rightGuesses == chosenWord.length) {
          alert("You win!");
          wins++;
          document.querySelector("#wins").innerHTML = wins;
        };
    };
  };
};


// writes the underscores for the hidden word in the current word html
document.querySelector("#current-word").innerHTML = hiddenWord;

document.onkeyup = function(event) {//runs whenever a key is pressed
  if(event.keyCode >= 65 && event.keyCode <= 90){//Only runs when the key is a letter
    userGuess = String.fromCharCode( event.keyCode );//assigns the letter to UserGuess
    // letterCheck(userGuess);
    letterCheck(userGuess);
  };
};
