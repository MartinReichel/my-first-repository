let counter = 0;
$(".btn-increase").on("click", () => {
  counter++;
  $("span").text(counter);
});
$(".btn-decrease").on("click", () => {
  counter--;
  $("span").text(counter);
});
