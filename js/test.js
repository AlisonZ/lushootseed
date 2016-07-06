'use strict';
//NOTE TO SELF -- THIS PAGE WILL BREAK IF USER HAS NOT VISITED LEARN.HTML AND HAS 5 TRUES FIRST!!!!

var eWord = JSON.parse(localStorage.getItem('arrayOfFlashcards'));
console.log(eWord);
console.log('length',eWord.length);
var words = [];
var matching1Array = [];
var matching2Array = [];

var matchingLeft = document.getElementById('matching_left');
var matchingRight = document.getElementById('matching_right');
var correctLeft = document.getElementById('correct_left');
var correctRight = document.getElementById('correct_right');

function processLocalStorage() {
  for(var i = 0; i < eWord.length; i++) {
    if(eWord[i].shown){
      words.push(eWord[i]);
    }
  }
}

var randomNumber = function(maxLength) {
  return Math.floor(Math.random() * maxLength);
};

function selectMatching1Array() {
  while(matching1Array.length < 5) {
    var rand = randomNumber(words.length);
    if(words[rand].timesShown !== 0) {
      words[rand].timesShown = 0;
      matching1Array.push(words[rand]);
    }
  }
  console.table(matching1Array);
}

function selectMatching2Array() {
  while(matching2Array.length < matching1Array.length) {
    var rand = randomNumber(matching1Array.length);
    if(matching1Array[rand].timesShown === 0) {
      matching1Array[rand].timesShown = 1;
      matching2Array.push(matching1Array[rand]);
    }
  }
  console.table(matching2Array);
}

function liBuilder(content, destination, classy, dataForMatch) {
  var placeholder = document.createElement('li');
  placeholder.textContent = content;
  if(classy) {
    placeholder.className = classy;
  }
  if(dataForMatch) {
    placeholder.dataset.match = dataForMatch;
  }
  destination.appendChild(placeholder);
}

function buildMatchingLeft() {
  for(var i = 0; i < matching1Array.length; i++) {
    liBuilder(matching1Array[i].english, matchingLeft, 'not_selected', matching1Array[i].idNum);
  }
}

function buildMatchingRight() {
  for(var i = 0; i < matching1Array.length; i++) {
    liBuilder(matching2Array[i].lushootseed, matchingRight, 'not_selected', matching2Array[i].idNum);
  }
}

matchingLeft.addEventListener('click', function(event) {
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  for(var i = 0; i < matchingLeftNodes.length; i++) {
    if(matchingLeftNodes[i].classList.contains('selected')) {
      matchingLeftNodes[i].classList.remove('selected');
      matchingLeftNodes[i].classList.add('not_selected');
    }
  }
  event.target.classList.remove('not_selected');
  event.target.classList.add('selected');
  var bool = true;
  for(var i = 0; i < matchingRightNodes.length; i++) {
    if(matchingRightNodes[i].dataset.match === event.target.dataset.match) {
      if(matchingRightNodes[i].classList.contains('selected')) {
        bool = false;
        correctAnswer();
        break;
      }
    }
  }
  if(bool) {
    for(var i = 0; i < matchingRightNodes.length; i++) {
      if(matchingRightNodes[i].classList.contains('selected')) {
        wrongAnswer();
      }
    }
  }
});

matchingRight.addEventListener('click', function(event) {
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  for(var i = 0; i < matchingRightNodes.length; i++) {
    if(matchingRightNodes[i].classList.contains('selected')) {
      matchingRightNodes[i].classList.remove('selected');
      matchingRightNodes[i].classList.add('not_selected');
    }
  }
  event.target.classList.remove('not_selected');
  event.target.classList.add('selected');
  var bool = true;
  for(var i = 0; i < matchingLeftNodes.length; i++) {
    if(event.target.dataset.match === matchingLeftNodes[i].dataset.match) {
      if(matchingLeftNodes[i].classList.contains('selected')) {
        bool = false;
        correctAnswer();
        break;
      }
    }
  }
  if(bool) {
    for(var i = 0; i < matchingLeftNodes.length; i++) {
      if(matchingLeftNodes[i].classList.contains('selected')) {
        wrongAnswer();
      }
    }
  }
});

function correctAnswer() {
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  var correctLeft = document.getElementById('correct_left');
  var correctRight = document.getElementById('correct_right');
  for(var i = 0; i < matchingLeftNodes.length; i++) {
    if(matchingLeftNodes[i].classList.contains('selected')) {
      var placeholderOne = matchingLeftNodes[i];
    }
  }
  for(var i = 0; i < matchingRightNodes.length; i++) {
    if(matchingRightNodes[i].classList.contains('selected')) {
      var placeholderTwo = matchingRightNodes[i];
    }
  }
  placeholderOne.classList.remove('selected');
  placeholderOne.classList.add('correct');
  placeholderTwo.classList.remove('selected');
  placeholderTwo.classList.add('correct');
  console.log('correct answer');
  correctLeft.appendChild(placeholderOne);
  correctRight.appendChild(placeholderTwo);
  testForOneCorrect();
}

function wrongAnswer() {
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  for(var i = 0; i < matchingLeftNodes.length; i++) {
    if(matchingLeftNodes[i].classList.contains('selected')) {
      var placeholderOne = matchingLeftNodes[i];
    }
  }
  for(var i = 0; i < matchingRightNodes.length; i++) {
    if(matchingRightNodes[i].classList.contains('selected')) {
      var placeholderTwo = matchingRightNodes[i];
    }
  }
  placeholderOne.classList.remove('selected');
  placeholderOne.classList.add('wrong');
  placeholderTwo.classList.remove('selected');
  placeholderTwo.classList.add('wrong');
  setTimeout(function() {
    placeholderOne.classList.remove('wrong');
    placeholderOne.classList.add('not_selected');
    placeholderTwo.classList.remove('wrong');
    placeholderTwo.classList.add('not_selected');
  }, 500);
  console.log('wrong answer');
}

function testForOneCorrect() {
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  if(matchingLeftNodes.length < 2) {
    matchingLeftNodes[0].classList.remove('not_selected');
    matchingLeftNodes[0].classList.add('correct');
    matchingRightNodes[0].classList.remove('not_selected');
    matchingRightNodes[0].classList.add('correct');
    correctLeft.appendChild(matchingLeftNodes[0]);
    correctRight.appendChild(matchingRightNodes[0]);
    document.getElementById('test_complete').style.display = 'block';
  }
}

//call some functions
processLocalStorage();
selectMatching1Array();
selectMatching2Array();
buildMatchingLeft();
buildMatchingRight();
