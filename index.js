let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];




function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
    let buttonSound = new Audio("sounds/" + randomChosenColour + ".mp3");
    // buttonSound.play();
}