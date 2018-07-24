// document.getElementById('');
// document.getElementById('');
// document.getElementById('');


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let snake_array=[];
let score_arr=[];
let food;
let nextS="right"; // snake starts moving
let score=0;
let cw=20;
let cx=10;
let cy=6;
let speed=500;

const startGame = () => {
    
    init();
    console.log("start game"); // not working... need fix it 
}

const init = () => {
    create_snake();
    if(typeof game_loop != "undefined") clearInterval(game_loop);
    game_loop = setInterval(paint_snake, speed); // increase specified intervals
}

const create_snake = () => {
    var len = 5;
    for(let i = len-1; i >= 0; i--){
        snake_array.push({x:i, y:0}); //(5) [x:4, x:3, x:2, x:1, x:0]
    }
    console.log(snake_array);
}

const paint_snake= () => {
    // color snake
    let sx = snake_array[0].x;
    let sy = snake_array[0].y;
    // console.log('snake_array for X', sx);
    if(nextS=="right") sx++;
    else if(nextS=="left") sx--;
    else if(nextS=="up") sy--;
    else if(nextS=="down") sy++;

    //////////////////////////////////////////////
    // if (sx==food.x && sy==food.y) {
    //     var tail={x:sx,y:sy};
    //     score++;
    //     create_food();
    //     oscore.html(score);
    // }else{
        var old_tail=snake_array.pop(); // .pop method able to remove last of array 
        console.log('old_tail', old_tail); // removed x:0 and planning to update x:5 as sx++
        clear_cell(old_tail.x,old_tail.y);
        old_tail.x=sx; //  x for tail to cover up every color in the beginning of an array
        old_tail.y=sy; //  y for tail to cover up every color in the beginning of an array
        console.log('new number', old_tail)
    // }
    snake_array.unshift(old_tail); // .unshift method able to add to the beginning of an array

    for (var i = 0; i < snake_array.length; i++) {
        var sa=snake_array[i];
        snake_cell(sa.x,sa.y);
    };



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
    ctx.fillRect(x*cx,y*cy,cx-1,cy-1); // fillRect(x, y, width, height)
}

function food_cell(x,y){
    ctx.fillStyle='yellow';
    ctx.fillRect(x*cx,y*cy,cx-1,cy-1);
}

function clear_cell(x,y){
    ctx.fillStyle='#444';
    ctx.fillRect(x*cx,y*cy,cx-1,cy-1); 
}

startGame();

