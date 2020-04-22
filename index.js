// Simon Game JavaScript file

// Game level
let level = 0

// Game on/off
let started = false;

// Button colours
let buttonColours = ["red", "blue", "green", "yellow"];

// Game pattern
let gamePattern = [];

// Users pattern
let userClickedPattern = [];

// Starting the game
$(document).keydown(function (e) {
    if (!started && e.key === 'a') {
        nextSequence();
        started = true;
    }
});

// User click sequence
$('.btn').on("click", function () {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    // Play sound
    playSound(userChosenColour);

    // Animation
    animatePress(userChosenColour);

    // Check answer
    checkAnswer(userClickedPattern.length - 1);

});

// Game sequence
function nextSequence() {

    // reset click pattern
    userClickedPattern = []

    // Choose a random button
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Animate button Flash
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);

    // Play sound
    playSound(randomChosenColour);

    // Level changer
    level++;
    $('h1').text("Level " + level)
}

// Check answer
function checkAnswer(currentLevel) {
    // If they get the answer right
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    // If they get the answer wrong
    } else {
        $('h1').text('Game Over, Press "a" key to start');
        playSound("wrong");
        $('body').addClass("game-over")
        setTimeout(function () {
            $('body').removeClass("game-over")
        }, 200);
        startOver();
    }
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

// Start over
function startOver() {
    level = 0;
    gamePattern = [];
    $("h1").text('Press The "a" Key to Start Over');
    started = false;
}