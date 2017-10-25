// table of city names 
var chalk = require('chalk');
var  table_words=['barcelona','washington','paris','delhi','khartoum'];
// function to generate a random name 
function random()
{
this.random_word=table_words[Math.floor(Math.random()*table_words.length-1)];
return this.random_word;
}
// function constructor for words 	
function word(word)
{
this.word=word;
this.word_=[];
// a method to initiat the word with _
this.init=function(){
for (var i = 0; i<this.word.length; i++) {
	this.word_.push(new letters(this.word[i]));
}
}
// to display the word as a string
this.displayword=function(){
	var interword='';
    for (var i = 0; i < this.word_.length; i++) {
    		interword=interword+this.word_[i].display();
    	}	
  return interword;  	
}
// to check if a letter is in a word
this.check=function(lettertocheck){
	var checkresult;
  for (var i = 0; i < this.word_.length; i++) {
  	  if(this.word_[i].letter===lettertocheck && this.word_[i].guessedletter==false)
  	  {
       this.word_[i].guessedletter=true;
       checkresult=chalk.green('correct');
       break;
  	  }else
  	  {
  	  	checkresult=chalk.red('incorrect');
  	  }
  }
  console.log(checkresult);
}
// to check if there still letters to check or the word was guessed
this.end=function(){
   var end = true;
	for (var i = 0; i < this.word_.length; i++) {
         if(this.word_[i].guessedletter===false)
         {
          end=false;
          break;
         }
	}
	return end;
}
}
// to construct a letter that will display _ if it's not guessed and the letter if it's not the case
function letters(letter)
{
this.letter=letter;
this.guessedletter=false;
this.display= function() {
	 if(this.guessedletter)
 {
 	return this.letter;
 }
 else
 	return '_';
}
}
// export those three constructo functions
module.exports={word,letters,random};