function play(color){
  let red = new Audio("sounds/red.mp3");
  let green = new Audio("sounds/green.mp3");
  let blue = new Audio("sounds/blue.mp3");
  let yellow = new Audio("sounds/yellow.mp3");
  let wrong = new Audio("sounds/wrong.mp3");

  switch(color){
    case 'r':
    red.play();
    break;

    case 'g':
    green.play();
    break;

    case 'b':
    blue.play();
    break;

    case 'y':
    yellow.play();
    break;

    case 'w':
    wrong.play();
    break;


    default:
    return alert("There was a hiccup...");
    break;
  }
}
