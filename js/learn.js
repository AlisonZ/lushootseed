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
  new Flashcard('šəgʷaq', 'carrot', 'image/wordphotos/carrots_basket.jpeg', 1, 0, 0);
  new Flashcard('sʔuladxʷ', 'salmon', 'image/wordphotos/salmon.jpg', 2, 0, 0);
  new Flashcard('ƛ̕ux̌ʷƛ̕ux̌ʷ', 'oyster', 'image/wordphotos/oyster.jpeg', 3, 0, 0);
  new Flashcard('kupi', 'coffee', 'image/wordphotos/coffee.jpg', 4, 0, 0);
  new Flashcard('sq̓ʷəlaɬəd', 'berry/fruit', 'image/wordphotos/berries.jpeg', 5, 0, 0);
  new Flashcard('sɬub', 'soup', 'image/wordphotos/soup.jpg', 6, 0, 0);
  new Flashcard('ʔəʔus', 'eggs', 'image/wordphotos/pexels-photo-96469.jpeg', 7, 0, 0);
  new Flashcard('sʔax̌ʷuʔ', 'clam', 'image/wordphotos/clam.jpeg', 8, 0, 0);
  new Flashcard('tulqʷ', 'mussels', 'image/wordphotos/mussels.jpg', 9, 0, 0);
  new Flashcard('bəsqʷ', 'crab', 'image/wordphotos/crab.jpg', 10, 0, 0);
  new Flashcard('gʷidəq', 'geoduck', 'image/wordphotos/geoduck.jpg', 11, 0, 0);
  new Flashcard('spiqʷuc', 'potatoes', 'image/wordphotos/potatoes.jpg', 12, 0, 0);
  new Flashcard('sqibk̓ʷ', 'octopus', 'image/wordphotos/octopus.jpg', 13, 0, 0);
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
