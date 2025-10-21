// Popcorn Hack exercises from the notebook
// ===============================
// Popcorn Hack 1: Initialize Snake
// ===============================
// 1 head, 3 body, 1 tail
let snake = ["H", "B", "B", "B", "T"];

console.log("Starting snake:", snake);


// ===============================
// Popcorn Hack 2: Growing the Snake
// ===============================
// Add 2 tails to the end
snake.push("T");
snake.push("T");

console.log("Snake after eating:", snake);


// ===============================
// Popcorn Hack 3: Snake Loses a Tail
// ===============================
// Remove the last 2 elements
snake.pop();
snake.pop();

console.log("Snake after losing tails:", snake);


// ===============================
// Popcorn Hack 4: Combining It All
// ===============================
// Step 1: Add 2 new heads to the start
snake.unshift("H");
snake.unshift("H");
// Step 2: Remove 1 head from the start
snake.shift();

console.log("Snake after moving:", snake);
console.log("New first head is:", snake[0]);



// ===============================
// Check Your Understanding
// ===============================
// Start fresh with a new snake
snake = ["H", "B", "B", "T"];

// 1. Add a head at the START (unshift)
snake.unshift("H");
// 2. Add a tail at the END (push)
snake.push("T");
// 3. Remove the 3rd element (index 2) with splice()
snake.splice(2, 1);

console.log("Final snake:", snake);
console.log("First head:", snake[0]);
console.log("Last element:", snake[snake.length - 1]);
