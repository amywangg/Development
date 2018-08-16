$("ul").on("click", "li", function(){
	//this refers to the individual
	$(this).toggleClass("completed");
});

//event to stop li listener
$("ul").on("click","span", function(event){
	//will remove the parent "li"
	$(this).parent().fadeOut(500, function(){
	$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
	//check for enter key
	if(event.which === 13){
		var todoText=$(this).val(); 
		$(this).val(""); 
		$("ul").append('<li><span><i class="fas fa-trash-alt fa-lg"></i></span>'+todoText+"</li>").fadeIn(500, function(){

	});
	}

});

$(".fa-clipboard-check").click(function(){
	$("input[type='text'").fadeToggle();
});