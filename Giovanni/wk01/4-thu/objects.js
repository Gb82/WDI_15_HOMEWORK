console.log('ciao');

// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favoriteRecipe = {
  title: 'polpette',
  serving: 4,
  ingredients: ['milk', 'beef', 'parsley', 'eggs'],
}
 console.log(favoriteRecipe.title);
 console.log('Serves: '  + favoriteRecipe.serving);
 console.log('Ingredients:');

 console.log(favoriteRecipe.ingredients[0]);
 console.log(favoriteRecipe.ingredients[1]);
 console.log(favoriteRecipe.ingredients[2]);
 console.log(favoriteRecipe.ingredients[3]);

//  The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


var readingList = [
  {
    title: 'It',
    author: 'Stephen king',
    alreadyRead: true,
  },
  {
    title: 'Alice in wonderland',
    author: 'Lewis Carroll',
    alreadyRead: false,
  },
  {
    title: 'Moby dick',
    author: 'Herman Melville',
    alreadyRead: true,
  }
]

readingList.forEach(function(book){
    if(book.alreadyRead === true){
        console.log("You already read " + book.title + " by " + book.author)
    } else {
        console.log("You still need to read " + book.title + " by " + book.author)
    }
})

// The Movie Database
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
//
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var favoriteMovie = {
  title: 'Die hard',
  duration: 60,
  stars: [
    "Bruce Wills", " Alan Rickman", " Bonnie Bedelia"
  ]
};

var printMovie = function() {
    console.log(favoriteMovie.title + ' lasts for ' + favoriteMovie.duration + '. Stars: ' + favoriteMovie.stars )
}

printMovie();
