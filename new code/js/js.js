$(document).ready(function(){
    // betting page
    var full = 1000;
    var cost = 70;
    $("#total").html(full);
    $(".cost").html(cost);
    // bet function left
    $("#bet-AL1").click(function(){
        $("#total").html(full-=cost);
        $("#bet1").css("opacity", "10%")
    });
    $("#bet-AL2").click(function(){
        $("#total").html(full-=cost);
        $("#bet2").css("opacity", "10%")
    });
    $("#bet-AL3").click(function(){
        $("#total").html(full-=cost);
        $("#bet3").css("opacity", "10%")
    });
    $("#bet-AL4").click(function(){
        $("#total").html(full-=cost);
        $("#bet4").css("opacity", "10%")
    });
    $("#bet-AL5").click(function(){
        $("#total").html(full-=cost);
        $("#bet5").css("opacity", "10%")
    });
// bet function right
$("#bet-AR1").click(function(){
    $("#total").html(full-=cost);
    $("#bet1").css("opacity", "10%")
    $("#bet-AL1").css("display", "none")
    $("#bet-AR1").css("right","140px")
    $("#bet-AR1").css("margin-top","40px")
});
$("#bet-AR2").click(function(){
    $("#total").html(full-=cost);
    $("#bet2").css("opacity", "10%")
    $("#bet-AL2").css("display", "none")
});
$("#bet-AR3").click(function(){
    $("#total").html(full-=cost);
    $("#bet3").css("opacity", "10%")
    $("#bet-AL3").css("display", "none")
});
$("#bet-AR4").click(function(){
    $("#total").html(full-=cost);
    $("#bet4").css("opacity", "10%")
    $("#bet-AL4").css("display", "none")
});
$("#bet-AR5").click(function(){
    $("#total").html(full-=cost);
    $("#bet5").css("opacity", "10%")
    $("#bet-AL5").css("display", "none")
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