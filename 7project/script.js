const bodyEl = document.getElementById('body')
const myInput = document.getElementById('myInput')
const textEl = document.getElementById('text')
const startBtn = document.getElementById('start')
const speedEl = document.getElementById('speed')

let idx = 1;
let inputValue = '';
let timeoutId = null; 
let speed = 300 / speedEl.value

startBtn.addEventListener("click", function(){
    // console.log("start!")
    clearTimeout(timeoutId); // cancel any ongoing writeText loop
    idx = 1; // reset typing index
    inputValue = myInput.value; // grab the current input value
    textEl.innerText = '';
    writeText() // start typing
    
})


function writeText(){
    textEl.innerText = inputValue.slice(0, idx);
    
    if (idx <= inputValue.length) {
        idx++;
        timeoutId = setTimeout(writeText, speed); // loop continues
    }else {
        idx = 1; // Reset index to repeat from start
        timeoutId = setTimeout(writeText, speed); // Delay before repeat
    }
    
}
speedEl.addEventListener('input', (e) => {
    console.log(e)
    speed = 300 / e.target.value
    // Optional: change background color based on speed
    const bgColor = `hsl(${e.target.value * 36}, 70%, 80%)`; // smooth color change hsl(hue, saturation, lightness)
    document.body.style.backgroundColor = bgColor;
})









