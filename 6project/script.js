const boxesContainer = document.getElementById('boxes')
const numberContainer = document.getElementById('numbers')
const btn = document.getElementById('btn')

btn.addEventListener("click", ()=> boxesContainer.classList.toggle('big'))

function createBoxes(){
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            const box = document.createElement('div')
            const number = document.createElement('div')
            box.classList.add('box')
            number.classList.add('box2')
            // Optional: Calculate a number to display (like a counter)
            const outputNumber = i * 4 + j + 1; // 1 to 16
            number.textContent = outputNumber;

            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            number.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

            boxesContainer.appendChild(box)
            numberContainer.appendChild(number)
        }
    }
}

createBoxes()
