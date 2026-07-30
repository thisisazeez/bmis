# Week 8 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## io-program.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input and Output - BMIS 263</title>
</head>
<body>

    <h1>Input and Output Programs</h1>
    <p>This page runs three programs using prompt() for input and alert() for output.</p>

    <script>
        // ============================================
        // PROGRAM 1: Personal Greeting
        // ============================================

        // Collect input from the user
        let firstName = prompt("Enter your first name:");
        let lastName = prompt("Enter your last name:");
        let favouriteColour = prompt("What is your favourite colour?");

        // Display greeting using a template literal
        alert(`Hello, ${firstName} ${lastName}! Your favourite colour is ${favouriteColour}.`);

        // ============================================
        // PROGRAM 2: Simple Calculator
        // ============================================

        // Collect two numbers from the user
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));

        // Calculate all four operations
        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;

        // Display results with clear formatting
        alert(`Calculator Results:
${num1} + ${num2} = ${sum}
${num1} - ${num2} = ${difference}
${num1} * ${num2} = ${product}
${num1} / ${num2} = ${quotient}`);

        // ============================================
        // PROGRAM 3: Age Calculator
        // ============================================

        // Ask for birth year and convert to number
        let birthYear = parseInt(prompt("Enter your birth year (e.g., 2005):"));

        // Calculate approximate age using the current year
        let currentYear = 2026;
        let age = currentYear - birthYear;

        // Display the result
        alert(`You were born in ${birthYear}. You are approximately ${age} years old.`);
    </script>

</body>
</html>
```

---

## Grading Notes

- **parseFloat() conversion (5 marks):** Both number inputs in Program 2 must use `parseFloat()` (or `Number()` or `parseInt()`). Without conversion, `+` would concatenate strings. Deduct full marks if no conversion is used and the student's output shows concatenation instead of addition.
- **Template literals (5 marks):** Program 1's alert must use backticks with `${}`. Concatenation with `+` works but does not meet the specific template literal requirement.
- **Age calculation (5 marks):** Accept any reasonable approach to getting the current year. Hardcoding `2026` is fine. Using `new Date().getFullYear()` is better but not required.
- **Common errors:**
  - Using `parseInt()` instead of `parseFloat()` for the calculator -- this truncates decimal inputs. Award partial credit (3/5 for the conversion marks).
  - Not handling the case where the user clicks Cancel on a prompt (value becomes `null`). This is not required at this stage but note it as a forward reference to error handling.
  - Division by zero -- if the user enters 0 as the second number, the quotient will be `Infinity`. This is mathematically correct behaviour in JavaScript and should not be penalised.
