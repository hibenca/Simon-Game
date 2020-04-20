// Simon Game JavaScript file

let buttonColours = ["red", "blue", "green", "yellow"];

// Store the game pattern
let gamePattern = [];


function nextSequence() {

    // Choose a random button
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Animate button Flash
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);

    // Play button sound
    new Audio("sounds/" + randomChosenColour + ".mp3").play();
}

// Handler function
$('.btn').on("click", function () {
    let userChosenColour = "notta"
    console.log('test')
});