# Week 11 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## functions.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions - BMIS 263</title>
</head>
<body>

    <h1>Functions</h1>
    <p>Open the console (F12) to see the output.</p>

    <script>
        // ============================================
        // PROGRAM 1: Display Name Function
        // This function prints a greeting with the given name
        // ============================================

        function displayName(name) {
            console.log(`Hello, my name is ${name}.`);
        }

        // Call it three times with different names
        displayName("Adamu");
        displayName("Fatima");
        displayName("Ibrahim");

        // ============================================
        // PROGRAM 2: Greet Function with Return
        // Returns a greeting string based on name and time of day
        // ============================================

        function greet(name, timeOfDay) {
            return `Good ${timeOfDay}, ${name}!`;
        }

        // Call the function and store the result
        let greeting1 = greet("Adamu", "morning");
        let greeting2 = greet("Fatima", "afternoon");

        alert(greeting1);
        alert(greeting2);

        console.log(greeting1);
        console.log(greeting2);

        // ============================================
        // PROGRAM 3: Calculator Functions
        // Four functions for basic arithmetic operations
        // ============================================

        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        function multiply(a, b) {
            return a * b;
        }

        function divide(a, b) {
            return a / b;
        }

        // Get two numbers from the user
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));

        // Call all four functions and display results
        console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
        console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
        console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
        console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);

        // ============================================
        // PROGRAM 4: Grade Calculator Function
        // Takes a score and returns the corresponding grade
        // ============================================

        function getGrade(score) {
            if (score >= 70) return "A";
            if (score >= 60) return "B";
            if (score >= 50) return "C";
            return "F";
        }

        // Test with multiple scores
        console.log(`Score 85: Grade ${getGrade(85)}`);   // A
        console.log(`Score 65: Grade ${getGrade(65)}`);   // B
        console.log(`Score 55: Grade ${getGrade(55)}`);   // C
        console.log(`Score 40: Grade ${getGrade(40)}`);   // F
        console.log(`Score 70: Grade ${getGrade(70)}`);   // A (boundary)
        console.log(`Score 50: Grade ${getGrade(50)}`);   // C (boundary)
    </script>

</body>
</html>
```

---

## Grading Notes

- **displayName (10 marks):** Function must take a parameter and use it in the output. Must be called 3 times. Deduct 3 marks if called fewer times.
- **greet (10 marks):** Must use `return` (not `alert` inside the function). The returned value must be stored in a variable and then displayed. Deduct 5 marks if the function uses `alert()` internally instead of returning.
- **Calculator functions (15 marks):** All four must be defined (3 marks each, 12 total), must use `return`, and must be called with user input (3 marks).
- **getGrade (10 marks):** Correct conditional logic (5 marks) and called with at least 4 different scores (5 marks). Test boundary values.
- **Common errors:**
  - Defining a function but never calling it (the code never runs).
  - Using `console.log` inside the function instead of `return`, then trying to store the result (which is `undefined`).
  - Forgetting parentheses when calling the function: `greet` (reference to the function) vs. `greet()` (call the function).
