// Notes II

//Adding different event listeners to 
//multiple elements
var list = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	list[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	list[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	list[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}