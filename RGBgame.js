var colorArray = genRandomColors(6);
var correctColor = pickColor();
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("colorDisplay");
var promptDisplay = document.getElementById("prompt");
var h1 = document.querySelector("h1");

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
		boxes[i].style.background = color;
	}
}

colorDisplay.textContent = correctColor;

for(var i = 0; i < boxes.length; i++){
	boxes[i].style.backgroundColor = colorArray[i];

	boxes[i].addEventListener("click",function(){
		var selectColor = this.style.backgroundColor;

		if(selectColor === correctColor){
			promptDisplay.textContent = "Correct!";
			h1.style.backgroundColor = correctColor;
			correctedColor(correctColor);

		}else{
			promptDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	})
}

