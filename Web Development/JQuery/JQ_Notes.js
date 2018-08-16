// Jquery notes

// SELECTORS
// Select all img tags
$("img");
// Select all class "className"
$(".className");
// Select all id "idName"
$("#idName");
//Select "a" tags inside of li's
$("li a");

// Manipulating Style
$("#someId").css("border","2px solid black");
//OR
var styles = {
	backgroundColor: "pink";
	fontWeight: "bold";
};
$("#someId").css(styles);

// METHODS
// Selects all text in the tag
$("#someID").text();
// Change text in tag
$("#someID").text("Hello");
// Find inner HTML
$("#someID").html();
// Edit inner HTML
$("#someID").html("<li>add<li>");
// Retrieve attribute
$("#someIMG").attr();
// Set attribute
$("#someIMG").attr("src","changed.jpg");
// Retrive value (radio, textbox, etc.)
$("someRadio").val();
// Set Value
$("someRadio").val("true");

// Class Methods
$("someID").addClass("blah");
$("someID").removeClass("blah");
$("someID").toggleClass("blah");

// JQUERY EVENTS
// Click
$("someID").click(function(){
	console.log("hello");
});
$("someID").click(someFunc);
// Keypress
$("someID").keypress(function(){
	console.log("hello");
});
$("someID").keypress(someFunc);

// On: "addEventListener"
$("someID").on("click", function(){
	console.log("hello");
});

// click() only adds listeners for existing elements
// on() will add listeners for all potential future elements

