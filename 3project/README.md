# Animation Paws

###### Summary for this project 
###### Purpose: Showcase the animation as a creative UI feature in a portfolio.

**Link to work:** [Animation Paws](https://arduino731.github.io/JavaScript-Algorithms-and-Data-Structures/3project/)

1. Use flexbox → The parent container is in column layout, and child elements are justify-content: center.
2. Default margin-top = 0px → Moves down by 250px in increments.
3. Loop starts at 0 → We cycle 10 times (5 for each paw).
4. Each step alternates between left and right paws → Fades in/out and moves down.
5. Use setTimeout() for recursive animation calls (without blocking execution).

## Key Improvements:
+ Follows your flexbox structure → Ensures proper positioning.
+ Correctly alternates paws → Every even index (i % 2 === 0) moves left, and odd index moves right.
+ Recursive function with setTimeout() → No blocking execution.
+ Final animation step → Ensures both paws are visible at the end.

## Expected Behavior:
+ Starts at i = 0.
+ Alternates between left and right paws every 500ms.
+ Moves down by 25px on each step.
+ Stops after 10 iterations and shows both paws.


