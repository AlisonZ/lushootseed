'use strict';
var englishItemSelected = [];
var lashooItemSelected = [];
document.getElementById('englishHeader').style.visibility = 'hidden';
document.getElementById('lashooHeader').style.visibility = 'hidden';
//Score Counter
//English words************
var english = [];
english[0] = makeRadioButton('english', 'englishWord1', 'englishTextWord1','englisLabelId1');
english[1] = makeRadioButton('english', 'englishWord2', 'englishTextWord2','englisLabelId2');
english[2] = makeRadioButton('english', 'englishWord3', 'englishTextWord3','englisLabelId3');
//Lushootseed words**************
var lushootseed = [];
lushootseed[0] = makeRadioButton('lushootseed', 'lushootseedWord1', 'lushootseedTextWord1','lushootseedLabelId1');
lushootseed[1] = makeRadioButton('lushootseed', 'lushootseedWord2', 'lushootseedTextWord2','lushootseedLabelId2');
lushootseed[2] = makeRadioButton('lushootseed', 'lushootseedWord3', 'lushootseedTextWord3','lushootseedLabelId3');
var scors = 0;
var j = 0;
//This variblae for the table
var showTheRightWords = document.getElementById('result');
//random Number to select radio
var randomNumber = function() {
  return Math.floor(Math.random() * englishItemSelected.length);
};

var buildTable = function(x,y) {
  var trEl1 = document.createElement('tr');
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = x;
  trEl1.appendChild(tdEl2);
  var tdEl3 = document.createElement('td');
  tdEl3.textContent = y;
  trEl1.appendChild(tdEl3);
  showTheRightWords.appendChild(trEl1);
};
function newfunction() {
  if((document.getElementById('englisLabelId1').checked) && (document.getElementById('lushootseedLabelId1').checked)) {
    scors++; console.log('scors',scors);
    document.getElementById('scors').innerHTML = scors;
    document.getElementById('englishHeader').style.visibility = 'visible';
    document.getElementById('lashooHeader').style.visibility = 'visible';
    document.getElementById('englisLabelId1').checked = false;
    document.getElementById('lushootseedLabelId1').checked = false;
    document.getElementById('lushootseedTextWord1').style.display = 'none';
    document.getElementById('englishTextWord1').style.display = 'none';
    buildTable((document.getElementById('englisLabelId1').value),(document.getElementById('lushootseedLabelId1').value));
  } else
    if((document.getElementById('englisLabelId2').checked) && (document.getElementById('lushootseedLabelId2').checked)) {
      scors++; console.log('scors',scors);
      document.getElementById('scors').innerHTML = scors;
      document.getElementById('englishHeader').style.visibility = 'visible';
      document.getElementById('lashooHeader').style.visibility = 'visible';
      document.getElementById('englisLabelId2').checked = false;
      document.getElementById('lushootseedLabelId2').checked = false;
      document.getElementById('lushootseedTextWord2').style.display = 'none';
      document.getElementById('englishTextWord2').style.display = 'none';
      buildTable((document.getElementById('englisLabelId2').value),(document.getElementById('lushootseedLabelId2').value));
    } else
  if((document.getElementById('englisLabelId3').checked) && (document.getElementById('lushootseedLabelId3').checked)) {
    scors++; console.log('scors',scors);
    document.getElementById('scors').innerHTML = scors;
    document.getElementById('englishHeader').style.visibility = 'visible';
    document.getElementById('lashooHeader').style.visibility = 'visible';
    document.getElementById('englisLabelId3').checked = false;
    document.getElementById('lushootseedLabelId3').checked = false;
    document.getElementById('lushootseedTextWord3').style.display = 'none';
    document.getElementById('englishTextWord3').style.display = 'none';
    buildTable((document.getElementById('englisLabelId3').value),(document.getElementById('lushootseedLabelId3').value));
  } else {
    alert('NO NO TRY AGAIN');
    document.getElementById('englisLabelId1').checked = false;
    document.getElementById('lushootseedLabelId1').checked = false;
    document.getElementById('englisLabelId2').checked = false;
    document.getElementById('lushootseedLabelId2').checked = false;
    document.getElementById('englisLabelId3').checked = false;
    document.getElementById('lushootseedLabelId3').checked = false;
  }
};
//To make Radio Button
var english_home = document.getElementById('english_radio');
var lushootseed_home = document.getElementById('lushootseed_radio');
function makeRadioButton(name, value, text,labelName) {
  var label = document.createElement('label');
  var radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = name;
  radio.value = value;
  radio.id = labelName;
  label.setAttribute('for',labelName);
  label.for = labelName;
  label.id = text;
  //radio.appendChild(label);
  label.appendChild(radio);
//  radio.appendChild(label);
  label.appendChild(document.createTextNode(text));
  return label;
};

var renderRadio = function() {
  var one = randomNumber();
  console.log('one',one);
  var two = randomNumber();
  //console.log('two',two);
  var three = randomNumber();
  //console.log('three', three);
  while(one === two) {
    two = randomNumber();
    console.log('two2',two);
  }
  while(one === three || two === three) {
    three = randomNumber();
    console.log('three2',three);
  }
  english_home.appendChild(english[one]);
  english_home.appendChild(english[two]);
  english_home.appendChild(english[three]);
  if(english[0].checked){
    alert('thankssssssss');
    myfunction();
  }
  var one = randomNumber();
  console.log('one',one);
  var two = randomNumber();
  //console.log('two',two);
  var three = randomNumber();
  //console.log('three', three);
  while(one === two) {
    two = randomNumber();
    console.log('two2',two);
  }
  while(one === three || two === three) {
    three = randomNumber();
    console.log('three2',three);
  }
  lushootseed_home.appendChild(lushootseed[one]);
  lushootseed_home.appendChild(lushootseed[two]);
  lushootseed_home.appendChild(lushootseed[three]);

};
renderRadio();

// lushootseed[0].checked = myfunction();
english_radio.addEventListener('checked',function(){
  alert('english');
  if(english[0].checked) {
    alert('lushootseed0');
  }
  if(english[1].checked) {
    alert('lushootseed1');
  }
  if(english[2].checked) {
    alert('thanss');
  }
});
