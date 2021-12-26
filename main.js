//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
carWidth = 75;
carHeight = 100;

//Set initial position for a car image.
car_x = 5;
car_y = 200;

function add() {

	background_imgTag = new Image();
    background_imgTag.src=background_image;
    background_imgTag.onload = uploadBackground;

    car_imgTag = new Image();
    car_imgTag.src= greencar_image;
   car_imgTag.onload = uploadgreencar;
    
	//upload car, and background images on the canvas.
}

function uploadBackground() {

	ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);

	//Define function ‘uploadBackground’

}

function uploadgreencar() {

	ctx.drawImage(car_imgTag , car_x , car_y , carWidth , carHeight);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if (car_y >= 0){
		car_y= car_y-10 ;
		console.log("when up arrow is pressed x=" + car_x + ", y=" + car_y );
		uploadBackground();
		uploadgreencar();
	}
   
   }
   
   function down(){
	   if (car_y <= 300){
		   car_y= car_y+10 ;
		   console.log("when down arrow is pressed x=" + car_x + ", y=" + car_y );
		   uploadBackground();
		   uploadgreencar();
	   }
	  
	  }
   
	  function left(){
	   if (car_x >= 0){
		   car_x= car_x-10 ;
		   console.log("when left arrow is pressed x=" + car_x + ", y=" + car_y );
		   uploadBackground();
		   uploadgreencar();
	   }
	  
	  }
   
	  function right(){
	   if (car_x <= 750){
		   car_x= car_x+10 ;
		   console.log("when right arrow is pressed x=" + car_x + ", y=" + car_y );
		   uploadBackground();
		   uploadgreencar();
	   }
	  
	  }
   
