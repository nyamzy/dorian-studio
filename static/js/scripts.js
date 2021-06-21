$(document).ready(function() {
  $("#design-pic").click(function() {
    $("#design").toggle();
    $("#design-pic").toggle();
  });
  $("#design").click(function() {
    $("#design").toggle();
    $("#design-pic").toggle();
  });
  $("#dev-pic").click(function() {
    $("#dev").toggle();
    $("#dev-pic").toggle();
  });
  $("#dev").click(function() {
    $("#dev").toggle();
    $("#dev-pic").toggle();
  });
  $("#product-pic").click(function() {
    $("#product").toggle();
     $("#product-pic").toggle();
   });
   $("#product").click(function() {
     $("#product").toggle();
      $("#product-pic").toggle();
  });
  $(".form").submit(function() {
    $(alert("Thank you for reaching to us."));
  });
  $("#work1").hover(function() {
    $(".pr1").toggle();
  });
  $("#work2").hover(function() {
    $(".pr2").toggle();
  });
  $("#work3").hover(function() {
    $(".pr3").toggle();
  });
  $("#work4").hover(function() {
    $(".pr4").toggle();
  });
  $("#work5").hover(function() {
    $(".pr5").toggle();
  });
  $("#work6").hover(function() {
    $(".pr6").toggle();
  });
  $("#work7").hover(function() {
    $(".pr7").toggle();
  });
  $("#work8").hover(function() {
    $(".pr8").toggle();
  });
  event.preventDefault();
});
