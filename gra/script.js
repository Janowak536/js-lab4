let ball = document.querySelector('#ball');
let board = document.querySelector('#board');
let position = document.querySelector('#position');
let hole = document.querySelector('.hole');
let btn = document.getElementsByClassName('btn');
let x;
let y;
let time;
let result;
//game works only in 722x514

let posX = board.clientWidth - ball.clientWidth;
let posY = board.clientHeight - ball.clientHeight;

function Orientation(e) {
    time = new Date();

    x = e.beta;
    y = e.gamma;

    x += 50;
    y += 90;

    x < 0 ? (x = 2) : x = x;
    y < 0 ? (y = 2) : y = y;
    
    x > 92 ? (x = 92) : x;
    y > 183 ? (y = 183) : y;

    ball.style.top  = (posX*x/90 -10) + "px";
    ball.style.left = (posY*y/180 - 10) + "px";   
}

window.addEventListener('deviceorientation', function(event) {
  var gamma = event.gamma; 
  var beta = event.beta; 
  checkIfIsInHole(gamma,beta);
  checkIfTouchRed(gamma,beta);
});


function checkIfIsInHole(gamma, beta){
    if (gamma <= -48 && gamma >= -57 && beta <= 0 && beta >= -4){
        win();
    }
}


function checkIfTouchRed(gamma,beta)
{
    if(gamma <= -4 && gamma >= -11 && beta <= 22 && beta >= 18) 
        lost();
    else if(gamma <= -70 && gamma >= -75 && beta <= -28 && beta >= -30)
        lost();
    else if(gamma <= -76 && gamma >= -81 && beta <= -3 && beta >= -6)    
        lost();
    }

function lost(){
    board.style.background = ("red");
}
function win(){
    board.style.background = ("green");
}
function startNew(){
    board.style.background = ("#F4F2F3");
    ball.beta=0;
}
window.addEventListener('deviceorientation', Orientation)