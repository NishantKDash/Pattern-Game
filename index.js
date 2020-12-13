
var button_colours=["red","blue","green","yellow"];
var user_clickedPattern=[];
var game_pattern=[];
var started=false;
var level=0;
$(document).on("keydown",function(){if(!started){$("#level-title").text("Level "+level);nextSequence();started=true;}});

$(".btn").on("click",function(){var userchosencolour=$(this).attr("id"); user_clickedPattern.push(userchosencolour);play_sound(userchosencolour);animate_press(userchosencolour);check_answer(user_clickedPattern.length-1) });
function check_answer(currentLevel)
{
if(game_pattern[currentLevel]===user_clickedPattern[currentLevel])
{console.log("success");
if(game_pattern.length==user_clickedPattern.length)
{setTimeout(function(){nextSequence();},1000);}
}
else{console.log("wrong");
var audio = new Audio("sounds/wrong.mp3");
audio.play();
game_over();
start_over();

}

}

function nextSequence(){
  user_clickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);

  var rand1=Math.floor(Math.random()*4);
  var randomchosencolour=button_colours[rand1];
  game_pattern.push(randomchosencolour);
  $("#" + randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
  play_sound(randomchosencolour);



}
function play_sound(text){var audio = new Audio("sounds/" + text + ".mp3");
audio.play();};
function animate_press(text1){$("#"+text1).addClass("pressed");
setTimeout(function(){$("#"+text1).removeClass("pressed");},100);

}
function game_over()
{
  $("#level-title").text("GAME OVER! Press A Key to Start");
$("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");},200);
}
function start_over()
{
level=0
game_pattern=[];
started=false;
}
