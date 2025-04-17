# Auto Text and Background Effect

###### Summary for this project 

**Link to work:** [Auto Text and Background Effect](https://arduino731.github.io/JavaScript-Algorithms-and-Data-Structures/7project/)

# Main Functionalities
# ▶️ startBtn click event
Clears any ongoing loop (clearTimeout(timeoutId)).

Resets index (idx = 1).

Gets current input (inputValue = myInput.value).

Clears old text.

Starts writeText() loop.

`````
startBtn.addEventListener("click", function() {
  clearTimeout(timeoutId);
  idx = 1;
  inputValue = myInput.value;
  textEl.innerText = '';
  writeText();
});
`````

# 🔁 writeText() function
Displays a substring of input text up to the current index.

Increments index.

Recursively calls itself with setTimeout to simulate typing.

When complete, resets to loop from the beginning.

`````
function writeText() {
  textEl.innerText = inputValue.slice(0, idx);

  if (idx <= inputValue.length) {
    idx++;
  } else {
    idx = 1; // Restart loop
  }

  timeoutId = setTimeout(writeText, speed);
}
`````

# 🖱 speedEl input event
Dynamically updates speed using 300 / value.

Updates background color using HSL based on speed value.


`````
speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;

  const bgColor = `hsl(${e.target.value * 36}, 70%, 80%)`;
  document.body.style.backgroundColor = bgColor;
});

`````

# 📚 Data Structures & Concepts Used

|  Concept  |            How It's Used            |
| :-: | :----------------------------: | :-------: |
|Variables (let)| 	Store input values, speed, index, and timeout ID |
|String Methods| 	slice() is used to simulate typing behavior |
|Event Listeners| 	Respond to click and input events |
|Timeout Control| 	setTimeout for looping, clearTimeout to restart cleanly |
|HSL Color System| 	Dynamic background color based on speed value |
|DOM Manipulation| 	Update text, input, and styles based on user interaction |