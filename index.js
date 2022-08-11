var sequence = [];
var counter = 0;
var level = 0;
var mistake = false;
var playing  = false;
var waiting;

//decides on a random color (green, red, yellow, blue)
function random(){
  let num = Math.floor(Math.random()* (4-1+1)+1);

  switch(num){
    case 1:
    return 'g';
    break;

    case 2:
    return 'r';
    break;

    case 3:
    return 'y';
    break;

    case 4:
    return 'b';
    break;

    default:
    return alert("There was a hiccup...");
    break;
  }
}

//adds color to the sequence array
function addToSequence(){
  let color = random();
  sequence.push(color);
}

//updates the players current level and html text
function updateLevel(){
  level++;
  $(".flavor-text").text("Level " + level);
}

//displays the sequence to the player by flashing buttons, temporarily disables button interaction
function playSequence(){
  $("button").removeClass("active");
  //console.log(sequence);
  for(let i = 0; i < sequence.length; i++){
    let color = sequence[i];
    setTimeout(function(){
      buttonAnimation(color);},1500*i);
  }
  setTimeout(function(){$("button").addClass("active")},1500*sequence.length);
  //$("button").prop("enabled",false);
}


//button click handler
$("button").click(function(){
  let pressed = this.className[0];
  buttonAnimation(pressed);
  //console.log(pressed);
  compare(pressed);
});



//animates button by "flashing", adds and removes .pressed class which changes opacity to 100%


/**
 * buttonAnimation - adds presed class to target colored button to animate it
 *
 * @param  {Char} color description
 * @return {NULL}       description
 */
function buttonAnimation(color){
  $("."+color).addClass("pressed");
  play(color);
  setTimeout(function(){
    $("."+color).removeClass("pressed");
  },1000);
}

//compares user pressed button to the expected/correct button in sequence
//if the user misspresses, trigger gameOver
//if user completed the current sequence, continue playing game
//if user was correct but has not completed the current sequence, add 1 to the counter

function compare(pressed){
  let target = sequence[counter];
  if (pressed != target){
    mistake = true;
    gameOver();
  }else if(sequence.length-1 == counter){
    counter = 0;
    setTimeout(playGame,2000);
  }else{
    counter++;
  }
}


//things to do after GAME OVER is triggered
function gameOver(){
  $("button").removeClass("active");
  $("h1").text("Game Over");
  play('w');
  setTimeout(reset,3000);
  setTimeout(wait, 3000);
}

//resets variable to default states after gameOver
function reset(){
  $("button").removeClass("pressed");
  $("h1").text("Simon");
  sequence = [];
  counter = 0;
  level = 0;
  mistake = false;
  playing = false;
}

//allows user to start game by clicking anywhere on the window on the wait screen
$(document).click(function(){
  if (playing == false){
    playing = true;
    clearInterval(waiting);
    simon();
  }
});

//updates the player's current level, adds another color to the sequence, and calls the function to display the new sequence
function playGame(){
  updateLevel();
  addToSequence();
  setTimeout(playSequence, 2000);
}

// removes any .pressed classes that may be present after waiting animations, calls the playGame class to begin playing phase
function simon(){
  $("button").removeClass("pressed");
  horizons();
  setTimeout(playGame, 1500);
}

//puts game in waiting state with animation before the game begins
function wait(){
  $(".flavor-text").text("Click Anywhere to Start...");
  waiting = setInterval(function(){
    $("button").addClass("pressed");
    setTimeout(function(){
      $("button").removeClass("pressed");}
    ,1000)}
    , 2000);
}

//default action of page, waiting for user to start game
wait();
