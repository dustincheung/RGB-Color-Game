var correctColor = pickColor();
var colorArray = genRandomColors();
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("colorDisplay");
var promptDisplay = document.getElementById("prompt");

function pickColor(){
	var randNum = Math.floor(Math.random() * colorArray.length);
	return colorArray[randNum];
}

function correctedColor(color){
	for(var i = 0; boxes.length; i++){
		boxes[i].style.backgroundColor = color;
	}
}

colorDisplay.textContent = correctColor;

for(var i = 0; i < boxes.length; i++){
	boxes[i].style.backgroundColor = colorArray[i];

	boxes[i].addEventListener("click",function(){
		var selectColor = this.style.backgroundColor;

		if(selectColor === correctColor){
			promptDisplay.textContent = "Correct!";
			correctedColor(correctColor);
		}else{
			promptDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	})
}

