# Week 8: Input and Output

## BMIS 263 -- Introduction to Programming

---

## Overview

In Week 3, you built HTML forms -- the visual input mechanism. In Week 7, you learned to store data in variables. This week, you connect the two: you will collect input from the user with JavaScript, store it in variables, process it, and display output. This completes the **input --> processing --> output** cycle that defines every useful program.

By the end of this session, you will be able to:

- Use `prompt()` to get input from the user
- Store user input in variables
- Process input (arithmetic, string operations)
- Display output using `alert()`, `document.write()`, and `console.log()`
- Convert between strings and numbers

---

## 1. `prompt()` -- Getting Input

`prompt()` displays a popup box with a text field where the user can type a response:

```javascript
let name = prompt("What is your name?");
```

When this runs:
1. A popup appears with the message "What is your name?" and a text input field.
2. The user types something and clicks OK (or presses Enter).
3. Whatever the user typed is stored in the variable `name` as a **string**.
4. If the user clicks Cancel, the value is `null`.

### Everything from prompt() Is a String

This is critical. Even if the user types a number, `prompt()` returns it as a string:

```javascript
let age = prompt("How old are you?");
console.log(typeof age);    // "string", even if the user typed 21
```

If you need to do math with the input, you must **convert** it to a number. We will cover this in section 4.

---

## 2. Combining Input and Output

Here is the simplest useful program -- ask for a name and greet the user:

```javascript
let name = prompt("What is your name?");
alert("Hello, " + name + "! Welcome to BMIS 263.");
```

Or, using a template literal:

```javascript
let name = prompt("What is your name?");
alert(`Hello, ${name}! Welcome to BMIS 263.`);
```

This is the input-processing-output pattern:
- **Input:** `prompt()` collects the name
- **Processing:** the template literal builds the greeting string
- **Output:** `alert()` displays the greeting

---

## 3. Multiple Inputs

You can call `prompt()` multiple times to collect several pieces of data:

```javascript
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let course = prompt("What course are you studying?");

alert(`Welcome, ${firstName} ${lastName}! You are studying ${course}.`);
```

Each `prompt()` appears one after the other. The user must respond to each one before the next appears.

---

## 4. Converting Strings to Numbers

Since `prompt()` always returns a string, you need to convert the input when you want to do arithmetic.

### `parseInt()` -- Convert to Integer

```javascript
let ageText = prompt("Enter your age:");
let age = parseInt(ageText);
console.log(typeof age);    // "number"
```

Or, in one step:

```javascript
let age = parseInt(prompt("Enter your age:"));
```

### `parseFloat()` -- Convert to Decimal

```javascript
let price = parseFloat(prompt("Enter the price:"));
console.log(price);         // e.g., 99.99
console.log(typeof price);  // "number"
```

### `Number()` -- General Conversion

```javascript
let value = Number(prompt("Enter a number:"));
```

### What Happens with Invalid Input?

If the user types something that cannot be converted to a number:

```javascript
let result = parseInt("hello");
console.log(result);    // NaN (Not a Number)
```

`NaN` is a special value that means "this was supposed to be a number, but the conversion failed." Any arithmetic with `NaN` produces `NaN`:

```javascript
console.log(NaN + 5);    // NaN
console.log(NaN * 10);   // NaN
```

You can check for `NaN` using `isNaN()`:

```javascript
let input = parseInt(prompt("Enter a number:"));
if (isNaN(input)) {
    alert("That is not a valid number.");
}
```

We will cover `if` statements properly in Week 9, but this preview shows why type conversion matters.

---

## 5. Arithmetic with User Input

A simple calculator that adds two numbers:

```javascript
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;

alert(`${num1} + ${num2} = ${sum}`);
```

Without `parseFloat()`, the `+` operator would concatenate the strings instead of adding the numbers. This is the string + number trap from Week 7, and it is the most common bug in input-based programs.

### Example: Calculate the Area of a Rectangle

```javascript
let length = parseFloat(prompt("Enter the length:"));
let width = parseFloat(prompt("Enter the width:"));
let area = length * width;

alert(`The area of the rectangle is ${area} square units.`);
console.log(`Length: ${length}, Width: ${width}, Area: ${area}`);
```

---

## 6. Displaying Output on the Page

So far, we have used `alert()` for output. But a real web page should display results as part of the page content, not in popup boxes. Here is a preview of how to do that (we will cover this properly in Week 12):

```html
<p id="result"></p>

<script>
    let name = prompt("What is your name?");
    document.getElementById("result").textContent = `Hello, ${name}!`;
</script>
```

This finds the `<p>` element with `id="result"` and sets its text content to the greeting. The result appears on the page itself, not in a popup. This is a taste of **DOM manipulation**, which we will study in detail in Week 12.

---

## 7. Putting It All Together

Here is a complete program that collects student information, processes it, and displays the results:

```javascript
// Collect input
let name = prompt("Enter your full name:");
let age = parseInt(prompt("Enter your age:"));
let score1 = parseFloat(prompt("Enter your first test score:"));
let score2 = parseFloat(prompt("Enter your second test score:"));

// Process: calculate average
let average = (score1 + score2) / 2;

// Output: display results
alert(`Student: ${name}
Age: ${age}
Test 1: ${score1}
Test 2: ${score2}
Average: ${average}`);

console.log("Student record processed successfully.");
```

Notice:
- `parseInt()` for age (whole number)
- `parseFloat()` for scores (might have decimals)
- Arithmetic in the processing step
- Template literal for formatted output
- `console.log()` for developer-facing feedback

---

## Key Terms

- **`prompt()`** -- displays a dialog box that asks the user for text input; returns the input as a string
- **`parseInt()`** -- converts a string to an integer (whole number)
- **`parseFloat()`** -- converts a string to a floating-point number (decimal)
- **`NaN`** -- "Not a Number"; the result of a failed number conversion
- **`isNaN()`** -- a function that returns `true` if the value is NaN, `false` otherwise
- **Type conversion** -- changing a value from one data type to another (e.g., string to number)

---

## What Comes Next

Next week, we add **decision-making** to our programs. Instead of always doing the same thing regardless of input, your programs will be able to choose different actions based on conditions -- "if the score is above 50, the student passes; otherwise, the student fails." This is conditional logic, and it is one of the most fundamental concepts in all of programming.
