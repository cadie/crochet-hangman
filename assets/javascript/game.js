$(document).ready(function(){

// Array of words that are chosen for the hangman game
var wordList = ["needle", "hook", "yarn", "wool", "cotton", "handmade", "blanket", "afghan", "craft", "double crochet", "coasters"];
var userGuesses = [];
var winCount = 0;
var lossCount = 0;
var guesses = 8;

// selects a random word from the words array and returns it to the function
function selectWord(){
  return wordList[Math.floor(Math.random() * wordList.length)];
}
// sets the computer chosen word to the variable chosenWord
var selectedWord = selectWord();

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
var hiddenWord = answerBlanks(selectedWord);
console.log(selectedWord);

// writes the hiddenWord into the div in the html
$('#current-word').html(hiddenWord);

$(document).keyup(function(event) {//runs whenever a key is pressed
  if (event.which >= 65 && event.which <= 90){
    var userKey = (event.key);
    userGuesses.push(userKey);
    displayGuess();
    updateGuesses();
  }
});

function updateGuesses(){
  guesses--;
  $('#lives-left').html(guesses);
  if (guesses === 0){
    alert("you lose");
    addLosses();
  }
}

function addLosses(){
  lossCount++;
  $('#losses').html(lossCount);
  newGame();
}

// this function will reset the game. choose a new word, reset remaining guesses count, reset incorrect letter div while leaving the wins and loss count
function newGame(){

}

function displayGuess() {
  var workingWord = "";
  for (var i = 0; i < selectedWord.length; i++) {
    var letter = selectedWord[i];
    var foundLetter = false;
    for (var j = 0; j < userGuesses.length; j++) {
      if (userGuesses[j] === letter){
        workingWord += letter + " ";
        foundLetter = true;
      }
    }
    if (foundLetter === false) {
      workingWord+="_ ";
      $('#incorrect-letters').append(event.key + " ");
    }
    foundLetter = false;
  }
  $('#current-word').html(workingWord);
};

});
