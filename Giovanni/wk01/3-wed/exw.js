/*
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd,
and report that to the screen (e.g. "2 is even").
*/

for (var i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
        console.log(i + ' is even');
  } else {
        console.log(i + ' is odd');
  }
}

/*
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop,
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

var multiplier = 9;
for (var i = 0; i <= 10; i++) {
  var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}

for (var multiplier = 0; multiplier <= 10; multiplier++) {
  for (var i = 0; i <= 10; i++) {
  var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
  }
}

/*
Create an array to hold your top choices (colors, presidents, whatever).

For each choice, log to the screen a string like: "My #1 choice is blue."

Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
picking the right suffix for the number based on what it is.
*/

var choices = ['playsttion', 'xbox', 'steam', 'switch'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}

for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}
