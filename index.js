var level=1; var started=false;
$(document).on("keypress",function () {
  if(started!=true)
  {
    started=true;
  nextSequence();
  }
});
var buttonColors=["red", "blue", "green", "yellow"];
 var userClickedPattern=[];
var gamePattern=[];
function nextSequence()
{
  $("h1").text("Level "+(level++));
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  makeSound(randomChosenColor);
  makeAnimation(randomChosenColor);
}

$(".btn").click(function () {
  if(started===true)
  {
  var button_pressed=this.getAttribute("id");
  userClickedPattern.push(button_pressed);
  makeSound(button_pressed);
  makeAnimation(button_pressed);
  checkAnswer(userClickedPattern.length-1);
  }
})
function makeSound(but)
{
  switch (but) {
    case "yellow":   var audio=new Audio("./sounds/yellow.mp3");
                audio.play();
                break;
    case "red":   var audio=new Audio("./sounds/red.mp3");
                            audio.play();
                            break;
    case "green":   var audio=new Audio("./sounds/green.mp3");
                audio.play();
                break;
    case "blue":   var audio=new Audio("./sounds/blue.mp3");
                            audio.play();
                            break;

    default: console.log("No sound");

  }
}
function makeAnimation(but) {

  var activebut=$("#"+but);
  activebut.addClass("pressed");
  setTimeout(function(){ activebut.removeClass("pressed"); },500);
}
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel])
  {

    if(currentLevel===(gamePattern.length-1))
    {
      setTimeout(function(){nextSequence();},1000);

      userClickedPattern=[];
    }
  }
  else {
    var audio=new Audio("./sounds/wrong.mp3");
                            audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){ $("body").removeClass("game-over"); },200);
    $("h1").text("Game Over! Press A Key to Start Again");
   startOver();
  }

}
function startOver(){
  started=false;
  gamePattern=[];
  level=1;
  userClickedPattern=[];
}
