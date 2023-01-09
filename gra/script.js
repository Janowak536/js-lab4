let ball = document.querySelector('#ball');
let board = document.querySelector('#board');
let position = document.querySelector('#position');
let hole = document.querySelector('.hole');
let btn = document.getElementsByClassName('btn');
let scoreElement = document.getElementById('points');
let x;
let y;
let time;
let result;
let score=0;
let prevColour = "F4F2F3";
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
  makeScreenWhite(gamma,beta);
});

function displayScore(point) {
    scoreElement.innerHTML = point;
} 

function checkIfIsInHole(gamma, beta){
    if (gamma <= -36 && gamma >= -49 && beta <= 11 && beta >= 6){
        win();
    }
}

function increaseScore() {
    score++;
    displayScore(score);
  }

function makeScreenWhite(gamma,beta){
    if(!((gamma <= -73 && gamma >= -78 && beta <= 8 && beta >= 4) ||
    (gamma <= -65 && gamma >= -72 && beta <= -16 && beta >= -19)||
    (gamma <= -3 && gamma >= -11 && beta <= 32 && beta >= 29) ||
    (gamma <= -36 && gamma >= -49 && beta <= 11 && beta >= 6))){
        board.style.background = ("#F4F2F3");
        prevColour ="F4F2F3"
    }
}

function checkIfTouchRed(gamma,beta)
{
    if(gamma <= -73 && gamma >= -78 && beta <= 8 && beta >= 4) 
        lost();
    else if(gamma <= -65 && gamma >= -72 && beta <= -16 && beta >= -19)
        lost();
    else if(gamma <= -3 && gamma >= -11 && beta <= 32 && beta >= 29)    
        lost();
}

function lost(){
    board.style.background = ("red");
    prevColour = "red";
}
function win(){
    board.style.background = ("green");
    if ( prevColour === "F4F2F3") {
        increaseScore();
    }
    prevColour = "green";
}
function startNew(){
    board.style.background = ("#F4F2F3");
    score=0;
    displayScore(score);
    setTimeout(resetScore, 60000);
}

function resetScore() {
    score = 0;
    displayScore(score);
}
setTimeout(resetScore, 60000);
window.addEventListener('deviceorientation', Orientation)