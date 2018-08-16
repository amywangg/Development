//SELECT an element
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var resetButton = document.getElementById("reset");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var dmax = document.getElementById("dmax");
var setMax = document.getElementById("maxScore");

var p1score = Number(score1.textContent);
var p2score = Number(score2.textContent);
var maxScore = Number(dmax.textContent);
console.log(maxScore);

p1Button.addEventListener("click", function() {
	if (!checkWin()) {
		p1score++;
		score1.textContent = p1score;
		checkWin();
	} else {
	}
});

p2Button.addEventListener("click", function() {
	if (!checkWin()) {
		p2score++;
		score2.textContent = p2score;
		checkWin();
	} else {
	}
});

function checkWin(){
	if (p1score == maxScore || p2score == maxScore) {
		if (p1score == maxScore) {
			score1.classList.add("winner");
			score2.classList.add("loser");
		} else {
			score2.classList.add("winner");
			score1.classList.add("loser");
		}
		return true;
	} 
}

reset.addEventListener("click", function() {
	p1score =0;
	p2score =0;
	score1.textContent = (p1score);
	score2.textContent = (p2score);
	score1.classList.remove("winner", "loser");
	score2.classList.remove("winner","loser");

	var set = setMax.value;
	console.log(set);
	if (setMax.value == ""){
		// dmax doesnt change
		console.log("test");
	}else{
		maxScore = Number(setMax.value);
		dmax.textContent= maxScore;
		setMax.value = "";
	}
});






