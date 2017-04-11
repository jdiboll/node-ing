var movies = require('./movie');

var courtsMovie =movies();
courtsMovie.favMovie = "The Notebook";
console.log("Courtney's favorite movie is " + courtsMovie.favMovie);




// for shared module state--->
// movies.favMovie = "The Notebook";
// console.log("Courtney's favorite movie is: " + movies.favMovie);