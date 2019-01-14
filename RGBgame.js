var colorArray = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var boxes = document.querySelectorAll(".box");
var correctColor = colorArray[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = correctColor;

for(var i = 0; i < boxes.length; i++){
	boxes[i].style.backgroundColor = colorArray[i];

	boxes[i].addEventListener("click",function(){
		var selectColor = this.style.backgroundColor;

		if(selectColor === correctColor){
			alert("correct");
		}else{
			alert("wrong")
		}
	})
}

