let counter = 0;
$(".increase").on("click", () => {
  counter++;
  $("span").text(counter);
});
$(".decrease").on("click", () => {
  counter--;
  $("span").text(counter);
});
