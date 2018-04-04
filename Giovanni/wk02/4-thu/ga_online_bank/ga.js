// search for the depsite button by tag name
// better choice may be giving it a class name in HTML
// and search by that
var depositBtn = document.querySelector('button');
// querySelectorreturns a object with lots of properties
// including properties to change  the value and text content

var deposit = function() {
  console.log('user click on deposit button');


// get the value from the input box - #todo

// add value to balance and show in span
// may be even just start by trying to set the span with
// the number 1000 when user click on the deposite button
}

// tell button to run a function on a click event
depositBtn.addEventListener('click', deposit)
