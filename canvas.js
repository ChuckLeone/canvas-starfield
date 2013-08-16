/* Randomly generated star field by Chuck Leone
/* Use as you like, please credit me if you do
/* email: chuckleone@gmail.com
/* twitter @ChuckLeone 
 */ 

var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');

var ranNum = Math.floor((Math.random() * 100) +1);

myStars = function(){
// 	var rnd = Math.floor((Math.random()*200) +1);
 	for (i=1; i<=60;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'rgb(255, 255, 255)'; // white
  		context.fillRect(x, y, 1, 1);
 	};
 	
 	for (i=1; i<=40;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'rgb(80, 80, 80)'; // grey
  		context.fillRect(x, y, 1, 1);
 	};
 	
 	for (i=1; i<=10;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'rgb(255, 100, 100)'; // red
  		context.fillRect(x, y, 1, 1);
 	};
 	
 	for (i=1; i<=10;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'rgb(86, 171, 255)'; // blue
  		context.fillRect(x, y, 1, 1);
 	};
 	
 	for (i=1; i<=10;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'green'; // green
  		context.fillRect(x, y, 2, 2);
 	};
 	
 	for (i=1; i<=5;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'rgb(255, 255, 255)'; //white
  		context.fillRect(x, y, 2, 2);
 	}
 	// build a planet
 	for (i=1; i<=1;  i++) {	
 		var rndX = Math.floor((Math.random()*640) +1);
 		var rndY = Math.floor((Math.random()*480) +1);
 		console.log(rndX + rndY);
 		x = rndX;
 		y = rndY;
 		context.fillStyle = 'rgb(155, 255, 251)'; // mint green
  		context.fillRect(x, y, 4, 4);
  		context.fillRect(x+1, y-1, 1, 1);
  		context.fillRect(x+2, y-1, 1, 1);
  		context.fillRect(x+4, y+2, 1, 1);
  		context.fillRect(x-1, y+1, 1, 1);
  		context.fillRect(x-1, y+2, 1, 1);
  		context.fillRect(x+1, y+4, 1, 1);
  		context.fillRect(x+2, y+4, 1, 1);
  		context.fillRect(x+4, y+1, 1, 1);
  		context.fillRect(x+4, y+2, 1, 1);
 	}
 	return;
};

myStars();
