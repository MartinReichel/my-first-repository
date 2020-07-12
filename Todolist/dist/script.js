$(".add").on("click", () => {
  addTodo = $("input").val(); //input value
  $("ul").append(`<li><span class="todo-text">${addTodo}</span><span><i class="fas fa-trash"></i><i class="fas fa-check-circle"></i></span></li>`); // add the value in the list
  $("input").val(""); // delete value from input
});

$("ul").on("click", "li .todo-text", function(){ // CORRECT
  $(this).toggleClass("scratched"); // CORRECT
})

$("ul").on("click", ".fa-check-circle", function(){
  $(this).parent().parent().toggleClass("scratched");
  $(this).toggleClass("green");
})

$("ul").on("click", ".fa-trash", function(){
  $(this).parent().parent().remove();
})