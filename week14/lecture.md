# Week 14: Project Development

## BMIS 263 -- Introduction to Programming

---

## Overview

This is the week where everything comes together. Over the past 13 weeks, you have learned:

- **Weeks 1:** Programming concepts, algorithms, pseudocode
- **Weeks 2-3:** HTML structure and forms
- **Weeks 4-5:** CSS styling and layout
- **Weeks 6-8:** JavaScript basics, variables, input/output
- **Weeks 9-10:** Conditionals and loops
- **Weeks 11:** Functions
- **Weeks 12-13:** DOM manipulation and events

This week, you apply all of it to build a complete, working web application: a **calculator**. We will follow the software development process -- planning, designing, coding, and testing -- just as professional developers do.

---

## 1. The Software Development Process

Before writing a single line of code, good developers plan. The process has four stages:

### Stage 1: Planning

Define what the program should do:
- What are the inputs? (numbers and operators)
- What are the outputs? (the result of the calculation)
- What features does it need? (addition, subtraction, multiplication, division, clear, display)
- What should happen when something goes wrong? (division by zero, invalid input)

### Stage 2: Design

Decide how the program will look and how the code will be organized:
- Sketch the user interface (what buttons, what layout)
- Plan the HTML structure
- Plan the CSS styling
- Plan the JavaScript logic (which functions, which events)

### Stage 3: Implementation (Coding)

Write the code, starting with the structure (HTML), then appearance (CSS), then behaviour (JavaScript).

### Stage 4: Testing

Try to break your own program:
- Test normal operations (2 + 3 = 5)
- Test edge cases (what happens if you press "=" with no input?)
- Test error conditions (what is 5 / 0?)
- Fix any bugs you find

---

## 2. Planning the Calculator

### Features

Our calculator will support:
- Display showing the current input and result
- Number buttons (0-9)
- Decimal point button
- Operator buttons (+, -, x, /)
- Equals button (=)
- Clear button (C)
- Delete/backspace button

### Input/Output Analysis

| Input | Output |
|---|---|
| User clicks number buttons | Numbers appear on the display |
| User clicks an operator | The current number is stored, display prepares for the next number |
| User clicks "=" | The calculation is performed and the result appears on the display |
| User clicks "C" | The display is cleared and all stored values are reset |

### Algorithm (Pseudocode)

```
1. Initialize: currentInput = "", previousInput = "", operator = ""
2. When a number button is clicked:
     Append the digit to currentInput
     Update the display to show currentInput
3. When an operator button is clicked:
     Store currentInput as previousInput
     Store the selected operator
     Clear currentInput for the next number
4. When "=" is clicked:
     Perform the operation: previousInput [operator] currentInput
     Display the result
     Store the result as previousInput (for chaining calculations)
5. When "C" is clicked:
     Reset currentInput, previousInput, and operator to ""
     Clear the display
```

---

## 3. Building the Calculator: Step by Step

### Step 1: HTML Structure

The calculator needs three main parts:
- A display area (shows numbers and results)
- A button grid (numbers, operators, and controls)
- A container to hold everything

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator - BMIS 263</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>

    <div class="calculator">
        <!-- Display -->
        <div class="display" id="display">0</div>

        <!-- Button grid -->
        <div class="buttons">
            <button class="btn control" data-action="clear">C</button>
            <button class="btn control" data-action="delete">DEL</button>
            <button class="btn operator" data-action="operator" data-value="%">%</button>
            <button class="btn operator" data-action="operator" data-value="/">/</button>

            <button class="btn number" data-value="7">7</button>
            <button class="btn number" data-value="8">8</button>
            <button class="btn number" data-value="9">9</button>
            <button class="btn operator" data-action="operator" data-value="*">x</button>

            <button class="btn number" data-value="4">4</button>
            <button class="btn number" data-value="5">5</button>
            <button class="btn number" data-value="6">6</button>
            <button class="btn operator" data-action="operator" data-value="-">-</button>

            <button class="btn number" data-value="1">1</button>
            <button class="btn number" data-value="2">2</button>
            <button class="btn number" data-value="3">3</button>
            <button class="btn operator" data-action="operator" data-value="+">+</button>

            <button class="btn number zero" data-value="0">0</button>
            <button class="btn number" data-value=".">.</button>
            <button class="btn equals" data-action="equals">=</button>
        </div>
    </div>

    <script src="calculator.js"></script>
</body>
</html>
```

**Key design decisions:**
- `data-value` attributes store the value each button represents
- `data-action` attributes identify special buttons (clear, delete, operator, equals)
- CSS classes (`number`, `operator`, `control`, `equals`) enable targeted styling
- The zero button has an extra class (`zero`) for spanning two columns

### Step 2: CSS Styling

```css
/* calculator.css */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1a1a2e;
    font-family: 'Segoe UI', Arial, sans-serif;
}

.calculator {
    background-color: #16213e;
    border-radius: 16px;
    padding: 20px;
    width: 320px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.display {
    background-color: #0f3460;
    color: white;
    font-size: 32px;
    text-align: right;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    min-height: 70px;
    word-wrap: break-word;
    overflow: hidden;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.btn {
    padding: 18px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn.number {
    background-color: #1a1a4e;
    color: white;
}

.btn.number:hover {
    background-color: #2a2a6e;
}

.btn.operator {
    background-color: #e94560;
    color: white;
}

.btn.operator:hover {
    background-color: #c73650;
}

.btn.control {
    background-color: #533483;
    color: white;
}

.btn.control:hover {
    background-color: #6a45a0;
}

.btn.equals {
    background-color: #2ecc71;
    color: white;
}

.btn.equals:hover {
    background-color: #27ae60;
}

.btn.zero {
    grid-column: span 2;
}
```

**What this uses from the course:**
- Box model and `box-sizing` (Week 5)
- Flexbox for centring the calculator on the page (Week 5)
- CSS Grid for the button layout (a progression from Flexbox)
- Classes and selectors (Week 4)
- Hover effects (Week 4)
- Transitions for smooth visual feedback

### Step 3: JavaScript Logic

```javascript
// calculator.js

// ---- STATE VARIABLES ----
// These track what the user has entered and what operation to perform

let currentInput = "0";     // what the user is currently typing
let previousInput = "";     // the first number (stored when an operator is pressed)
let operator = "";          // the selected operator (+, -, *, /)
let shouldResetDisplay = false;  // flag: should the next digit replace the display?

// ---- DOM REFERENCE ----
const display = document.getElementById("display");

// ---- UPDATE DISPLAY ----
function updateDisplay() {
    display.textContent = currentInput;
}

// ---- HANDLE NUMBER INPUT ----
function inputNumber(value) {
    // If the display should be reset (after pressing an operator or equals),
    // start a new number instead of appending
    if (shouldResetDisplay) {
        currentInput = value;
        shouldResetDisplay = false;
    } else {
        // Replace the initial "0" unless it is a decimal
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else {
            // Prevent multiple decimal points
            if (value === "." && currentInput.includes(".")) {
                return;
            }
            currentInput = currentInput + value;
        }
    }
    updateDisplay();
}

// ---- HANDLE OPERATOR INPUT ----
function inputOperator(op) {
    // If there is already a pending operation, calculate it first
    // This enables chaining: 5 + 3 + 2 = 10
    if (previousInput !== "" && !shouldResetDisplay) {
        calculate();
    }

    previousInput = currentInput;
    operator = op;
    shouldResetDisplay = true;
}

// ---- PERFORM CALCULATION ----
function calculate() {
    if (previousInput === "" || operator === "") {
        return;     // nothing to calculate
    }

    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    let result;

    // Use a conditional to determine which operation to perform
    if (operator === "+") {
        result = prev + curr;
    } else if (operator === "-") {
        result = prev - curr;
    } else if (operator === "*") {
        result = prev * curr;
    } else if (operator === "/") {
        if (curr === 0) {
            currentInput = "Error";
            previousInput = "";
            operator = "";
            shouldResetDisplay = true;
            updateDisplay();
            return;
        }
        result = prev / curr;
    } else if (operator === "%") {
        result = prev % curr;
    }

    // Handle floating-point precision (e.g., 0.1 + 0.2 = 0.30000000000000004)
    currentInput = parseFloat(result.toFixed(10)).toString();
    previousInput = currentInput;   // store result for chaining
    operator = "";
    shouldResetDisplay = true;
    updateDisplay();
}

// ---- CLEAR ----
function clearCalculator() {
    currentInput = "0";
    previousInput = "";
    operator = "";
    shouldResetDisplay = false;
    updateDisplay();
}

// ---- DELETE LAST DIGIT ----
function deleteLast() {
    if (currentInput.length === 1 || currentInput === "Error") {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// ---- EVENT LISTENERS ----
// Use querySelectorAll to select all buttons and add a single listener

const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let action = this.getAttribute("data-action");
        let value = this.getAttribute("data-value");

        if (this.classList.contains("number")) {
            inputNumber(value);
        } else if (action === "operator") {
            inputOperator(value);
        } else if (action === "equals") {
            calculate();
        } else if (action === "clear") {
            clearCalculator();
        } else if (action === "delete") {
            deleteLast();
        }
    });
}

// ---- KEYBOARD SUPPORT (BONUS) ----
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (key >= "0" && key <= "9" || key === ".") {
        inputNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        inputOperator(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearCalculator();
    }
});
```

---

## 4. What Each Part Uses from the Course

| Course Topic | Where It Appears in the Calculator |
|---|---|
| Week 1: Algorithms | The pseudocode plan in section 2 |
| Week 2: HTML structure | The calculator's HTML skeleton |
| Week 3: Forms / input concepts | Button inputs, data attributes |
| Week 4: CSS basics | Colours, fonts, borders, border-radius |
| Week 5: CSS layout | Grid layout for buttons, Flexbox for centring |
| Week 6: JavaScript basics | Script file, console.log for debugging |
| Week 7: Variables and data types | State variables (currentInput, operator, etc.) |
| Week 8: Input/output | parseFloat for number conversion |
| Week 9: Conditionals | if/else for operation selection and error handling |
| Week 10: Loops | for loop over all buttons to attach event listeners |
| Week 11: Functions | Each piece of logic is its own function |
| Week 12: DOM manipulation | getElementById, textContent, classList |
| Week 13: Events | addEventListener for clicks and keyboard |

---

## 5. Testing Your Calculator

Test these cases before submitting:

| Test Case | Expected Result |
|---|---|
| 2 + 3 = | 5 |
| 10 - 4 = | 6 |
| 6 x 7 = | 42 |
| 20 / 4 = | 5 |
| 5 / 0 = | Error |
| 0.1 + 0.2 = | 0.3 (not 0.30000000000000004) |
| Press C | Display resets to 0 |
| 5 + 3 + 2 = | 10 (chaining works) |
| Press DEL | Last digit removed |
| Multiple decimal points | Only one allowed per number |

---

## Key Terms

- **Planning** -- defining what the program should do before writing code
- **Design** -- deciding how the program will look and how the code will be organized
- **Implementation** -- writing the actual code
- **Testing** -- verifying the program works correctly with various inputs
- **Edge case** -- an unusual or extreme input that might cause unexpected behaviour
- **State variable** -- a variable that tracks the current status of the program (e.g., what number is being entered, which operator was selected)

---

## What Comes Next

Next week is your **project presentation**. You will present your calculator (or chosen project) to the class, explain your code, and demonstrate how it works. You will also write a short documentation document explaining your design decisions.
