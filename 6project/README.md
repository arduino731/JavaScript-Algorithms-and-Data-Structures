# 3D Boxes Grid with Numbers

###### Summary for this project 
###### Purpose: Showcase JavaScript code manages a to-do list.

**Link to work:** [3D Boxes Grid with Numbers](https://arduino731.github.io/JavaScript-Algorithms-and-Data-Structures/6project/)

This project demonstrates key JavaScript concepts by creating an interactive 4x4 grid of boxes with animated styles and numbered overlays. A button allows toggling transformations (like a 3D flip effect), and each box is paired with a number, which updates its style dynamically.

🧠 Key Concepts & Learning Outcomes
📦 DOM Manipulation
Use of document.createElement() to dynamically generate HTML elements.

Manipulating classes via classList.add() and classList.toggle() to apply styles and transitions.

Appending elements (appendChild) to parent containers efficiently.

🧮 Algorithms / Logic
Nested for loops (i, j) simulate a 2D grid (matrix-like layout).

Calculating box numbers via simple formula: outputNumber = i * 4 + j + 1 (demonstrates how indexing works).

Mapping positions using backgroundPosition for image cropping or sprite sheet logic.

🧱 Data Structures
Though basic, this project conceptually uses a 2D array pattern (i, j looping) to represent grid data.

Encourages thinking in terms of layout structures and coordinate mapping.

🎨 CSS & Styling
Flexbox is used for layout: .boxes and .boxes2 allow wrapping elements in rows and columns.

Transitions and transformations (transform: rotateY, rotateZ) offer interactive 3D effects.

Responsive changes are toggled via class changes (.big, .big2), simulating animation states.

🚀 Interactivity
Button click toggles transformations and scaling of both background (#boxes) and numbers (#numbers), showcasing basic event-driven programming.

Visually dynamic feedback teaches how styles and logic can work together.

✅ What You Built
A 4x4 dynamic grid that can rotate and scale.

Numbered overlay blocks that move in sync with background images.

A modular, reusable way of thinking about grid-based interfaces.