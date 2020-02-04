let rep = 0;
let canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let area = canvas.height * canvas.width;


const secondary = "#EB427D";
const accent = "#F8C0D0";
const purple = "#330C2F";
const violet = "#2F1847";

// Neutral colors
const white = "#fff";

const colorset = [secondary];
const colors_amount = colorset.length;

const MAX_RADIUS = 16;
const MIN_RADIUS = 10;
const AREA_CONSTANT = 20000;
let TOTAL_AMOUNT = 1 // Total amount of circles to be shown in one animation
const SPEED = 1800 // millisconds
//if (TOTAL_AMOUNT > 2){
 //   TOTAL_AMOUNT = 2
//}

console.log(TOTAL_AMOUNT);

// console.log(canvas.width, canvas.height, canvas.height * canvas.width);

let c = canvas.getContext('2d');


function animationFrame() {
    for (let i = 0; i <= TOTAL_AMOUNT; i++) {
        drawCircle();
    }
}

function drawCircle() {
    c.beginPath();
    c.fillStyle = colorset[Math.floor(Math.random() * colors_amount)];
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.fill();
}


function animate() {
    console.log(rep);
    if (rep == 50) {
       c.clearRect(0, 0, canvas.width, canvas.height);
      rep = 0;
    }
    rep = rep + 1;
    
    animationFrame();
    setTimeout(function(){
        requestAnimationFrame(animate);
    }, SPEED);


}

animate();