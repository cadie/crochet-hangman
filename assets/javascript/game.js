
var hangman = {
  words: ["needle", "hook", "yarn", "wool", "cotton", "handmade", "blanket", "afghan", "craft"],
  wins: 0,
  losses: 0,
  guessesRemaining: 8,
  rightGuesses: 0,
  currentUserGuess: "",
  //computer chooses random word from words array
  chooseWord: function() {
    return hangman.words[Math.floor(Math.random() * hangman.words.length)];
  },
  //rewrite chosen word with underscores for as many characters are in the word
  displayHiddenWord: function(answerWord) {
      var wordLength = answerWord.length;
      var result = "";
      for (var i = 0; i<wordLength; i++){
        result = "_ " + result;
      }
      return result;
  },
  //handles the user key guess
  handleUserGuess: function(event){
    hangman.displayHiddenWord(hangman.chooseWord());
    var key = event.key;
    if(event.keyCode >= 65 && event.keyCode <= 90){ //only runs if the key pressed was a letter
      hangman.currentUserGuess = event.key;
      var chosenWord = hangman.displayHiddenWord(hangman.chooseWord()); //store
      hangman.playGame();
      hangman.printResults();
    }
  },
  printResults: function(){
    document.querySelector(".wins").innerHTML = hangman.wins;
    document.querySelector(".losses").innerHTML = hangman.losses;
    document.querySelector(".guesses-remaining").innerHTML = hangman.guessesRemaining;
  },
  playGame: function(){
    // if (rps.currentComputerGuess === rps.currentUserGuess){
    //   rps.ties++;
    // }
  }
};

document.onkeyup = hangman.handleUserGuess;
