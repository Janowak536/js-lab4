const canvas = document.querySelector('canvas');
let zipValue = document.getElementById('zip');
let numValue = document.getElementById('numberOfBalls');
const width = window.innerWidth;
const height = window.innerHeight;

document.getElementById("start").addEventListener("click", loop);
document.getElementById("reset").addEventListener("click",  reset);

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

class Ball{
    constructor(x,y,vx,vy,size,color){
        this.x = x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.size=size;
        this.color=color;
    }

    drawBall(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    updateBall(){
        if(this.x + this.size >= width||this.x - this.size <= 0){
            this.vx = -this.vx;
        }
        if(this.y + this.size >= height||this.y - this.size <= 0){
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
}

function random(min,max){
    canvas.width = width;
    canvas.height = height;
    const num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
}

let balls = [];
let counter=0;

function loop(){

    ctx.fillStyle = 'rgba(230,230,230,60)';
    ctx.fillRect(0,0,width,height);

    while(balls.length < numValue.value){
        let size = random(10,30);
        const ball = new Ball (random(size,width-size),random(size,height-size),random(-5,5),random(-5,5),size,`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`);
        balls.push(ball);
        counter +=numValue;
    }

    for(let i =0;i<balls.length;i++){
        balls[i].drawBall();
        balls[i].updateBall();
    }

    for (let i = 0; i < balls.length; i++) {
        for (let j = i+1; j < balls.length; j++) {
          const ballFrom = balls[i];
          const ballTo = balls[j];
          const distance = Math.sqrt(
            (ballFrom.x - ballTo.x) ** 2 + (ballFrom.y - ballTo.y) ** 2
          );
          
          if (distance < zipValue.value * canvas.width) {
            ctx.beginPath();
            ctx.moveTo(ballFrom.x, ballFrom.y);
            ctx.lineTo(ballTo.x, ballTo.y);
            ctx.stroke();
          }
        }
      }
    
    requestAnimationFrame(loop);  
}

function reset(){
    document.getElementById('numberOfBalls').value = 0;
    balls = [];
}
