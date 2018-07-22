const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const clearCanvas =() => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

const draw = ((img,x,y) => {
    ctx.drawImage(img,x,y);
})