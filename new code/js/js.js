$(document).ready(function(){
    // betting page
    var full = 1000;
    var cost = 70;
    $("#total").html(full);
    $(".cost").html(cost);
    $(".bet-AL").click(function(){
        $("#total").html(full-=cost);
    });

    // menu
    $('.sidebarbtn').click(function(){
        $('.sidebar').toggleClass('active')
        $('.sidebarbtn').toggleClass('toggle')
                              
    });
    //faq
    $( function() {
        $( "#accordion" ).accordion();
      });
});