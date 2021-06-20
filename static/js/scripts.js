$(document).ready(function() {
  $("#design-pic").click(function() {
    $("#design").toggle();
    $("#design-pic").toggle();
  });
  $(".jobs").click(function() {
    $("#dev").toggle();
    $("#dev-pic").toggle();
  });
  $(".jobs").click(function() {
    $("#product").toggle();
    $("#product-pic").toggle();
  });
  $(".form").submit(function() {
    $(alert("Thank you for reaching to us."));
  });
  event.preventDefault();
});
