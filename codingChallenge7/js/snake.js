// document.getElementById('');
// document.getElementById('');
// document.getElementById('');


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let snake_array=[];
let score_arr=[];
let food;
let nextS="right"; // start moving snake
let score=0;
let cw=20;
let cx=10;
let cy=6;
let speed=200;

const startGame = () => {
    console.log("start game");

    init();
}

const init = () => {
    create_snake();
}

const create_snake = () => {
    var lengthSnake = 5;
    for(let i = lengthSnake-1; i >= 0; i--){
        snake_array.push[i];
    }
    console.log(lengthSnake);
}

const paint_snake= () => {
    // color snake
}

document.addEventListener('keydown', function(e){
    var key=e.which;
    // alert(e.keyCode); 
    if     (key=="37"&&nextS!="right")  nextS="left";
    else if(key=="38"&&nextS!="down")   nextS="up";
    else if(key=="39"&&nextS!="left")   nextS="right";
    else if(key=="40"&&nextS!="up")     nextS="down";
})

function snake_cell(x,y){
    ctx.fillStyle='white';
    ctx.fillRect(x*cx,y*cy,cx-1,cy-1);
}

startGame();

