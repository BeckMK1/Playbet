$(document).ready(function(){
    // betting page
    var full = 100;
    var cost = 5;
    $("#total").html(full);
    $(".cost").html(cost);
    // bet function left
    $("#bet-AL1").one("click",function(){
        $("#total").html(full-=cost);
        $("#bet1").css("opacity", "10%")
        $("#bet-AR1").css("display", "none")
        $("#bet-AL1").css("left","160px")
        $("#bet-AL1").css("margin-top","40px")
        $("#lineR1").css("display", "none")
        $("#lineL1").css("display", "none")
    });
    $("#bet-AL2").one("click",function(){
        $("#total").html(full-=cost);
        $("#bet2").css("opacity", "10%")
        $("#bet-AR2").css("display", "none")
        $("#bet-AL2").css("left","160px")
        $("#bet-AL2").css("margin-top","40px")
        $("#lineR2").css("display", "none")
        $("#lineL2").css("display", "none")
    });
    $("#bet-AL3").one("click",function(){
        $("#total").html(full-=cost);
        $("#bet3").css("opacity", "10%")
        $("#bet-AR3").css("display", "none")
        $("#bet-AL3").css("left","160px")
        $("#bet-AL3").css("margin-top","40px")
        $("#lineR3").css("display", "none")
        $("#lineL3").css("display", "none")
    });
    $("#bet-AL4").one("click",function(){
        $("#total").html(full-=cost);
        $("#bet4").css("opacity", "10%")
        $("#bet-AR4").css("display", "none")
        $("#bet-AL4").css("left","160px")
        $("#bet-AL4").css("margin-top","40px")
        $("#lineR4").css("display", "none")
        $("#lineL4").css("display", "none")
    });
    $("#bet-AL5").one("click",function(){
        $("#total").html(full-=cost);
        $("#bet5").css("opacity", "10%")
        $("#bet-AR5").css("display", "none")
        $("#bet-AL5").css("left","160px")
        $("#bet-AL5").css("margin-top","40px")
        $("#lineR5").css("display", "none")
        $("#lineL5").css("display", "none")
    });
// bet function right
$("#bet-AR1").one("click",function(){
    $("#total").html(full-=cost);
    $("#bet1").css("opacity", "20%")
    $("#bet-AL1").css("display", "none")
    $("#bet-AR1").css("right","140px")
    $("#bet-AR1").css("margin-top","80px")
    $("#lineR1").css("display", "none")
    $("#lineL1").css("display", "none")
});
$("#bet-AR2").one("click",function(){
    $("#total").html(full-=cost);
    $("#bet2").css("opacity", "10%")
    $("#bet-AL2").css("display", "none")
    $("#bet-AR2").css("right","140px")
    $("#bet-AR2").css("margin-top","80px")
    $("#lineR2").css("display", "none")
    $("#lineL2").css("display", "none")
    
});
$("#bet-AR3").one("click",function(){
    $("#total").html(full-=cost);
    $("#bet3").css("opacity", "10%")
    $("#bet-AL3").css("display", "none")
    $("#bet-AR3").css("right","140px")
    $("#bet-AR3").css("margin-top","80px")
    $("#lineR3").css("display", "none")
    $("#lineL3").css("display", "none")
});
$("#bet-AR4").one("click",function(){
    $("#total").html(full-=cost);
    $("#bet4").css("opacity", "10%")
    $("#bet-AL4").css("display", "none")
    $("#bet-AR4").css("right","140px")
    $("#bet-AR4").css("margin-top","80px")
    $("#lineR4").css("display", "none")
    $("#lineL4").css("display", "none")
});
$("#bet-AR5").one("click",function(){
    $("#total").html(full-=cost);
    $("#bet5").css("opacity", "10%")
    $("#bet-AL5").css("display", "none")
    $("#bet-AR5").css("right","140px")
    $("#bet-AR5").css("margin-top","80px")
    $("#lineR5").css("display", "none")
    $("#lineL5").css("display", "none")
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