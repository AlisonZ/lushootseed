
Derek is a complex, multi-faceted





Derek's notes on this project

Had a talk about animations with Brian on Friday afternoon.  

You can actually detach an element from the DOM, using the transition on the element itself it’ll animate.  You then attach them to the new UL in the results box.  Either Detach of Absolutely position them, he couldn't remember exactly which one.  Outer box will get shorter over time w/ a transition on the box.  

if(match) {
  el.style.border = 'green' //using transition on parent element the border will fade in
  setTimeout(function() {
    "custom code to move the lis to the bottom uls and attach them there"
  }, 1000ms);
}
