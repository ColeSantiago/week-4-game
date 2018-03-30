  $(document).ready(function() {
  	// global variables
  	let wins = 0;
	let losses = 0;

  	function startGame() {
		let randomNumber = [Math.floor(Math.random() * 120) + 19];
		let score = 0;
		// adding the random number to the html
		$("#random-number").text(randomNumber);
		$("#score").text(score);  
		// generating random numbers for each picture
		let garnetNumber = [Math.floor(Math.random() * 12) + 1];
		console.log(garnetNumber);
		let pearlNumber = [Math.floor(Math.random() * 12) + 1];
		console.log(pearlNumber);
		let amethystNumber = [Math.floor(Math.random() * 12) + 1];
		console.log(amethystNumber);
		let stevenNumber = [Math.floor(Math.random() * 12) + 1];
		console.log(stevenNumber);
		//adding the pictures to the html with their random numbers 
		for (let i = 0; i < garnetNumber.length; i++) {
			const imageCrystal = $("<img>");
			imageCrystal.addClass("crystal-images");
			imageCrystal.attr("src", "assets/images/garnet.png");
			imageCrystal.attr("data-crystalvalue", garnetNumber[i]);
			$("#crystal-images").append(imageCrystal);
		};

		for (let i = 0; i < pearlNumber.length; i++) {
			const imageCrystal = $("<img>");
			imageCrystal.addClass("crystal-images");
			imageCrystal.attr("src", "assets/images/pearl.png");
			imageCrystal.attr("data-crystalvalue", pearlNumber[i]);
			$("#crystal-images").append(imageCrystal);
		};

		for (let i = 0; i < amethystNumber.length; i++) {
			const imageCrystal = $("<img>");
			imageCrystal.addClass("crystal-images");
			imageCrystal.attr("src", "assets/images/Amethyst.png");
			imageCrystal.attr("data-crystalvalue", amethystNumber[i]);
			$("#crystal-images").append(imageCrystal);
		}

		for (let i = 0; i < stevenNumber.length; i++) {
			const imageCrystal = $("<img>");
			imageCrystal.addClass("crystal-images");
			imageCrystal.attr("src", "assets/images/Steven.png");
			imageCrystal.attr("data-crystalvalue", stevenNumber[i]);
			$("#crystal-images").append(imageCrystal);
		}

		// the on click event
		$(".crystal-images").on("click", function() {
			let crystalValue = ($(this).attr("data-crystalvalue"));
		    crystalValue = parseInt(crystalValue);
		    score += crystalValue;
		   	$("#score").text(score);

		    if (score == randomNumber) {
		    	wins++;
		    	$("#crystal-images").html(" ");
		    	startGame();
		    	console.log("you have won" + " " + wins + " " + "times");  
		    } else if (score > randomNumber) {
		    	losses++;
		    	$("#crystal-images").html(" ");
		    	startGame();
		    	console.log("you have lost" + " " + losses + " " + "times")  
		    }
		    $("#wins").text(wins);
			$("#losses").text(losses);
		  });
	}
startGame();
// closing tag for document ready
});