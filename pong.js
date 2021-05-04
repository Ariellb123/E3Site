var steps=8;

function ChangeSpeed()  {
	Xdirection = Xdirection *1.05;
	Ydirection = Ydirection *1.05;
}

//for storing position values of paddle (Global)
	var paddleLeft=0;
	var paddleTop=0;
	var paddleBottom=0;
	var paddleRight=0;

//for storing position values of ball(Global)
	var ballLeft=0;
	var ballTop=0;
	var ballRight=0;
	var ballBottom=0;

//for storing position values of paddle2 (Global)
	var paddle2Left=0;
	var paddle2Top=0;
	var paddle2Bottom=0;
	var paddle2Right=0;

	var Xdirection=-1;
	var Ydirection = 1;

function MoveBall()  {

//This takes the little square from div 'animate' and puts it in elem
		var elem = document.getElementById("paddle");
		paddleLeft=elem.offsetLeft;  	
		paddleTop=elem.offsetTop;


//This takes the little square from div 'animate' and puts it in elem
		var elem = document.getElementById("ball");

//these two statements get the starting position of the ball
	ballLeft=Math.floor((Math.random() * 400) + 0);
	ballTop=Math.floor((Math.random() * 400) + 0);

//Here we have a function that calls another function
//setInterval calls the function 'frame' every 5 miliseconds

   	idBallMoving = setInterval(BallTimer,7);

  	function BallTimer() {

		ballBottom= ballTop+40;
		ballRight= ballLeft+40;
		paddleBottom= paddleTop+100;
		paddleRight= paddleLeft+30;
		paddle2Bottom= paddle2Top+100;
		paddle2Right= paddle2Left+30;

		
		if (ballLeft<paddleRight && ballTop<paddleBottom && 
		ballTop>paddleTop) {
			Xdirection = -1*Xdirection;
			ballLeft =paddleRight;
			ChangeSpeed();
		}	
		
		if (ballRight>paddle2Left && ballTop>paddle2Top && 
		ballTop<paddle2Bottom) {
			Xdirection = -1*Xdirection;
			ballLeft =paddle2Left -40;
			ChangeSpeed();			
		}

    		//For the 'ball'
    		//test to see if it has reached the edge of the frame
		//change the direction
		//set x back to inside the boundary, so that it can start 		
		//counting down			
		
		if (ballTop<0)  {
			Ydirection = -1*Ydirection;
		}
		if (ballLeft<-44)  {
			window.alert("Game Over! The ball flew off player 1s field!");
			clearInterval(idBallMoving);
			location.reload();
		}
		if (ballTop>350)  {
			Ydirection = -1*Ydirection;		
		}
		if (ballLeft>400)  {
			window.alert("Game Over! The ball flew off player 2s field!");
			clearInterval(idBallMoving);
			location.reload();		
		}
	
//x and y increment (either up or down/left or right)
		ballLeft= ballLeft +Xdirection; 
		ballTop= ballTop +Ydirection;
		

//this moves it from the top
      		elem.style.top = ballTop + 'px'; 

//this moves it from the left
      		elem.style.left = ballLeft + 'px'; 				
}
}
function StartPaddles ()  {
		MovePaddle ();
		MovePaddle2();
}

function MovePaddle ()	{
		//This takes the little square from div 'animate' and puts it in elem
  		var elem = document.getElementById("paddle");

		//These statements store the starting 'x' value in xpos and the
		//starting 'y' value in ypos
		paddleLeft=elem.offsetLeft;
		paddleTop=elem.offsetTop;

 
		//event.keyCode gives the number of the key that was pressed
		//the line below stores that number in a variable called 'x'
		var x = event.keyCode;
  		  	if (x == 87) {  
				paddleTop=paddleTop-steps;
			}
   			if (x == 83) {  
				paddleTop=paddleTop+steps;
			}
		//these statements move the small square ('animate') to the new left and
		//top positions.  The distance is measured in pixels, hence 'px'
		//is appended to the numbers stored in xpos and epos.
			elem.style.left= paddleLeft +'px';
			elem.style.top= paddleTop +'px';
}

function MovePaddle2 ()	{
		//This takes the little square from div 'animate' and puts it in elem
  		var elem = document.getElementById("paddle2");
 
		//These statements store the starting 'x' value in xpos and the
		//starting 'y' value in ypos
		paddle2Left=elem.offsetLeft;
		paddle2Top=elem.offsetTop;




		//event.keyCode gives the number of the key that was pressed
		//the line below stores that number in a variable called 'x'
		var x = event.keyCode;
  		  	if (x == 38) {  
				paddle2Top=paddle2Top-steps;
			}
   			if (x == 40) {  
				paddle2Top=paddle2Top+steps;
			}
		//these statements move the small square ('animate') to the new left and
		//top positions.  The distance is measured in pixels, hence 'px'
		//is appended to the numbers stored in xpos and epos.


			
			elem.style.left=paddle2Left +'px';
			elem.style.top=paddle2Top+'px';
}
