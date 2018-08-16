//SELECT an element
var tag = document.querySelector("button");
var body = document.querySelector("body");
//TOGGLE
tag.addEventListener("click", function() {
	body.classList.toggle("changeBg");
});


