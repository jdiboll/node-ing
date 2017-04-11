// module.exports = {
	
// printMomento: function() {
// 	console.log("Momento - Rating: R");
// },

// printBigKahuna: function() {
// 	console.log('Big Kahuna - Rating: PG-13');

// },
// favMovie: 'The Shining'

// };
// module.exports.momento = printMomento;

// module.exports = {
// 	favMovie: ''
// };

//the following is an object factory, so each modile has it's own copy -->
module.exports = function () {
	return {
		favMovie: ''
	}
};