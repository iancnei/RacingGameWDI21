console.log("Sanity Check: JS is working!");

var p1Counter = 0;
var p2Counter = 0;
var raceOver = false;
var messageShown = false;

function winMessage()
{
	if(p1Counter === 99)
	{
		$('.winner-message').append("<h1>Player 1 Wins!</h1>");
	}
	else
	{
		$('.winner-message').append("<h1>Player 2 Wins!</h1>");
	}
}

$(document).ready(function() {
	$('body').on('keypress', function handlePress(event)
	{
		// a = 97, l = 108
		if(!raceOver)
		{
			if(event.keyCode === 97)
			{
				p1Counter++;
				if(p1Counter < 100)
				{
					$('.p1').animate( {"margin-left": "+=1%"}, 1, 'swing');
					if(p1Counter === 99)
					{
						raceOver = true;
						winMessage();
					}
				}
			}
			if(event.keyCode === 108)
			{
				p2Counter++;
				if(p2Counter < 100)
				{
					$('.p2').animate( {"margin-left": "+=1%"}, 1, 'swing');
					if(p2Counter === 99)
					{
						raceOver = true;
						winMessage();
					}
				}
			}
		}
	})

	$('.reset').on('click', function handleClick(event)
	{
		$('.p1').css('margin-left', '0em');
		$('.p2').css('margin-left', '0em');
		p1Counter = 0;
		p2Counter = 0
		raceOver = false;
		messageShown = false;
		$('.winner-message').empty();
	})
});