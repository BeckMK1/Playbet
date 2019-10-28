$(document).ready(function(){
var full = 1000;
var cost = 70;
$("#total").html(full);
$(".cost").html(cost);
$(".bet-AL").click(function(){
$("#total").html(full-=cost);
});
});