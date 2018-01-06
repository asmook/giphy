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
	var chosenAnimal = $(this).text();
	var QueryString = "http://api.giphy.com/v1/gifs/search?q=" + chosenAnimal +"&limit=5&api_key=dc6zaTOxFJmzC";

	$.ajax({
		method: "GET",
		url: QueryString
	}).done(function(response) {
		console.log(response);

	})

});