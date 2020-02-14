var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// start the game
$("#startBtn").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


// which button is cliccked
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

// answer check
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 500);
    }
  } else {
    gameOver();
    startOver();
  }
}

// game sequence
function nextSequence() {
  $("#startBtn").addClass("startBtnNotVis");
  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// game-over
function gameOver() {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  $("#level-title").html("Level " + level + "<br><br>💥GAME OVER💥" + "<br><br>Press to Restart");
  $(".instruction").css("display", "none");
  $("#startBtn").removeClass("startBtnNotVis");
  $("#startBtn").html("Restart");
}

// restart
function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
}

// buttons sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// buttons animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 100);
}
