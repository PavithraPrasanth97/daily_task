$(document).ready(function()
{
// $("#para").html("<h2>Pavithra</h2>");
$("#rmv").click(function()
{
   $("#para").hide();
   $("#container").empty();
   $("#container").text("Hi");
});


$("#show").click(function()
{
   $("#para").show();
});


$("#btn").click(function()
{
  $(".listItem").before("<li>" + $("#inputField").val() + "</li>");
});

$("#imageChange").click(function()
{
    $("#image").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TA4ahPzR3-ghs5O3yFgG30Sg730c5yyP1g&s");
});

$("#add").click(function()
{
    $("#para").toggleClass("highlight");
});


});