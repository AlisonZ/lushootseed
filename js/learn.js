'use strict';
var arrayOfFlashcards = [];

function Flashcard(eng, lush, url, idNum) {
  this.english = eng;
  this.lushootseed = lush;
  this.pictureurl = url;
  this.idNum = idNum;
  this.sound = 0;
  this.shown = false;
  this.push(arrayOfFlashcards);
}

//make Flashcards from array of data using FOR loop

//randomly select Flashcard by id # for display to the user, display it, and change it's shown property to True, and save array to local storage

//When shown = true > 6 show button for the test page
