console.log("ciao");

// PT PLANNER
// Melbourne Public Transport Journey Planner
// There are 3 train lines:

// The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

// The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

// The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

// Write a javascript program that works out display the journey when you give it an origin and destination.

// example:


// origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total
// You may want to hard code the origin and destination for easier testing in the beginning.

// Hints:
// Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.

// The key to the lab is the intersection of the lines at Richmond.

// Non-Required Bonus:
// input validation
// User must enter a line and station in the subway network
// If the user enters something else, your program should handle it
// Add additional lines



var origin = "Flinders Street";
var destination = "Burnley";
var totalStop = 4;

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'and Glenferrie'];
// var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga'];
// var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor'];

// for (i = 0; i <= 6; i++ ) {
//   if (i = origin) {
//     console.log("this is wher you start") {
//     }else{
//       console.log("thi is your stop")
//     }
    
    
//   }
  
//  }

// var stops = function(origin, destination) {
//     for (var stops = 0; stops < totalStop.lenght; i++) {
//     }
//     totalStop = alamein.slice(0,4).join('---->')
// }
// console.log(' this are the stops! ' + totalStop)

var person = prompt('Please enter your origin');
