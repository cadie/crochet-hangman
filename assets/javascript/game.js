$(document).ready(function(){

// Array of words that are chosen for the hangman game
var wordList = ["needle", "hook", "yarn", "wool", "cotton", "handmade", "blanket", "afghan", "craft", "double crochet", "coasters"];
var userGuesses = [];
var winCount = 0;
var lossCount = 0;
var guesses = 9;

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
  var userKey = (event.key);
  userGuesses.push(userKey);
  displayGuess();
});

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
      $('#incorrect-letters').append(event.key);
    }
    foundLetter = false;
  }
  $('#current-word').html(workingWord);
};

});
