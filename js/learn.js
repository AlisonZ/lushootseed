'use strict';

var arrayOfFlashcards = [];
var numFlashcardsShown = 0;
var imgEl = document.getElementById('picture_tag');
var liElEng = document.getElementById('english_translation');
var liElLus = document.getElementById('lushootseed_translation');
var buttonNextFlashcard = document.getElementById('next_flashcard');
var buttonTakeTest = document.getElementById('take_test');

function Flashcard(eng, lush, url, idNum) {
  this.english = eng;
  this.lushootseed = lush;
  this.pictureurl = url;
  this.idNum = idNum;
  this.sound = 0;
  this.shown = false;
  this.push(arrayOfFlashcards);
}

//make Flashcard objects here.  For now these are test objects
function makeFlashcards() {
  new Flashcard('englishtranslation1', 'lushootseed translation1', 'image/tester_images/coffee_test1.jpg', 1);
  new Flashcard('englishtranslation2', 'lushootseed translation2', 'image/tester_images/door_window.jpeg', 2);
  new Flashcard('englishtranslation3', 'lushootseed translation3', 'image/tester_images/pexels-photo-96469.jpeg', 3);
}

//randomly select Flashcard by id # for display to the user, display it, and change it's shown property to True, and save array to local storage
var generateRandomNumber = function() {
  return Math.floor(Math.random() * (arrayOfFlashcards.length));
};

function dislayFlashcard() {
  var placeholder = generateRandomNumber;
  arrayOfFlashcards[placeholder].shown = true;
  imgEl.src = arrayOfFlashcards[placeholder].pictureurl;
  liElEng.textContent = arrayOfFlashcards[placeholder].english;
  liElLus.textContent = arrayOfFlashcards[placeholder].lushootseed;
}

//button on the page should advance to the next picture

function nextFlashcard() {
}
// <button id="next_flashcard">Next Flashcard</button>
// <button id="take_test">Take a quiz!</button>

//When shown = true > 6 show button for the test page

//call functions
makeFlashcards();
