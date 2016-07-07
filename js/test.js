'use strict';

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

var classChanger = function(classChangee, classRemove, classAdd) {
  classChangee.classList.remove(classRemove);
  classChangee.classList.add(classAdd);
};

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

function selectMatching1Array() {
  while(matching1Array.length < 5) {
    var rand = randomNumber(words.length);
    if(words[rand].timesShown !== 0) {
      words[rand].timesShown = 0;
      matching1Array.push(words[rand]);
    }
  }
}

function selectMatching2Array() {
  while(matching2Array.length < matching1Array.length) {
    var rand = randomNumber(matching1Array.length);
    if(matching1Array[rand].timesShown === 0) {
      matching1Array[rand].timesShown = 1;
      matching2Array.push(matching1Array[rand]);
    }
  }
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
  if(event.target.tagName === 'LI') {
    for(var i = 0; i < matchingLeftNodes.length; i++) {
      if(matchingLeftNodes[i].classList.contains('selected')) {
        classChanger(matchingLeftNodes[i], 'selected', 'not_selected');
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
  }
});

matchingRight.addEventListener('click', function(event) {
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  if(event.target.tagName === 'LI') {
    for(var i = 0; i < matchingRightNodes.length; i++) {
      if(matchingRightNodes[i].classList.contains('selected')) {
        classChanger(matchingRightNodes[i], 'selected', 'not_selected');
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
  }
});

function correctAnswer() {
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  var correctLeft = document.getElementById('correct_left');
  var correctRight = document.getElementById('correct_right');
  document.getElementById('correct_title').style.display = 'block';
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
  classChanger(placeholderOne, 'selected', 'correct');
  classChanger(placeholderTwo, 'selected', 'correct');
  placeholderOne.style.opacity = 0;
  placeholderTwo.style.opacity = 0;
  correctLeft.appendChild(placeholderOne);
  window.getComputedStyle(placeholderOne).opacity;
  correctRight.appendChild(placeholderTwo);
  window.getComputedStyle(placeholderTwo).opacity;
  placeholderOne.style.opacity = 1;
  placeholderTwo.style.opacity = 1;
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
  classChanger(placeholderOne, 'selected', 'wrong');
  classChanger(placeholderTwo, 'selected', 'wrong');
  setTimeout(function() {
    classChanger(placeholderOne, 'wrong', 'not_selected');
    classChanger(placeholderTwo, 'wrong', 'not_selected');
  }, 500);
}

function testForOneCorrect() {
  var matchingLeftNodes = document.getElementById('matching_left').childNodes;
  var matchingRightNodes = document.getElementById('matching_right').childNodes;
  if(matchingLeftNodes.length < 2) {
    classChanger(matchingLeftNodes[0], 'not_selected', 'correct');
    classChanger(matchingRightNodes[0], 'not_selected', 'correct');
    matchingLeftNodes[0].style.opacity = 0;
    matchingRightNodes[0].style.opacity = 0;
    correctLeft.appendChild(matchingLeftNodes[0]);
    var correctLeftNodes = document.getElementById('correct_left').childNodes;
    window.getComputedStyle(correctLeftNodes[4]).opacity;
    correctRight.appendChild(matchingRightNodes[0]);
    var correctRightNodes = document.getElementById('correct_right').childNodes;
    window.getComputedStyle(correctRightNodes[4]).opacity;
    correctLeftNodes[4].style.opacity = 1;
    correctRightNodes[4].style.opacity = 1;
    document.getElementById('test_complete').style.display = 'block';
    document.getElementById('instructions').style.display = 'none';
  }
}

//check localStorage and load page content if it meets requirements
if(localStorage.arrayOfFlashcards) {
  var eWord = JSON.parse(localStorage.getItem('arrayOfFlashcards'));
  var counter = 0;
  for(var i = 0; i < eWord.length; i++) {
    if(eWord[i].shown) {
      counter++;
    }
  }
  if(counter < 5) {
    window.location = 'learn.html';
  } else {
    processLocalStorage();
    selectMatching1Array();
    selectMatching2Array();
    buildMatchingLeft();
    buildMatchingRight();
  }
} else {
  window.location = 'learn.html';
}
