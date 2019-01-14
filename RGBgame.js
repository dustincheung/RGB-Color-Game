//linking javascript to html elements and initializing game
var numBoxes = 6;
var colorArray = genRandomColors(numBoxes);
var correctColor = pickColor();
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("colorDisplay");
var promptDisplay = document.getElementById("prompt");
var h1 = document.querySelector("h1");
var restartButt = document.getElementById("restart");
var easyButt = document.querySelector("#easyButt");
var hardButt = document.querySelector("#hardButt");

//returns array of num size initialized with random rgb strings
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

//selects a random target color from the color array
function pickColor(){
	var randNum = Math.floor(Math.random() * colorArray.length);
	return colorArray[randNum];
}

//updates all boxes to the target color when the correct box is selected
function correctedColor(color){
	for(var i = 0; boxes.length; i++){
		boxes[i].style.backgroundColor = color;
	}
}

//alters shading of selected buttons
easyButt.addEventListener("click",function(){
	easyButt.classList.add("selected");
	hardButt.classList.remove("selected");

	//initializing for easy mode
	numBoxes = 3;
	colorArray = genRandomColors(numBoxes);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;

	for(var i = 0; i < boxes.length; i++){
		if(colorArray[i]){
			boxes[i].style.backgroundColor = colorArray[i];
		}else{
			boxes[i].style.display = "none";
		}
	}
})

hardButt.addEventListener("click",function(){
	hardButt.classList.add("selected");
	easyButt.classList.remove("selected");

	//initializing for hard mode
	numBoxes = 6;
	colorArray = genRandomColors(numBoxes);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;

	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = colorArray[i];
		boxes[i].style.display = "block";
	}
})

//button to restart game where variables are initialzied to new values
restartButt.addEventListener("click", function(){
	//generating new colors
	colorArray = genRandomColors(numBoxes);

	//setting new correct color
	correctColor = pickColor();

	//change color display text
	colorDisplay.textContent = correctColor;

	//update box colors
	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = colorArray[i];
	}

	//reset h1 background
	h1.style.backgroundColor = "steelblue"

})

//color display is set to target color
colorDisplay.textContent = correctColor;

//sets box colors to rgb strings in array and handles selection logic
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

