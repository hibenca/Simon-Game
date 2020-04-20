// Simon Game JavaScript file

// Button colours
let buttonColours = ["red", "blue", "green", "yellow"];

// Game pattern
let gamePattern = [];

// Users pattern
let userClickedPattern = [];

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

// User click sequence
$('.btn').on("click", function () {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    // Play sound
    playSound(userChosenColour);
});


// Play button sound
function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play();
}

// Animation... in progress
function animatePress(currentColour) {
    $('.btn').addClass("pressed").setTimeout($(".btn").removeClass("pressed"), 1100)
}