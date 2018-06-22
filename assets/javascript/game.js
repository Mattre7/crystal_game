var target_number = Math.floor(Math.random()*70+30);
var player_number = 0;
var wins = 0;
var losses = 0;
var crystal_1 = Math.floor(Math.random()*9+3);
var crystal_2 = Math.floor(Math.random()*9+3);
var crystal_3 = Math.floor(Math.random()*9+3);
var crystal_4 = Math.floor(Math.random()*9+3);

reset = function () {
    crystal_1 = Math.floor(Math.random()*9+3);
    crystal_2 = Math.floor(Math.random()*9+3);
    crystal_3 = Math.floor(Math.random()*9+3);
    crystal_4 = Math.floor(Math.random()*9+3);
    target_number = Math.floor(Math.random()*70+30);
    player_number = 0;
    $(".your_score").text(player_number);
    $(".target_number").html("<p class='target_num'>"+ target_number +"</p>")
}


$(".target_number").html("<p class='target_num'>"+ target_number +"</p>")
$(".wins-losses").append("<p class='w-l-text'>Wins: "+ wins +"</p>")
$(".wins-losses").append("<p class='w-l-text'>Losses: "+ losses +"</p>")
$(".your_score").text(player_number)

$(".crystal-1").on("click", function () {
    player_number += crystal_1;
    $(".your_score").text(player_number)
    if (player_number === target_number) {
        wins++;
        reset();
        alert("You win!")
    }
    if (player_number > target_number ) {
        losses++;
        reset();
        alert("You lose!")
    }
})

$(".crystal-2").on("click", function () {
    player_number += crystal_2;
    $(".your_score").text(player_number)
    if (player_number === target_number) {
        wins++;
        reset();
        alert("You win!")
    }
    if (player_number > target_number ) {
        losses++;
        reset();
        alert("You lose!")
    }
})

$(".crystal-3").on("click", function () {
    player_number += crystal_3;
    $(".your_score").text(player_number)
    if (player_number === target_number) {
        wins++;
        reset();
        alert("You win!")
    }
    if (player_number > target_number ) {
        losses++;
        reset();
        alert("You lose!")
    }
})

$(".crystal-4").on("click", function () {
    player_number += crystal_4;
    $(".your_score").text(player_number)
    if (player_number === target_number) {
        wins++;
        reset();
        alert("You win!")
    }
    if (player_number > target_number ) {
        losses++;
        reset();
        alert("You lose!")
    }
})

