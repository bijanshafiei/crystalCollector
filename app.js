// Global Variables
// ==========================================

// Crystal variables
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

//Scores (current and target)
var currentScore = 0;
var targetScore=0;

// Wins and losses
var winCount = 0;
var lossCount =0;


// Functions
//==========================================
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

var startGame = function() {

	//Reset Current Score
	var currentScore = 0;

	//Set new Target score (between 19 and 120)
	targetScore = getRandom(19, 120);

	//Set different values for each crystal (between 1 and 12)
	crystal.blue.value 		= getRandom(1, 12);
	crystal.green.value 	= getRandom(1, 12);
	crystal.red.value 		= getRandom(1, 12);
	crystal.yellow.value 	= getRandom(1, 12);


	//Write changes to HTML
	$("#your-score").html(currentScore);
	$("#target-score").html(targetScore);
	

	//Testing
// 	console.log("Target Score: " + targetScore);
// 	console.log("Blue: " +  crystal.blue.value +  " | Green: " + crystal.green.value +  " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);

// }



//Check if user won or lost and reset the game
var checkWin = function() {
	
	//Check if the currentScore is larger than targetScore
	if(currentScore > targetScore) {
		alert("Sorry, You lost!");
		console.log("You Lost");


		//Add to Loss Counter
		lossCount++;

		//Change loss count HTML
		$("#lossCount").html(lossCount);

		// Restart the game
    	startGame();

	} 


	else if (currentScore == targetScore) {
		alert("Congratulations! You Won!");
		console.log("You Won!");

		//Add to Win Counter
		winCount++;

		//Change win count HTML
		$("#winCount").html(winCount);

		// Restart the game
    	startGame();
		
	}

};

//Respond to clicks on the crystal
var addValues = function(crystal) {

	//Change currentScore
	currentScore = currentScore + crystal.value;

	//Change the HTML to reflect changes in currentScore
	$("#your-score").html(currentScore);

	//Call the checkWin function
	checkWin();

	//Testing
	console.log("Your Score: " + currentScore);

};

// Main Process
//==========================================

//Starts game 
startGame();

$("#blue").click(function(){
	// alert("test");
	addValues(crystal.blue);

});

$("#green").click(function(){
	// alert("test");
	addValues(crystal.green);

});

$("#red").click(function(){
	// alert("test");
	addValues(crystal.red);

});

$("#yellow").click(function(){
	// alert("test");
	addValues(crystal.yellow);

});