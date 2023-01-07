const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const first = document.getElementById("first");
let counter = 0;
btn1.addEventListener('click',function(){
first.style.marginLeft = "0";
counter =0;
});
btn2.addEventListener('click',function(){
first.style.marginLeft = "-20%";
counter=20;
});
btn3.addEventListener('click',function(){
first.style.marginLeft = "-40%";
counter=40;
});
btn4.addEventListener('click',function(){
first.style.marginLeft = "-60%";
counter=60;
});


setInterval(function () {
    first.style.marginLeft = `-${counter}%`;
    counter += 20;
    if (counter >60) {
        counter = 0;
    } 
}, 5000);