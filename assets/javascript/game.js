$(document).ready(function(){

// Array of words that are chosen for the hangman game
var wordList = ["needle", "hook", "yarn", "wool", "cotton", "handmade", "blanket", "afghan", "craft", "double", "coasters", "gift", "shell"];
// empty array that is used to store the user's guesses
var userGuesses = [];
var winCount = 0;
var lossCount = 0;
var guesses = 8;
var selectedWord = "";
var hiddenWord;

function startGame(){
  // clear out userGuesses array
  userGuesses = [];
  // selects a random word from the words array and returns it to the variable
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  // returns underscores for all of the chars in the selectedWord that is passed as a parameter when the function is called
  function answerBlanks(answerWord) {
    var wordLength = answerWord.length;
    var result = "";
    for (var i = 0; i<wordLength; i++){
      result = "_ " + result;
    }
    return result;
  }
  // set a variable for the computer selected word displayed with underscores
  hiddenWord = answerBlanks(selectedWord);
  console.log(selectedWord);

  // writes the hiddenWord into the div in the html
  $('#current-word').html(hiddenWord);
}

//runs whenever a letter key is pressed
$(document).keyup(function(event) {
  if (event.which >= 65 && event.which <= 90){
    var userKey = (event.key);
    if (userGuesses.indexOf(userKey) === -1) {
      userGuesses.push(userKey);
      console.log(userGuesses);
      displayGuess();
      updateGuesses();
    }

  }
});

function updateGuesses(){
  guesses--;
  $('#lives-left').html(guesses);
  if (guesses === 0){
    lossCount++;
    alert("you lose");
    $('#losses').html(lossCount);
    newGame();
  }
}

// this function will run when the user clicks the new-game btn. It will reset the game by choosing a new word, reseting remaining guesses count, reseting incorrect letter div while leaving the wins and loss count.
$('#new-game').on('click', newGame());


function newGame(){
  guesses = 8;
  $('#incorrect-letters').html('');
  startGame();
}

function checkWin(workingWord) {
  var workingWordNoSpaces = workingWord.replace(/\s+/g, '');
  if (workingWordNoSpaces === selectedWord) {
    alert("WINNER!");
    winCount++;
    newGame();
  }
}


// this function
function displayGuess() {
  // workingWord holds the
  var workingWord = "";
  var foundLetter;
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

    }
    foundLetter = false;
  }
  if (foundLetter === false) {
    $('#incorrect-letters').append(event.key + " ");
  }
  $('#current-word').html(workingWord);
  checkWin(workingWord);
};

// newGame();

}); //end doc.ready
