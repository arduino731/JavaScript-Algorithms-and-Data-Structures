# Form Input Text Wave

###### Summary for this project 

**Link to work:** [Form Input Text Wave](https://arduino731.github.io/JavaScript-Algorithms-and-Data-Structures/2project/)

When using `querySelectorAll` with an element name and assigning `forEach`, you are selecting multiple elements of that type and iterating over them.

## How it Works
`document.querySelectorAll("element")` selects all matching elements and returns a `NodeList`.
`NodeList` supports `forEach`, allowing iteration over the selected elements.

# Example 1: Changing Text Color for All <p> Elements

`````
document.querySelectorAll("p").forEach(paragraph => {
    paragraph.style.color = "red";
});

`````

### What happens?

`querySelectorAll("p")` selects all `<p>` elements.
`forEach` loops through each `<p>` and changes its `color` to red.


# Example 1: Splitting a String into Characters
The `split()` method in JavaScript is used to divide a string into an array of substrings based on a specified separator.

`````
const word = "hello";
const letters = word.split(""); 
console.log(letters);

// ["h", "e", "l", "l", "o"]

`````

# Example 2: Splitting by a Space

`````
const text = "Hello World JavaScript";
const words = text.split(" "); 
console.log(words);

// ["Hello", "World", "JavaScript"]

`````
 The space `(" ")` is the separator, so the string is split into an array of words.

# Example 3: Splitting with a Regular Expression

`````
const sentence = "Hello   World!  JavaScript is fun.";
const words = sentence.split(/\s+/); 
console.log(words);

// ["Hello", "World!", "JavaScript", "is", "fun."]

`````

The regex (\s+) matches one or more spaces, so multiple spaces are treated as one.

+ Splits a string into an array based on a separator.
+ Supports regex for advanced splitting.
+ Optional limit to control the number of splits.

# .map method how it work? 

The `map()` method in JavaScript is used to create a new array by applying a function to each element of an existing array. It takes a callback function as its argument, and this function has two parameters:

1. First argument (name in your case) → The current element being processed.
2. Second argument (index) → The index of the current element in the array.

# Example 1: Creating an Array of Objects

`````
const products = ["Laptop", "Phone", "Tablet"];

const productObjects = products.map((name, index) => {
    return { id: index + 1, productName: name };
});

console.log(productObjects);
`````

`````
 [
  { id: 1, productName: "Laptop" },
  { id: 2, productName: "Phone" },
  { id: 3, productName: "Tablet" }
]
`````

+ map() transforms each element into an object with id and productName.