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
  new Flashcard('carrot','\u0161\u0259g\u02B7aq', 'image/wordphotos/carrots_basket.jpeg', 1, 0, 0);
  new Flashcard('salmon','s\u0294uladx\u02B7', 'image/wordphotos/salmon.jpg', 2, 0, 0);
  new Flashcard('oyster', '\u019B\u0315ux\u030C\u02B7\u019B\u0315ux\u030C\u02B7', 'image/wordphotos/oyster.jpeg', 3, 0, 0);
  new Flashcard('coffee', 'kupi', 'image/wordphotos/coffee.jpg', 4, 0, 0);
  new Flashcard( 'berry/fruit','sq\u0313\u02B7\u0259la\u026C\u0259d', 'image/wordphotos/berries.jpeg', 5, 0, 0);
  new Flashcard('soup','s\u026Cub', 'image/wordphotos/soup.jpg', 6, 0, 0);
  new Flashcard('eggs','\u0294\u0259\u0294us', 'image/wordphotos/eggs.jpg', 7, 0, 0);
  new Flashcard('clam', 's\u0294ax\u030C\u02B7u\u0294','image/wordphotos/clam.jpeg', 8, 0, 0);
  new Flashcard('mussels','tulq\u02B7', 'image/wordphotos/mussels.jpg', 9, 0, 0);
  new Flashcard('crab','b\u0259sq\u02B7', 'image/wordphotos/crab.jpg', 10, 0, 0);
  new Flashcard('geoduck', 'g\u02B7id\u0259q','image/wordphotos/geoduck.jpg', 11, 0, 0);
  new Flashcard('potatoes', 'spiq\u02B7uc','image/wordphotos/potatoes.jpg', 12, 0, 0);
  new Flashcard('octopus', 'sqibk\u0313\u02B7', 'image/wordphotos/octopus.jpg', 13, 0, 0);
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
