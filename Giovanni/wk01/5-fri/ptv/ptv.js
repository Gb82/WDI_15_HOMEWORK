console.log("ciao");
/*
PT PLANNER
Melbourne Public Transport Journey Planner
There are 3 train lines:

The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

Write a javascript program that works out display the journey when you give it an origin and destination.

example:


origin: Melbourne Central
destination: Richmond

Melbourne Central -----> Parliament -----> Richmond

2 stops total
You may want to hard code the origin and destination for easier testing in the beginning.

Hints:
Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.

The key to the lab is the intersection of the lines at Richmond.

Non-Required Bonus:
input validation
User must enter a line and station in the subway network
If the user enters something else, your program should handle it
Add additional lines
*/

/*
var origin = "Flagstaff";
var destination = "Richmond";
var totalStop = 2;

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'and Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor'];

if (origin < 0; lenght < 6; origin++) {
  totalStop()
}
*/

//For this lab, you'll be researching JavaScript's else if statement, and creating one of your own.
//Write an else if statement that checks to see if a variable called year is in the past, present, or future.
//You'll console.log three possible messages depending on what year it is...
//"I'm in the present!" if the year is equal to 2015
//"Whoa! Blast from the past!" if the year is less than 2015
//"Greetings from the future!" if the year is greater than 2015
//Bonus Challenge Research JavaScript's date methods, and find one that will return to you the current, four digit year. Once you have grabbed that year, assign it to a variable, and use that in your else if statement.

// if (year = 2015) {
//   console.log("I'm in the present!");
// } else if (year < 2015) {
//   console.log("Whoa! Blast from the past!");
// } else if (year > 2015) {
//   console.log("Greetings from the future!");
// } else {
//
// }
//
// var Year = getFullYear();

// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number
// is even or odd,
// and report that to the screen (e.g. "2 is even").

for (var i = 0; i < 20; i++) {
  if (i === 2) {
    console.log("is even");
    if (i === 3) {
      console.log("is odd");
    }
  }
}
