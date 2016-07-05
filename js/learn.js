'use strict';

var arrayOfFlashcards = [];
var numFlashcardsShown = 0;
var imgEl = document.getElementById('picture_tag');
var liElEng = document.getElementById('english_translation');
var liElLus = document.getElementById('lushootseed_translation');
var buttonNextFlashcard = document.getElementById('next_flashcard');
var buttonTakeTest = document.getElementById('take_test');

buttonNextFlashcard.addEventListener('click', displayFlashcard);

function Flashcard(eng, lush, url, idNum, sound, phonetic) {
  this.english = eng;
  this.lushootseed = lush;
  this.pictureurl = url;
  this.idNum = idNum;
  this.sound = sound;
  this.phonetic = phonetic;
  this.shown = false;
  arrayOfFlashcards.push(this);
}

//make Flashcard objects here.  For now these are test objects
function makeFlashcards() {
  new Flashcard('englishtranslation1', 'lushootseed translation1', 'image/tester_images/coffee_test1.jpg', 1, 0, 0);
  new Flashcard('englishtranslation2', 'lushootseed translation2', 'image/tester_images/door_window.jpeg', 2, 0, 0);
  new Flashcard('englishtranslation3', 'lushootseed translation3', 'image/tester_images/pexels-photo-96469.jpeg', 3, 0, 0);
}

//randomly select Flashcard by id # for display to the user, display it, and change it's shown property to True, and save array to local storage
var generateRandomNumber = function() {
  return Math.floor(Math.random() * (arrayOfFlashcards.length));
};

function displayFlashcard() {
  var placeholder = generateRandomNumber();
  arrayOfFlashcards[placeholder].shown = true;
  imgEl.src = arrayOfFlashcards[placeholder].pictureurl;
  liElEng.textContent = arrayOfFlashcards[placeholder].english;
  liElLus.textContent = arrayOfFlashcards[placeholder].lushootseed;
  numFlashcardsShown++;
  localStorage.setItem('arrayOfFlashcards', JSON.stringify(arrayOfFlashcards));
  showTestButton();
}

function showTestButton() {
  if(numFlashcardsShown > 6) {
    buttonTakeTest.className = 'show_take_test';
  }
}

//call functions
makeFlashcards();
displayFlashcard();
