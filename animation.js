
function stars(){
  for(let i = 0; i < 200; i++){
    let star = '<div class = "star" style = "animation:twinkle '+((Math.random()*4)+4)+'s infinite; top:' +Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $("body").append(star);
  }
}

function horizons(){
  let container = '<div class = "container"></div>';
  $("body").append(container);
  let count = 3;
  for(let i = 0; i < .9; i+=.1){
    let horizon = '<div class = "horizon h" style = "bottom:' +(50-(100**i))+'%;"></div>';
    $("body").append(horizon);
  }
  for(let j=8;j<90; j+=10){
    let vert1 = '<div class = "horizon v" style = "transform: rotate( '+j +'deg); transform-origin: top center;"></div>';
    let vert2 = '<div class = "horizon v" style = "transform: rotate( '+(-j) +'deg); transform-origin: top center;"></div>';
    count--;
    $(".container").append(vert1);
    $(".container").append(vert2);
  }
}

stars();

/*left: '+((($(window).width()/5.5)*count)-200)+'px;*/
/*right: '+((($(window).width()/5.5)*count)-200)+'px;*/
