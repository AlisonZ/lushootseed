'use strict';
//to count how many picture has shown
var counter = 0;
//to hide the header until git first write answer
document.getElementById('englishHeader').style.visibility = 'hidden';
document.getElementById('lashooHeader').style.visibility = 'hidden';
//get the objects from local storage
var eWord = JSON.parse(localStorage.getItem('arrayOfFlashcards'));
console.log(eWord);
console.log('length',eWord.length);
var words = [];
var matching1Array = [];
var matching2Array = [];
for(var i = 0 ; i < eWord.length ; i ++) {
  if(JSON.parse(localStorage.getItem('arrayOfFlashcards'))[i].shown) {
    counter++;
  }
}

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
  var rand = randomNumber(words.length);
  if(words[rand].timesShown !== 0) {
    words[rand].timesShown = 0;
    matching1Array.push(words[rand]);
  }
  //needs duplicate filter
  console.table(matching1Array);
}

function selectMatching2Array() {
  var rand = randomNumber(matching1Array.length);
  matching2Array.push(matching1Array[rand]);
  //needs duplicate filter
  console.table(matching2Array);
}

// //English Words
// var eWord1 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[0].english;
// var eWord2 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[1].english;
// var eWord3 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[2].english;
// var eWord4 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[3].english;
// var eWord5 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[4].english;
// var eWord6 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[5].english;
// var eWord7 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[6].english;
// var eWord8 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[7].english;
// var eWord9 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[8].english;
// var eWord10 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[9].english;
// var eWord11 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[10].english;
// var eWord12 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[11].english;
// var eWord13 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[12].english;
// //lushootseed words
// var lWord1 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[0].lushootseed;
// var lWord2 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[1].lushootseed;
// var lWord3 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[2].lushootseed;
// var lWord4 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[3].lushootseed;
// var lWord5 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[4].lushootseed;
// var lWord6 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[5].lushootseed;
// var lWord7 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[6].lushootseed;
// var lWord8 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[7].lushootseed;
// var lWord9 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[8].lushootseed;
// var lWord10 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[9].lushootseed;
// var lWord11 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[10].lushootseed;
// var lWord12 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[11].lushootseed;
// var lWord13 = JSON.parse(localStorage.getItem('arrayOfFlashcards'))[12].lushootseed;
// //English words************
// var english = [];
// english[0] = makeRadioButton('english', 'englishWord1', eWord1,'englisLabelId1');
// english[1] = makeRadioButton('english', 'englishWord2', eWord2,'englisLabelId2');
// english[2] = makeRadioButton('english', 'englishWord3', eWord3,'englisLabelId3');
// english[3] = makeRadioButton('english', 'englishWord4', eWord4,'englisLabelId4');
// english[4] = makeRadioButton('english', 'englishWord5', eWord5,'englisLabelId5');
// english[5] = makeRadioButton('english', 'englishWord6', eWord6,'englisLabelId6');
// english[6] = makeRadioButton('english', 'englishWord7', eWord7,'englisLabelId7');
// english[7] = makeRadioButton('english', 'englishWord8', eWord8,'englisLabelId8');
// english[8] = makeRadioButton('english', 'englishWord9', eWord9,'englisLabelId9');
// english[9] = makeRadioButton('english', 'englishWord10', eWord10,'englisLabelId10');
// english[10] = makeRadioButton('english', 'englishWord11', eWord11,'englisLabelId11');
// english[11] = makeRadioButton('english', 'englishWord12', eWord12,'englisLabelId12');
// english[12] = makeRadioButton('english', 'englishWord13', eWord13,'englisLabelId13');
// //Lushootseed words**************
// var lushootseed = [];
// lushootseed[0] = makeRadioButton('lushootseed', 'lushootseedWord1', lWord1,'lushootseedLabelId1');
// lushootseed[1] = makeRadioButton('lushootseed', 'lushootseedWord2', lWord2,'lushootseedLabelId2');
// lushootseed[2] = makeRadioButton('lushootseed', 'lushootseedWord3', lWord3,'lushootseedLabelId3');
// lushootseed[3] = makeRadioButton('lushootseed', 'lushootseedWord4', lWord4,'lushootseedLabelId4');
// lushootseed[4] = makeRadioButton('lushootseed', 'lushootseedWord5', lWord5,'lushootseedLabelId5');
// lushootseed[5] = makeRadioButton('lushootseed', 'lushootseedWord6', lWord6,'lushootseedLabelId6');
// lushootseed[6] = makeRadioButton('lushootseed', 'lushootseedWord7', lWord7,'lushootseedLabelId7');
// lushootseed[7] = makeRadioButton('lushootseed', 'lushootseedWord8', lWord8,'lushootseedLabelId8');
// lushootseed[8] = makeRadioButton('lushootseed', 'lushootseedWord9', lWord9,'lushootseedLabelId9');
// lushootseed[9] = makeRadioButton('lushootseed', 'lushootseedWord10', lWord10,'lushootseedLabelId10');
// lushootseed[10] = makeRadioButton('lushootseed', 'lushootseedWord11', lWord11,'lushootseedLabelId11');
// lushootseed[11] = makeRadioButton('lushootseed', 'lushootseedWord12', lWord12,'lushootseedLabelId12');
// lushootseed[12] = makeRadioButton('lushootseed', 'lushootseedWord13', lWord13,'lushootseedLabelId13');
// var scors = 0;
// var j = 0;
// //Table holder
// var showTheRightWords = document.getElementById('result');
// random Number to select radio
// var randomNumber = function() {
//   return Math.floor(Math.random() * eWord.length);
// };
// //build Table when you get the first write answer
// var buildTable = function(x,y) {
//   var trEl1 = document.createElement('tr');
//   var tdEl2 = document.createElement('td');
//   tdEl2.textContent = x;
//   trEl1.appendChild(tdEl2);
//   var tdEl3 = document.createElement('td');
//   tdEl3.textContent = y;
//   trEl1.appendChild(tdEl3);
//   showTheRightWords.appendChild(trEl1);
// };
//
// function hidden(eWord,lWord) {
//   document.getElementById(eWord).style.display = 'none';
//   document.getElementById(lWord).style.display = 'none';
// };
// function headerVisibility() {
//   document.getElementById('englishHeader').style.visibility = 'visible';
//   document.getElementById('lashooHeader').style.visibility = 'visible';
// };
// function unChecked(eLabel,lLabel) {
//   document.getElementById(eLabel).checked = false;
//   document.getElementById(lLabel).checked = false;
//
// };
// //When press the button should check if you made the Right answer
// function newfunction() {
//   if((document.getElementById('englisLabelId1').checked) && (document.getElementById('lushootseedLabelId1').checked)) {
//     scors++;
//     //console.log('scors',scors);
//     document.getElementById('scors').innerHTML = scors;
//     headerVisibility();
//     unChecked('englisLabelId1','lushootseedLabelId1');
//     hidden(eWord1,lWord1);
//     buildTable((document.getElementById('englisLabelId1').value),(document.getElementById('lushootseedLabelId1').value));
//   } else
//     if((document.getElementById('englisLabelId2').checked) && (document.getElementById('lushootseedLabelId2').checked)) {
//       scors++; console.log('scors',scors);
//       document.getElementById('scors').innerHTML = scors;
//       headerVisibility();
//       unChecked('englisLabelId2','lushootseedLabelId2');
//       hidden(eWord2,lWord2);
//       buildTable((document.getElementById('englisLabelId2').value),(document.getElementById('lushootseedLabelId2').value));
//     } else
//   if((document.getElementById('englisLabelId3').checked) && (document.getElementById('lushootseedLabelId3').checked)) {
//     scors++; console.log('scors',scors);
//     document.getElementById('scors').innerHTML = scors;
//     headerVisibility();
//     unChecked('englisLabelId3','lushootseedLabelId3');
//     hidden(eWord3,lWord3);
//     buildTable((document.getElementById('englisLabelId3').value),(document.getElementById('lushootseedLabelId3').value));
//   }
//   if((document.getElementById('englisLabelId4').checked) && (document.getElementById('lushootseedLabelId4').checked)) {
//     scors++;
//     //console.log('scors',scors);
//     document.getElementById('scors').innerHTML = scors;
//     headerVisibility();
//     unChecked('englisLabelId4','lushootseedLabelId4');
//     hidden(eWord4,lWord4);
//     buildTable((document.getElementById('englisLabelId4').value),(document.getElementById('lushootseedLabelId4').value));
//   } else
//   if((document.getElementById('englisLabelId5').checked) && (document.getElementById('lushootseedLabelId5').checked)) {
//     scors++;
//     //console.log('scors',scors);
//     document.getElementById('scors').innerHTML = scors;
//     headerVisibility();
//     unChecked('englisLabelId5','lushootseedLabelId5');
//     hidden(eWord5,lWord5);
//     buildTable((document.getElementById('englisLabelId5').value),(document.getElementById('lushootseedLabelId5').value));
//   } else {
//     alert('NO NO TRY AGAIN');
//     document.getElementById('englisLabelId1').checked = false;
//     document.getElementById('lushootseedLabelId1').checked = false;
//     document.getElementById('englisLabelId2').checked = false;
//     document.getElementById('lushootseedLabelId2').checked = false;
//     document.getElementById('englisLabelId3').checked = false;
//     document.getElementById('lushootseedLabelId3').checked = false;
//   }
// };
// //To hold the english Radio Button
// var english_home = document.getElementById('english_radio');
// //To hold the lushootseed radio Button
// var lushootseed_home = document.getElementById('lushootseed_radio');
// //function to make a radio Button
// function makeRadioButton(name, value, text,labelName) {
//   var label = document.createElement('label');
//   var radio = document.createElement('input');
//   radio.type = 'radio';
//   radio.name = name;
//   radio.value = value;
//   radio.id = labelName;
//   label.setAttribute('for',labelName);
//   label.for = labelName;
//   label.id = text;
//   label.appendChild(radio);
//   label.appendChild(document.createTextNode(text));
//   return label;
// };
// //yp ,make the order random
// var renderRadio = function() {
//   var randomArray = [];
//   for(var j = 0 ; j < counter ; j ++)
//    {
//     console.log('j' , j);
//     randomArray[j] = randomNumber();
//     for(var k = j + 1 ; k < counter ; k++ ) {
//       randomArray[k] = randomNumber();
//       while(randomArray[j] === randomArray[k]) {
//         randomArray[k] = randomNumber();
//       }
//       //console.log('randomArray', randomArray[k]);
//     }
//   }
//   for(var g = 0 ; g < counter ; g ++){
//     console.log('randomArray', randomArray[g]);
//     english_home.appendChild(english[randomArray[g]]);
//   }
//   var lushootseedRandomArray = [];
//   for(var j = 0 ; j < counter ; j ++)
//    {
//     //console.log('j' , j);
//     lushootseedRandomArray[j] = randomNumber();
//     for(var k = j + 1 ; k < counter ; k++ ) {
//       lushootseedRandomArray[k] = randomNumber();
//       while(lushootseedRandomArray[j] === lushootseedRandomArray[k]) {
//         lushootseedRandomArray[k] = randomNumber();
//       }
//       //console.log('randomArray', randomArray[k]);
//     }
//   }
//   for(var g = 0 ; g < counter ; g ++){
//     console.log('lushootseed', randomArray[g]);
//     lushootseed_home.appendChild(lushootseed[lushootseedRandomArray[g]]);
//   }
// };
// renderRadio();
