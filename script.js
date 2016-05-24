// Start with the document ready.

// $(document).ready(function(){});

// $(function(){});

// Inside it

$(function() {
	var drinks = {
		coffee: [
			{
				title: 'Early Bird',
				price: '$$'
			},
			{	
				title: 'Dark Horse',
				price: '$'
			},
			{	
				title: 'Le Gourmand',
				price: '$'
			}
		],
		tea: [
			{
				title: 'David\'s Tea',
				price: '$'
			},
			{
				title: 'Tealish',
				price: '$$'
			},
			{
				title: 'Teavana',
				price: '$'
			}
		]
	};

	// when the user submits the form, we want to do something.

	// $("selector").on("event", function(){

	//});

	// We select the form with JQuery and we attach an event, in this case a submit.

	// When this event happens, the function will run and we can work with the data.

	// creates an anonymous function that only triggers when the user submits the form.

	$("form").on("submit", function(e){

		// we want to prevent the default event that occurs from submitting the form (refresh the page)

		e.preventDefault();

		// console.log(e);

		// console.log("Does this work?");

	// Gather the selected information from the user.
	// Using jQuery we select the inputs based on their name attribute
	//Because we can just pass in a CSS selector to jQuery
	// We can use a css attribute selector here.
	// We also use the .val() method to GET the value of the checked item.

		var drinkChoice = $("input[name=beverage]:checked").val();

		// console.log(drinkChoice);

		var priceChoice = $("input[name=price]:checked").val();

		// console.log(priceChoice);

	// Pull out what drink choice they have made.
	// Using the users drinkChoice from above, we can use bracket notation to access a value 
	// from our drinks object
	// Because drinkChoie is a strong, and a bracket notation accepts a string as the key name, we can use the 
	// variable to dynamically select an option and store it in another variable.

		var arrayOfMatchedDrinks = drinks[drinkChoice];

		// console.log(arrayOfMatchedDrinks);

	// filter only the user's selected price.

	// We create a for loop to iterate over the arrayOfMatchedDrinks so that we can inspect each element.
	// using the length property of our arrayOfMatchedDrinks we can insure 
	// our for loop will never run longer than it has to

		//A new empty array used to store drink locations that match the user price choice

		var filteredDrinkLocations = [];

		for (var i = 0; i < arrayOfMatchedDrinks.length; i = i + 1){
			// we create a new variable to store the current element from the array so that we can use it later.
			// The value stored here is an OBJECT!
			var singleDrinkLocation = arrayOfMatchedDrinks[i];
			// console.log(singleDrinkLocation.price);

			//using an if statement we check to see if the current singleDrinkLocationPrice matches the price choice that
			// the user selected.

			if (singleDrinkLocation.price === priceChoice){
				// console.log(singleDrinkLocation);
				filteredDrinkLocations.push(singleDrinkLocation);
			}
		};

		// console.log(filteredDrinkLocations);
	// randomly select a final option for the user.
	// we use this parter to create a randomNumber based on the length of our filteredDrinkLocation
	// array. This randomNumber can be used as an index for our finalDrinkOption.
		var randomNumber = Math.floor(Math.random() * filteredDrinkLocations.length);
		// console.log(randomNumber);
		// Using the randomNumber we select our option.
		var finalDrinkOption = filteredDrinkLocations[randomNumber];

		console.log(finalDrinkOption);
	// Give an answer.

	$(".results").html('<h2 class="choice">' + finalDrinkOption.title + '</h2>');

	});
});

