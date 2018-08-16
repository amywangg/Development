//SELECT an element
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
h1.style.color = "tomato";
var isBlue = false;

// every 1000ms (1s) it will run
setInterval(function(){ //MANIPULATE
	if(isBlue){ //if blue change white
		body.style.background ="white";
	} else{ //otherwise change blue
		body.style.background= "#3498db";
	}
	//isBlue = !isBlue //change to opposite
}, 1000);