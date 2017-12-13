  $(document).ready(function() {

	let randomNumber = 53;
	let wins = 0;
	let losses = 0;

	  $("#random-number").text(randomNumber);

	  let score = 0;

	  let numberOptions = [10, 5, 3, 7];

	  
	  for (let i = 0; i < numberOptions.length; i++) {

	    
	    const imageCrystal = $("<img>");
	    imageCrystal.addClass("crystal-images");
	    imageCrystal.attr("src", "assets/images/garnet.png");
	    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	    $("#crystal-images").append(imageCrystal);
	  }

	  
	  $(".crystal-images").on("click", function() {

	    let crystalValue = ($(this).attr("data-crystalvalue"));
	    crystalValue = parseInt(crystalValue);
	    
	    score += crystalValue;

	   	$("#score").text(score);

	    if (score === randomNumber) {
	    	wins++;
	      
	    }

	    else if (score >= randomNumber) {
	    	losses++;
	    	console.log(losses)
	      
	    }

	    $("#wins").text(wins);
		$("#losses").text(losses);

	  });

	
	





// closing tag for document ready
  });