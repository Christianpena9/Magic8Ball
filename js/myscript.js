$(document).ready(function() {
	$("#button1").click(function() {
		/*Clears the Question and Answer before*/
		$('span').html(" ");

		var question = prompt("Answer Here!");
		while (question == "") {
			alert("Please Ask a question");
			var question = prompt("Answer Here!");
		}
		
		$('#question').append('<span>'+ '"' + question + '"' +'</span>');
		
		var random = Math.floor((Math.random()*19)+1);
		var answer1 = "It is certain";
		var answer2 = "Reply hazy try again";
		var answer3 = "Don't count on it";
		var answer4 = "It is decidedly so";
		var answer5 = "Ask again later";
		var answer6 = "My reply is no";
		var answer7 = "Without a doubt";
		var answer8 = "Better not tell you now";
		var answer9 = "My sources say no";
		var answer10 = "Cannot predict now";
		var answer11 = "Outlook not so good";
		var answer12 = "You may rely on it";
		var answer13 = "Concentrate and ask again";
		var answer14 = "Very doubtful";
		var answer15 = "As I see it, yes";
		var answer16 = "Most likely";
		var answer17 = "Outlook good";
		var answer18 = "Yes";
		var answer19 = "Signs point to yes";
		if(random == 1) {
			$('#answer').append('<span>'+ '"' + answer1 + '"' +'</span>');
		} else if (random == 2) {
			$('#answer').append('<span>'+ '"' + answer2 + '"' +'</span>');
		} else if (random == 3) {
			$('#answer').append('<span>'+ '"' + answer3 + '"' +'</span>');
		} else if (random == 4) {
			$('#answer').append('<span>'+ '"' + answer4 + '"' +'</span>');
		} else if (random == 5) {
			$('#answer').append('<span>'+ '"' + answer5 + '"' +'</span>');
		} else if (random == 6) {
			$('#answer').append('<span>'+ '"' + answer6 + '"' +'</span>');
		} else if (random == 7) {
			$('#answer').append('<span>'+ '"' + answer7 + '"' +'</span>');
		} else if (random == 8) {
			$('#answer').append('<span>'+ '"' + answer8 + '"' +'</span>');
		} else if (random == 9) {
			$('#answer').append('<span>'+ '"' + answer9 + '"' +'</span>');
		} else if (random == 10) {
			$('#answer').append('<span>'+ '"' + answer10 + '"' +'</span>');
		} else if (random == 11) {
			$('#answer').append('<span>'+ '"' + answer11 + '"' +'</span>');
		} else if (random == 12) {
			$('#answer').append('<span>'+ '"' + answer12 + '"' +'</span>');
		} else if (random == 13) {
			$('#answer').append('<span>'+ '"' + answer13 + '"' +'</span>');
		} else if (random == 14) {
			$('#answer').append('<span>'+ '"' + answer14 + '"' +'</span>');
		} else if (random == 15) {
			$('#answer').append('<span>'+ '"' + answer15 + '"' +'</span>');
		} else if (random == 16) {
			$('#answer').append('<span>'+ '"' + answer16 + '"' +'</span>');
		} else if (random == 17) {
			$('#answer').append('<span>'+ '"' + answer17 + '"' +'</span>');
		} else if (random == 18) {
			$('#answer').append('<span>'+ '"' + answer18 + '"' +'</span>');
		} else {
			$('#answer').append('<span>'+ '"' + answer19 + '"' +'</span>');
		}

		if(random == 3 || random == 6 || random == 9 || random == 11 || random == 14) {
			$('#image').css('background', 'url(images/negative.png)');
		} else if (random == 2 || random == 5 || random == 8 || random == 10 || random == 13) {
			$('#image').css('background', 'url(images/neutral.png)');
		} else {
			$('#image').css('background', 'url(images/positive.png)');
		}
	});
});