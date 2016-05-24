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

	function randomItem(optionsArray) {
		var index = Math.floor(Math.random() * optionsArray.length);
		return optionsArray[index];
	}

	$('form').on('submit', function(e) {
		e.preventDefault();
		var type = $('input[name=beverage]:checked').val();
		var price = $('input[name=price]:checked').val();

		var choice = drinks[type];
		var options = [];

		for(var i = 0; i < choice.length; i++) {
			var store = choice[i];

			if(store.price === price) {
				options.push(store);
			}
		}

		var optionToDispaly = randomItem(options);

		$('.results').html('<h2 class="choice">' + optionToDispaly.title + '</h2>');
	});
});

