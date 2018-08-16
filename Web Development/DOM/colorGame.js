//SELECT an element
var squares = document.querySelectorAll(".square");
var dispColor = document.getElementById("guessColor");
var showGuess = document.querySelectorAll("h1")[1];
var startButton = document.querySelectorAll("button")[0];
var easyMode = document.querySelectorAll(".mode")[1];
var hardMode = document.querySelectorAll(".mode")[0];
var newColor = document.querySelector(".newCol");
var h4 = document.querySelector("h4");
var pickedColor;
var colors =[];
var mode;


// Event Listeners
startButton.addEventListener("click", startGame); 

easyMode.addEventListener("click", function() {
	easyMode.classList.add("active");
	hardMode.classList.remove("active");
	squares[3].style.display = "none";
	squares[4].style.display = "none";
	squares[5].style.display = "none";

}); 
hardMode.addEventListener("click", function() {
	hardMode.classList.add("active");
	easyMode.classList.remove("active");
	squares[3].style.display = "block";
	squares[4].style.display = "block";
	squares[5].style.display = "block";
}); 
newColor.addEventListener("click", function() {
	for (var i = 0; i < colors.length; i++) {
		colors.splice(i,1);
	}
	newColor.textContent = "New Colours";
	h4.textContent = "";
	startGame();
}); 

// Functions
function startGame (){
	if (hardMode.classList.contains("active")){
		mode = 6;
	} else {
		mode = 3;
	}
	randomColors(mode);
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	guessColor();
	hardMode.disabled = true;
	easyMode.disabled = true;
	newColor.disabled = false;
	setupSquares();
}

function randomColors(mode){
	var plc;
	for (var j = 0; j < mode; j++) {
	var num =[];
		for (var i = 0; i < 3; i++) {
			var ran =Math.floor((Math.random()*255)) ;
			num.push(ran);
		}
		plc = "rgb(" + num[0] + ", " + num[1] + ", " + num[2] + ")";
		colors.push(plc);
	}
}

function guessColor (){
	ranNum = Math.floor(Math.random()*(colors.length-1));
	startButton.style.display = "none";
	dispColor.style.display = "block";
	pickedColor = colors[ranNum];
	showGuess.textContent= pickedColor;
	}

function setupSquares(){
	for(var i = 0; i < mode; i++){
		squares[i].addEventListener("click", checkWin);
	}
}

function checkWin(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			console.log(clickedColor);
			if(clickedColor == pickedColor){
				h4.textContent = "Correct!";
			endgame();
			} else {
				this.style.background = "rgb(50, 59, 76)";
				h4.textContent = "Try Again"
			}
		}

function endgame(){
	for(var i = 0; i < mode; i++){
		squares[i].removeEventListener("click", checkWin);
	}
		hardMode.disabled = false;
		easyMode.disabled = false;
		newColor.textContent = "Play Again";
}



