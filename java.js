
		var contentCheck;
		var content;
		var winningGame;
		var turn = 0;
		var cellChosen = 0;
		var s1 = document.getElementById('canvas1');
		var s2 = document.getElementById('canvas2');
		var s3 = document.getElementById('canvas3');
		var s4 = document.getElementById('canvas4');
		var s5 = document.getElementById('canvas5');
		var s6 = document.getElementById('canvas6');
		var s7 = document.getElementById('canvas7');
		var s8 = document.getElementById('canvas8');
		var s9 = document.getElementById('canvas9');
		
		window.onload=function(){
			
			contentCheck = [false,false,false,false,false,false,false,false,false];
			content = ['','','','','','','','',''];
			winningGame = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		}

		
		function canvasClicked(canvasNumber){
			var myCanvas = "canvas"+canvasNumber;
			var c = document.getElementById(myCanvas);
			var cxt = c.getContext("2d");
			

			if(contentCheck[canvasNumber-1] ==false){
				if(turn%2==0){
					cxt.beginPath();
					cxt.moveTo(10,10);
					cxt.lineTo(40,40);
					cxt.moveTo(40,10);
					cxt.lineTo(10,40);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'X';
				}

				else{
					cxt.beginPath();
					cxt.arc(25,25,20,0,Math.PI*2,true);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'O';
				}

				turn++;
				contentCheck[canvasNumber-1] = true;
				cellChosen++;
				if(cellChosen==9){
					
					document.getElementById('message').innerHTML = 'THE GAME IS OVER! it is tie '; 
				}
				checkForWinners(content[canvasNumber-1]);
			
			}
			else{
				alert("SORRY, THAT SPACE IS NOT AVAILABLE ANY MORE!");
			}

		}

		function checkForWinners(symbol){
			
			for(var k = 0; k < winningGame.length; k++){
			if(content[winningGame[k][0]]===symbol&&
				content[winningGame[k][1]]===symbol&&
				content[winningGame[k][2]]===symbol)
				{
				    document.getElementById('message').innerHTML = "THE WINNER IS: * " + symbol+" *";
				    contentCheck = [true,true,true,true,true,true,true,true,true];
				    /*if (k===0){
				    	s1.style.backgroundColor = "green";
				    	s2.style.backgroundColor = 'green';
				    	s3.style.backgroundColor = 'green';

				    }*/
			}
			}

		}

		function playAgain(){

				location.reload(true);
		}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function mOver(obj) {
  obj.style.backgroundColor = getRandomColor();
  obj.style.transitionDuration = "0s";
}
function mOut(obj) {
  obj.style.backgroundColor = "transparent";
  obj.style.transitionDuration = "2s";
}
