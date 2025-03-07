const labels = document.querySelectorAll('.form-control label')
// console.log(labels);

labels.forEach(label=> {
    label.innerHTML = label.innerText
    .split('')
    // .reverse()
    // console.log(label)
    .map((letter, number)=> `<h1> ${letter} and number : ${number} </h1>`) 
    // .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // .join('')

    console.log(label.innerHTML)
})

.map show that each array in first argument and index in the second argument 

{/* <span style="transition-delay:0ms">E</span>,
<span style="transition-delay:50ms">m</span>,
<span style="transition-delay:100ms">a</span>,
<span style="transition-delay:150ms">i</span>,
<span style="transition-delay:200ms">l</span> */}

const numbers = [10, 20, 30];

const mappedArray = numbers.map((num, index) => {
    return `Value: ${num}, Index: ${index}`;
});

console.log(mappedArray);