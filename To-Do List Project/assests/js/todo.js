$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Deleting the todos: 
// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeout(500,function(event){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });

$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  const parent  = $(this).closest("li");
  parent.fadeOut(500, function(event) {
    parent.remove();
  });
});

// Creating new todos

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+ todoText +"</li>")
	}
});

// $('.fa-pencil').click(function(){
// 	const input = $("input[type ='text']")
// 	input.fadeout(500,function())

// });

