# Collision Game

This is a simple game created using Paper.js library in JavaScript. The objective of the game is to avoid collision with two types of enemy rectangles while collecting as many points as possible.

## How to Play
- Use the left and right arrow keys to move the player rectangle.
- Avoid collision with the blue and green enemy rectangles.
- Each time the player avoids collision, the score increases by one.
- The game is over when the player loses all three lives.
- Click the "Play Again" button to start a new game.

## How to Run
- Clone this repository or download the code as a ZIP file.
- Open the ```index.html``` file in a web browser.
- The game should start automatically.

## Code Explanation
- ```canvas``` element is created with a size of 600x480 and Paper.js is initialized to work with it.
- The game variables like score, lives, and gameover are defined.
- Player rectangle and two enemy rectangles are created with different colors. You can create more definitely!
- Keydown event handler is added to move the player rectangle left and right using ```Arrow Keys``` ⬅️ ➡️
- Function ```detectCollisions()``` checks for collision between player and enemies and updates the game variables accordingly.
- Function ```update()``` updates the game variables and redraws the screen.
- Paper.js ```onFrame``` event is used to animate the game by repeatedly calling the ```update()``` function.

## Tools and Technologies
- Paper.js: http://paperjs.org/about/
- CDN UNPKG Paper.js: https://unpkg.com/paper@0.12.11/dist/paper-full.min.js
- Replit ❤️ (for Prototyping): https://replit.com/
