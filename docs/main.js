$(document).ready(function(){

$(".modal-button").click(function(){
    $(".modal").toggle();
});
$(".modal-background").click(function(){
    $(".modal").toggle();
})
$(".close").click(function(){
    $(".modal").toggle();
})

$(window).scroll(function(){

    if($(window).scrollTop() > 1000) {
     $(".intro").css("background-color","mediumspringgreen");   
    }
    if($(window).scrollTop() > 1000) {
        $("header").css("background-color","aqua");   
       }

})



})