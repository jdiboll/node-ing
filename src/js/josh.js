var movies = require('./movie');

var joshsMovie =movies();
joshsMovie.favMovie = "Cool Hand Luke";
console.log("Josh's favorite movie is " + joshsMovie.favMovie);




// for shared module state--->
// movies.favMovie = "ool Hand Luke";
// console.log("Josh's favorite movie is: " + movies.favMovie);