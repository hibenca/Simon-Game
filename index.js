// Simon Game JavaScript file

// Button colours
let buttonColours = ["red", "blue", "green", "yellow"];

// Game pattern
let gamePattern = [];

// Users pattern
let userClickedPattern = [];

// User click sequence
$('.btn').on("click", function () {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    // Play sound
    playSound(userChosenColour);

    // Animation
    animatePress(userChosenColour);
});

// Starting the game... in progress
$(document).keypress(function (event) {
    console.log(event.key)
})


// Game sequence
function nextSequence() {

    // Choose a random button
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Animate button Flash
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);

    // Play sound
    playSound(randomChosenColour);
}

// Play button sound
function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play();
}

// Button click animation
function animatePress(currentColour) {
    $('#' + currentColour).addClass("pressed")
    setTimeout(function() {
        $('#' + currentColour).removeClass("pressed")
    }, 100);
}