// import my inquires
var myimports=require('./word.js');
var inquirer=require('inquirer');
var Word=myimports.word;
var Letter=myimports.letters;
// *****************************//
console.log("Welcome to My Hangman!");
console.log("Guess the name of the city");
console.log("Goodluck!");
// create a function constructor for game
var game=function(){
// initiate the game
var guessremain=10;
// generate a random word
var wordtoguess=myimports.Random();
var word_=new Word(wordtoguess);
// init the word _
word_.init();
// and diplay it
console.log(word_.displayword());
// intern function for a game cycle
function gamecycle() {
// to loop through the prompt
if(guessremain>0)
{
// remainig guesses	
console.log('You have '+guessremain+' Guesses remaining');
inquirer.prompt([
  {
    name: "letter",
    message: "choose a letter :"
  }
]).then(function(answers) {
    // check the letter  
    word_.check(answers.letter);
    // display the result
    console.log(word_.displayword());
    // decrement the remaining guesses
    guessremain--;
    // play it again
   gamecycle();
   // if all letters in the word were guessed the player win and a new game will be generated
   if(word_.end())
   {
   	console.log('-----------------you won---------------------');
   	console.log('a new city name will be generated');
   	new game();
   }
});
}
else{
    // if the player has tried 10 times  a new game will be generated
	console.log('------------------you lost------------------');
	console.log('a new city name will be generated');
	new game();
}
}
gamecycle();
}
new game();