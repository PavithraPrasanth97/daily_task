$(document).ready(function()
{

// $("#fname").focus(function()
// {
//  $("p").text("Focused");
// });

// $("#fname").change(function()
// {
//     let typedValue=$(this).val();
//     $("p").text(typedValue);
// });
    

// $("h3").mouseenter(function()
// {
//     $(this).css("background-color","blue");
// });

// $("h3").mouseleave(function()
// {
//     $(this).css("background-color","white");
// });

// $("#topic").hover(function()
// {   $(this).css("background-color","green") },
// function()
// {($this).css("background-color","white")}
// );

// $("#topic").fadeIn(5000,function()
// {
// alert("Animation Completed");
// });

// $("#topic").fadeOut(5000);


$("#topic").fadeToggle(1000);


$("#down").click(function()
{
    $("#topic").slideDown();
});

$("#up").click(function()
{
    $("#topic").slideUp(10000);
});

// $("#slide").click(function()
// {
//     $("#topic").slideToggle(5000);
// });




});