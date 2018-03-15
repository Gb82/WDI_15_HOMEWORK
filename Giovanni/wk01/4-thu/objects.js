console.log('ciao');

/*
The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/
var favoriteRecipe = {
  title: 'polpette',
  servings: 4,
  ingridients: ['meat', 'bread', 'parsley', 'milk']

}



console.log(favoriteRecipe.title);
console.log(' serve ' + favoriteRecipe.servings);
console.log(favoriteRecipe.ingridients[0]);
console.log(favoriteRecipe.ingridients[1]);
console.log(favoriteRecipe.ingridients[2]);
console.log(favoriteRecipe.ingridients[3]);

/*
The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects,
where each object describes a book and has properties for the title (a string),
author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books.
For each book, log the book title and book author like so:
"The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output
depending on whether you read it yet or not.
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
and if not,
 log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var book = [
  {title: 'It',
   author: 'Stephen king',
   alreadyRead: false,
  },
  {title: 'Neverending story',
   author: 'Michael Ende',
   alreadyRead: true,
  }];

for (var i = 0; i < book.lenght; i++) {
  var book = books[i];
  var booksInfo = books.title + ' by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
