// // Javascript Entry Point
// // var Joshua = {
// // 	printFirstName: function() {
// // 		console.log('my name is Joshua');
// // 		console.log(this === Joshua)
// // 	}
// // };

// // 	Joshua.printFirstName();

// // 	function doSomethingWorthless () {
// // 		console.log('I am Worthless');
// // 		console.log(this === global)
// // 	};

// 	//doSomethingWorthless();

// 	function User() {
// 		this.name = "";
// 		this.life = 100;
// 		this.giveLife = function giveLife(targetPlayer) {
// 			targetPlayer.life += 1;
// 		console.log(this.name + " gave one life to " + targetPlayer.name);
// 		}
// 	};

// 	var Joshua = new User();
// 	var Courtney = new User();

// 	Joshua.name = 'Joshua';
// 	Courtney.name = 'Courtney';

// 	Joshua.giveLife(Courtney);
// 	console.log('Joshua: ' + Joshua.life);
// 	console.log('Courtney: ' + Courtney.life);

// User.prototype.uppercut = function uppercut(targetPlayer) {
// 		targetPlayer.life -= 10;
// 		console.log(this.name + " just uppercutted " + targetPlayer.name);
// };

// Courtney.uppercut(Joshua);
// 	console.log('Joshua: ' + Joshua.life);
// 	console.log('Courtney: ' + Courtney.life);


// // User.prototype.magic = 60;
// // console.log('Joshua: ' + Joshua.magic);
// // console.log('Courtney: ' + Courtney.magic);



// var ratings = require('./movie');
// ratings.printMomento();
// console.log(ratings.favMovie);

require('./josh');
require('./courtney');

//Core Modules ---->

// var fs = require('fs');
// fs.writeFileSync('corn.txt', "Corn is good, corn is life!");
// console.log(fs.readFileSync('corn.txt').toString());


var path = require('path');

var websiteHome = "desktop//joshua/humbe233/home.html"
var websiteAbout = "desktop/joshua/humbe233/about.html"

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

console.log(__dirname);
console.log(__filename);










