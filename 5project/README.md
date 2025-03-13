# Push Method with UUID Generation

###### Summary for this project 
###### Purpose: Showcase JavaScript code manages a to-do list.

**Link to work:** [Push Method with UUID Generation](https://arduino731.github.io/JavaScript-Algorithms-and-Data-Structures/5project/)

Your JavaScript code manages a to-do list, adding new tasks while ensuring that users enter valid text. It includes the following key features:

1. Push Method with UUID Generation:

+ Each new to-do item gets a unique identifier using uuidv4(), a function that generates a 128-bit unique identifier.
+ New tasks are added to the todos array with push(), including an animated property for UI effects.

2. Error Handling with Animation:

+ If the input is empty, an error message appears (fadeIn effect).
+ Once the user adds a valid entry, the error message disappears (fadeOut effect with a delay of 600ms).

3. Form Submission Handling:

+ Prevents default form behavior using e.preventDefault().
+ Validates the input field before adding a new task.
+ Clears the input field after a successful submission.
+ Calls render(todos) to update the UI.