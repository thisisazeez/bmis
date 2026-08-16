# Week 11: Functions

## BMIS 263 -- Introduction to Programming

---

## Overview

So far, all your code runs from top to bottom in a single block. As programs get longer, this becomes a problem: repeated code, hard-to-find bugs, and logic that is difficult to follow. **Functions** solve this.

A function is a reusable, named block of code that performs a specific task. You have already been using functions without realizing it: `alert()`, `console.log()`, `prompt()`, `parseInt()` -- these are all functions built into JavaScript. This week, you learn to write your own.

By the end of this session, you will be able to:

- Define functions using the `function` keyword
- Use parameters to pass data into a function
- Use `return` to send data back from a function
- Understand variable scope (local vs. global)
- Explain why functions make programs better

---

## 1. What Is a Function?

A function is a **named, reusable block of code** that performs a specific task. Think of it as a recipe with a name: you define the steps once, then you can use that recipe whenever you need it by calling its name.

```javascript
// Define the function
function greet() {
    console.log("Hello, welcome to BMIS 263!");
}

// Call (use) the function
greet();    // prints: Hello, welcome to BMIS 263!
greet();    // prints it again -- reusable
```

### Defining vs. Calling

- **Defining** a function creates it. The code inside does **not** run yet.
- **Calling** (or invoking) a function runs its code. You call a function by writing its name followed by parentheses: `greet()`.

This is an important distinction. You can define a function at the top of your script and call it later, or call it multiple times.

---

## 2. Parameters and Arguments

Functions become powerful when they can accept **input**. Parameters are variables listed in the function definition that act as placeholders for the data you will provide when calling the function.

```javascript
// "name" is a parameter -- a placeholder
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// "Adamu" is an argument -- the actual value
greet("Adamu");      // Hello, Adamu!
greet("Fatima");     // Hello, Fatima!
greet("Ibrahim");    // Hello, Ibrahim!
```

### Multiple Parameters

```javascript
function introduce(name, age, course) {
    console.log(`My name is ${name}, I am ${age} years old, studying ${course}.`);
}

introduce("Adamu", 21, "BMIS 263");
introduce("Fatima", 20, "Computer Science");
```

### Parameters vs. Arguments

- **Parameter** -- the name used in the function definition (the placeholder): `name`, `age`
- **Argument** -- the actual value passed when calling the function: `"Adamu"`, `21`

The terms are often used interchangeably in casual conversation, but the distinction matters when reading documentation.

---

## 3. Return Values

A function can send a value **back** to the code that called it using the `return` keyword.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);    // 8
```

Without `return`, a function returns `undefined` by default:

```javascript
function sayHello() {
    console.log("Hello");
    // no return statement
}

let value = sayHello();
console.log(value);    // undefined
```

### Using Return Values

Return values let you use a function's output in expressions:

```javascript
function square(n) {
    return n * n;
}

console.log(square(4));              // 16
console.log(square(4) + square(3));  // 16 + 9 = 25

let area = square(5);
console.log(`Area: ${area}`);        // Area: 25
```

### `return` Stops Execution

Once `return` executes, the function stops immediately. Any code after `return` does not run:

```javascript
function check(score) {
    if (score >= 50) {
        return "Pass";
    }
    return "Fail";
    console.log("This line never runs");   // unreachable
}
```

---

## 4. Variable Scope

**Scope** determines where a variable can be accessed. JavaScript has two main scopes:

### Local Scope

Variables declared inside a function exist **only inside that function**:

```javascript
function myFunction() {
    let localVar = "I exist only inside this function";
    console.log(localVar);    // works
}

myFunction();
console.log(localVar);    // ERROR: localVar is not defined
```

### Global Scope

Variables declared outside any function are **global** -- accessible everywhere:

```javascript
let globalVar = "I exist everywhere";

function myFunction() {
    console.log(globalVar);    // works -- can access global variables
}

myFunction();
console.log(globalVar);    // also works
```

### Why Scope Matters

Local scope prevents functions from accidentally interfering with each other. If every variable were global, two functions using a variable called `count` would overwrite each other's values. Local scope keeps each function's data isolated.

**Best practice:** Keep variables as local as possible. Only use global variables when you genuinely need a value to be shared across your entire program.

---

## 5. Functions as Building Blocks

Functions let you break a complex problem into smaller, manageable pieces. Each piece has a name, a clear purpose, and can be tested independently.

```javascript
// A program that calculates a student's grade

function getScore() {
    return parseFloat(prompt("Enter your score (0-100):"));
}

function calculateGrade(score) {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    return "F";
}

function displayResult(score, grade) {
    alert(`Score: ${score}, Grade: ${grade}`);
}

// Main program -- reads like a summary of what happens
let score = getScore();
let grade = calculateGrade(score);
displayResult(score, grade);
```

Notice how the main program at the bottom reads almost like English. Each function has one job, one name, and is easy to understand on its own. This is what **maintainability** and **readability** (from Week 1's characteristics) look like in practice.

---

## 6. Function Expressions and Arrow Functions

There are other ways to define functions in JavaScript. You will encounter them in online resources:

### Function Expression

```javascript
const greet = function(name) {
    console.log(`Hello, ${name}!`);
};

greet("Adamu");
```

### Arrow Function (ES6)

A shorter syntax, common in modern JavaScript:

```javascript
const add = (a, b) => {
    return a + b;
};

// Even shorter for single-expression functions:
const multiply = (a, b) => a * b;

console.log(add(3, 4));        // 7
console.log(multiply(3, 4));   // 12
```

For this course, use the standard `function` keyword. Arrow functions are mentioned so you recognize them when you see them.

---

## Key Terms

- **Function** -- a reusable, named block of code that performs a specific task
- **Parameter** -- a variable in a function definition that acts as a placeholder for input
- **Argument** -- the actual value passed to a function when it is called
- **Return value** -- the value a function sends back to the code that called it
- **`return`** -- the keyword that sends a value back and stops the function
- **Scope** -- the area of code where a variable is accessible
- **Local variable** -- a variable declared inside a function; exists only within that function
- **Global variable** -- a variable declared outside all functions; accessible everywhere
- **Calling / Invoking** -- running a function by writing its name followed by parentheses

---

## What Comes Next

Next week: **DOM Manipulation**. You will learn to use JavaScript to find HTML elements on the page and change their content, styles, and attributes -- making your web pages truly interactive without relying on `alert()` and `prompt()`.
