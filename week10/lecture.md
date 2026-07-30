# Week 10: Loops

## BMIS 263 -- Introduction to Programming

---

## Overview

Last week you taught your programs to make decisions. This week, you teach them to **repeat**. Loops let you execute a block of code multiple times without writing it out each time. Printing numbers 1 through 100? Without a loop, that is 100 lines of code. With a loop, it is 3.

Recall the Wi-Fi algorithm from Week 1: "If the connection fails, go back to step 6 and try again." That is a loop -- repeating steps based on a condition. This week, you write them in JavaScript.

By the end of this session, you will be able to:

- Write `for` loops for a known number of repetitions
- Write `while` loops for condition-based repetition
- Write `do...while` loops that execute at least once
- Avoid infinite loops
- Use `break` and `continue` to control loop execution

---

## 1. The `for` Loop

Use a `for` loop when you know **how many times** to repeat.

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Anatomy of a `for` Loop

```javascript
for (initialization; condition; update) {
    // code to repeat
}
```

| Part | What it does | Example |
|---|---|---|
| Initialization | Runs once before the loop starts. Usually creates a counter variable. | `let i = 1` |
| Condition | Checked before each iteration. If `true`, the loop body runs. If `false`, the loop stops. | `i <= 10` |
| Update | Runs after each iteration. Usually increments the counter. | `i++` |

### How It Executes

1. `let i = 1` -- create counter, set to 1
2. Is `i <= 10`? Yes (1 <= 10) -- run the body
3. `i++` -- increment i to 2
4. Is `i <= 10`? Yes (2 <= 10) -- run the body
5. `i++` -- increment i to 3
6. ... (repeats)
7. Is `i <= 10`? Yes (10 <= 10) -- run the body
8. `i++` -- increment i to 11
9. Is `i <= 10`? No (11 <= 10 is false) -- **stop**

### `i++` and `i--`

- `i++` is shorthand for `i = i + 1` (increment by 1)
- `i--` is shorthand for `i = i - 1` (decrement by 1)
- `i += 2` is shorthand for `i = i + 2` (increment by 2)

### Counting Down

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Prints: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

### Counting by Steps

```javascript
for (let i = 0; i <= 20; i += 5) {
    console.log(i);
}
// Prints: 0, 5, 10, 15, 20
```

---

## 2. The `while` Loop

Use a `while` loop when you do not know in advance how many times to repeat -- you just have a condition.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
// Prints: 1, 2, 3, 4, 5
```

Syntax:

```javascript
while (condition) {
    // code to repeat
}
```

The loop checks the condition **before** each iteration. If the condition is `false` from the start, the body never runs.

### When to Use `while` vs `for`

- **`for`**: when you know the number of iterations (counting from A to B).
- **`while`**: when you are repeating until some condition changes, and you do not know when that will be.

Example -- keep asking until the user enters "quit":

```javascript
let input = "";

while (input !== "quit") {
    input = prompt("Type a message (or 'quit' to stop):");
    console.log("You typed:", input);
}
console.log("Loop ended.");
```

---

## 3. The `do...while` Loop

A variant that runs the body **at least once**, then checks the condition:

```javascript
let number;

do {
    number = parseInt(prompt("Enter a number greater than 10:"));
} while (number <= 10);

alert(`You entered ${number}. Thank you.`);
```

The difference from `while`:
- `while` checks the condition **before** running the body (might never run).
- `do...while` runs the body **first**, then checks the condition (always runs at least once).

This is useful when you need to get at least one input from the user before deciding whether to repeat.

---

## 4. Infinite Loops

An infinite loop is a loop whose condition never becomes `false`. It runs forever (or until the browser crashes):

```javascript
// DO NOT RUN THIS
while (true) {
    console.log("This never stops.");
}
```

Common causes of accidental infinite loops:

1. **Forgetting the update:** The counter never changes, so the condition never becomes false.
   ```javascript
   let i = 1;
   while (i <= 10) {
       console.log(i);
       // Missing i++ -- i stays at 1 forever
   }
   ```

2. **Wrong condition:** The condition can never become false.
   ```javascript
   for (let i = 1; i >= 1; i++) {
       console.log(i);
       // i increases and is always >= 1 -- never stops
   }
   ```

If your browser freezes, it is probably an infinite loop. Close the tab (or force-quit the browser) and fix your condition or update statement.

---

## 5. `break` and `continue`

### `break`

Immediately exits the loop, regardless of the condition:

```javascript
for (let i = 1; i <= 100; i++) {
    if (i === 5) {
        break;    // stop the loop when i reaches 5
    }
    console.log(i);
}
// Prints: 1, 2, 3, 4
```

### `continue`

Skips the rest of the current iteration and moves to the next one:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;    // skip even numbers
    }
    console.log(i);
}
// Prints: 1, 3, 5, 7, 9
```

Use `break` and `continue` sparingly. They can make loop logic harder to follow. Often, you can achieve the same result by adjusting the loop condition or using `if/else` inside the body.

---

## 6. Practical Examples

### Print Numbers 1 to 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Sum of Numbers 1 to N

```javascript
let n = parseInt(prompt("Enter a number:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;    // or: sum += i;
}

alert(`The sum of numbers from 1 to ${n} is ${sum}.`);
```

### Multiplication Table

```javascript
let number = parseInt(prompt("Enter a number for its multiplication table:"));

for (let i = 1; i <= 12; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

### Find Even Numbers in a Range

```javascript
console.log("Even numbers from 1 to 20:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

---

## Key Terms

- **Loop** -- a control structure that repeats a block of code
- **`for` loop** -- repeats a known number of times, with an initializer, condition, and update
- **`while` loop** -- repeats as long as a condition is true; checks before each iteration
- **`do...while` loop** -- repeats as long as a condition is true; runs at least once
- **Iteration** -- one execution of the loop body
- **Counter variable** -- a variable (usually `i`) that tracks which iteration the loop is on
- **Infinite loop** -- a loop that never stops because its condition never becomes false
- **`break`** -- immediately exits the loop
- **`continue`** -- skips to the next iteration

---

## What Comes Next

Next week: **functions**. You have been writing all your code in one block. Functions let you package code into reusable, named pieces -- write it once, call it anywhere. Functions are how programs stay organized as they grow.
