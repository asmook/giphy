// Let the fun begin!
var topics = ["dog","cat","monkey","frog","elephant","fish","bird"];
var testTopic = "tarantula";



function createButtons() {
	for (var i = 0; i<topics.length; i++){
		var button = $("<button>");
		button.text(topics[i]);
		$(".buttons").append(button);
	}

}

createButtons();

$(".buttons").on("click", "button", function(){
	$(".coolGifs").empty();
	var chosenAnimal = $(this).text();
	var QueryString = "https://api.giphy.com/v1/gifs/search?q=" + chosenAnimal +"&limit=5&rating=g&api_key=dc6zaTOxFJmzC";

	$.ajax({
		method: "GET",
		url: QueryString
	}).done(function(response) {
		 console.log(response);
		//i=0(this is where the loop should start
		// i< response.data.length is where the loop should end
		// i++ is how we get from point a to point b)
		for (i = 0; i < response.data.length; i++){	
			//takes in a string phrase and converts it to an interger
			//we had to do this bc otherwise js thought that i+1 should be interpereted as a string 
			//ex instead of 1 2 3 4 5 it gane me 01 11 21 31 41 
			console.log("hi there" + parseInt(i+1));

			var img = $("<img>");
			//figure this shit out
			img.attr("src", response.data[i].images.fixed_height.url);
			$(".coolGifs").append(img);
		
		}


	});

});