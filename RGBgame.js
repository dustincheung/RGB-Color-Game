var colorArray = genRandomColors(6);
var correctColor = pickColor();
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("colorDisplay");
var promptDisplay = document.getElementById("prompt");
var h1 = document.querySelector("h1");
var restartButt = document.getElementById("restart");

function genRandomColors(num){
	var tempArray = []

	for(var i = 0; i < num; i++){
		var red = Math.floor(Math.random()*256);
		var green = Math.floor(Math.random()*256);
		var blue = Math.floor(Math.random()*256);
		var colorString = "rgb(" + red + ", " + green + ", " + blue + ")";

		tempArray.push(colorString);
	}

	return tempArray;
}

function pickColor(){
	var randNum = Math.floor(Math.random() * colorArray.length);
	return colorArray[randNum];
}

function correctedColor(color){
	for(var i = 0; boxes.length; i++){
		boxes[i].style.backgroundColor = color;
	}
}

restartButt.addEventListener("click", function(){
	//generating new colors
	colorArray = genRandomColors(6);

	//setting new correct color
	correctColor = pickColor();

	//change color display text
	colorDisplay.textContent = correctColor;

	//update box colors
	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = colorArray[i];
	}

	//reset h1 background
	h1.style.backgroundColor = "#232323"

})

colorDisplay.textContent = correctColor;

for(var i = 0; i < boxes.length; i++){
	boxes[i].style.backgroundColor = colorArray[i];

	boxes[i].addEventListener("click",function(){
		var selectColor = this.style.backgroundColor;

		if(selectColor === correctColor){
			promptDisplay.textContent = "Correct!";
			h1.style.backgroundColor = correctColor;
			restartButt.textContent = "Play Again"
			correctedColor(correctColor);

		}else{
			promptDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	})
}

