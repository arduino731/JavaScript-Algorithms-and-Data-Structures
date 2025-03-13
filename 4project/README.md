# Animated Countdown and Change Background

###### Summary for this project 
###### Purpose: Showcase the animation as a creative UI feature in a portfolio.

This code handles an animated countdown using CSS animations and JavaScript event listeners.

**Link to work:** [Animated Countdown and Change Background](https://arduino731.github.io/JavaScript-Algorithms-and-Data-Structures/4project/)

You need to use the `forEach` method to iterate over each element in the `span` collection. When working with the `length` property, subtract one to accommodate zero-based indexing, as arrays in JavaScript start at zero.

Within the `forEach` method, you receive each element as the first argument. Then, use the addEventListener() method on the event.target. The first argument for `addEventListener()` should be an HTML DOM event, such as "click", "keydown", or "mouseenter".

Let's say you decide to use an animation event. The relevant animation properties would include `animationName`. Additionally, I've added a new function that defines keyframe animations using `transform: translate()` to change the background color.

