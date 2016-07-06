
Derek is a complicated individual with simple tastes.  He enjoys some Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


Derek's notes on this project

Had a talk about animations with Brian on Friday afternoon.  

You can actually detach an element from the DOM, using the transition on the element itself it’ll animate.  You then attach them to the new UL in the results box.  Either Detach of Absolutely position them, he couldn't remember exactly which one.  Outer box will get shorter over time w/ a transition on the box.  

if(match) {
  el.style.border = 'green' //using transition on parent element the border will fade in
  setTimeout(function() {
    "custom code to move the lis to the bottom uls and attach them there"
  }, 1000ms);
}


Branches:

derek2 - work on tuesday 5 july

derek1 - work on friday 1 july and over the weekend

<script>
  document.getElementById('where you want it moved').appendChild(
    document.getElementById('what you want moved')
  );
</script>

according to http://stackoverflow.com/questions/6329108/moving-a-div-from-inside-one-div-to-another-div-using-prototype
