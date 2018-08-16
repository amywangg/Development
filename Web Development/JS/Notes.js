// Notes

//Numbers
4 , 5.2, -1.2
//Strings
"Hello World", '42'
//Booleans
true, false

//Math
4 + 10 //14
1 / 5  //0.2
//Modulo - remainder
10 % 3 //1

//Single/Double quotes OK
"Hello World"
'Hello World'
//Concatenation
"charlie" + "brown"	//"charliebrown"
//Escape Characters start with "\"
"This is a backslash: \\"
" \" " " \'"
//Length Property
"Some String".Length //11
//Access individual characters []
"hello"[0] //"h"
"hello"[-1]//"o" 

//Variables
var varName = true, 11, "hello"
var num = 10
num + 2 + 3 //15

//null and undefined
null, undefined
//Initiated but never used
var name; //undefined
name = null; //assigned null

// COMPARISON OPERATORS
1 == 2	equal //false 
1 != 2	not equal //true
1 > 2	greater than //false
1 < 2	less than //true
1 >= 2	greater than/equal //false
1 <= 2	less than/equal //true
1===1	(not)equal in value 
1!=='1'	and type //true x2

// LOGICAL OPERATORS
&&	AND  
||	OR
! 	NOT

//CONDITIONALS
if(true || false) {
"some code here"
} else if (true || false) {
"some more code here"	
} else{
"even more code here"
}

//LOOPS
while(condition==true){
"run some code"
}

while(count < 5){
	console.log(count);
	count++;
}

for(var i= 0;i<10; i++){
"run some code"
}

//FUNCTIONS
function funcName (){
	"run some code"	
}
funcName(); //calls it

function operation (x){
	var num = x*x; //x^2
}
operation(10); //calls it

//EXAMPLES

function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  //return the result variable
  return result;
}

function kebabToSnake(str) {
  //replace all '-' with "_"'s
  var newStr = str.replace(/-/g , "_");
  //return str
  return newStr;

}

// OBJECTS
var person = {name: "Amy",age: 19,city: "Richmond Hill"};
person["age"] || person.age  //19

//Array of objects
var array = [
	{name: "Amy",age: 19,city: "Richmond Hill"}
	{name: "Tom",age: 32,city: "Toronto"}
]

var comments ={};
comments.data=["Good", "Bad","Neutral"]
// add function to an object
comments.print = function(arr){
	arr.forEach(function(el){
		console.log(el);
		});
	}

// METHODS
document.getElementById()
document.getElementByClassName()
document.getElementByTagName()
document.querySelector()
document.querySelectorAll()

//SELECT an element
var tag = document.getElementById("highlight");
//ADD
tag.classList.add("changeBlue");
//REMOVE
tag.classList.remove("changeBlue");
//TOGGLE
tag.classList.toggle("changeBlue");

//Manilpulate text
tag.textContent //List item 1
tag.textContent = "Changes text"
tag.innerHTML //<li>List item 1</li>


//Manipulate Atributes (img,href)
var img = document.querySelector("img");
img.getAttribute("href");
img.setAttribute("src", "somepic.jpg")


var button = document.querySelector("button");
var paragraph = document.querySelector("p");
//SETUP CLICK LISTENER
button.addEventListener("click", function() {
	paragraph.textContent = "Someone Clicked me"
});


button.addEventListener("click", someFunc {
	paragraph.textContent = "Someone Clicked me"
});
someFunc(){
	paragraph.textContent = "Someone Clicked me"
}