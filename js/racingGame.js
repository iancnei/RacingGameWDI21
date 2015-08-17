console.log("Sanity Check: JS is working!");

var p1Counter = 0;
var p2Counter = 0;
var raceOver = false;
var startTime;
var endTime;
var totalTime;
var timerStarted = false;
var timerID;
var p1Cooldown = false;
var p1CoolID;
var p2Cooldown = false;
var p2CoolID;
var p1MoveDuration = 1;
var p2MoveDuration = 1;

function displayWinMessage()
{
	//prevent futher button presses
	raceOver = true;
	
	//stop the timer
	clearInterval(timerID);
	timerStarted = false;

	if(p1Counter === 99)
	{
		$('.winner-message').append("<h1>Player 1 Wins!</br>Time: " + totalTime + " seconds</h1>");
	}
	else if(p2Counter === 99)
	{
		$('.winner-message').append("<h1>Player 2 Wins!</br>Time: " + totalTime + " seconds</h1>");
	}
}

$(document).ready(function() {
	$('body').on('keypress', function handlePress(event)
	{
		if(!raceOver)
		{
			// "a" (97), "s" (115), or "d" (100) key is pressed
			if(event.keyCode === 97 || event.keyCode === 115 || event.keyCode === 100)
			{
				if(!timerStarted)
				{
					startTime = new Date();
					timerStarted = true;	
				}

				p1Counter++;
				// move 99 times since each press moves 1% of the screen
				if(p1Counter < 100)
				{
					$('.p1').animate( {"margin-left": "+=1%"}, p1MoveDuration, 'swing');
					// win condition reached since marker doesn't start at 0% of the screen
					if(p1Counter === 99)
					{
						displayWinMessage();
					}
				}
			}
			
			// "j" (106), "k" (107), or "l" (108) key is pressed
			if(event.keyCode === 106 || event.keyCode == 107 || event.keyCode === 108)
			{
				if(!timerStarted)
				{
					startTime = new Date();
					timerStarted = true;	
				}

				p2Counter++;
				if(p2Counter < 100)
				{
					$('.p2').animate( {"margin-left": "+=1%"}, p2MoveDuration, 'swing');
					if(p2Counter === 99)
					{
						displayWinMessage();
					}
				}
			}
			
			// start a timer to track how long the race takes
			// need to find some equivalent to an update() loop
			if(timerStarted)
			{
				timerID = setInterval(function updateTimer()
				{
					endTime = new Date();
					totalTime = Math.abs(endTime.getSeconds() - startTime.getSeconds());
				}, 1000);
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