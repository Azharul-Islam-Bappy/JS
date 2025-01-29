
// IIFE - stands for Immediately Invoked Function Expression, wraped in parenthesis ( ) followed by () to call it Immediately after it's creation 

// Example:
(function () {
  // codes
  console.log('An IIFE function');
}) ();  



// Callback function
// What is Callback function? || Callback function is a function that is passed onto another function as an arguments 


setTimeout(function() {
  alert('Timer completed!!');
}, 5000);

document.addEventListener("click",() => {
  console.log('user clicked!!');
});