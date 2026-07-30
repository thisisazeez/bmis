# Week 6 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## Part A: Written Answers

### 1. What is syntax?

Syntax is the set of rules that define how code must be written in a programming language for the computer to understand it. It is similar to grammar in a human language -- the words might be correct, but if they are arranged incorrectly, the sentence does not make sense. In JavaScript, a syntax rule is that every function call must have matching parentheses. For example, `alert("Hello");` is correct, but `alert("Hello";` is a syntax error because the closing parenthesis is missing.

### 2. alert() vs. console.log()

`alert()` displays a popup message box on the screen that the user can see. The page stops until the user clicks "OK." It is useful for getting the user's attention or for quick testing during development.

`console.log()` prints a message to the browser's developer console, which is not visible to the user unless they open the developer tools (F12). It is used mainly for debugging -- checking what values your variables hold or confirming that a certain part of your code is running. In a real application, you would use `console.log()` during development and remove it before releasing the product. You would almost never use `alert()` in a finished product because it interrupts the user.

---

## Part B: Solutions

### hello.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello - BMIS 263</title>
</head>
<body>

    <h1>BMIS 263</h1>

    <script>
        // Display a welcome message in an alert box
        alert("Welcome to Introduction to Programming!");
    </script>

</body>
</html>
```

### console-demo.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Console Demo - BMIS 263</title>
</head>
<body>

    <h1>Console Demo</h1>
    <p>Open the browser console (F12) to see the output.</p>

    <script>
        // Print my name as a string
        console.log("Adamu Bello");

        // Print my age as a number (no quotes = number, not string)
        console.log(21);

        // Print a sentence about my course
        console.log("I am studying Management Information Systems");
    </script>

</body>
</html>
```

### write-demo.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Write Demo - BMIS 263</title>
</head>
<body>

    <script>
        // Use document.write to create a heading with my name
        document.write("<h1>Adamu Bello</h1>");

        // Use document.write to create a paragraph about the course
        document.write("<p>I am taking Introduction to Programming because I want to learn how to build interactive web pages. Understanding HTML, CSS, and JavaScript will help me in my career in information systems.</p>");
    </script>

</body>
</html>
```

---

## Grading Notes

- **alert() (10 marks):** The alert must display exactly "Welcome to Introduction to Programming!" (minor variations in wording acceptable). Must appear before the page content is visible.
- **console.log() age as number (5 marks):** The age must not be in quotes. `console.log(21)` prints a number; `console.log("21")` prints a string. Award full marks for the number version, deduct 2 marks for the string version (it works, but it misses the point about data types, which will be covered formally next week).
- **Common errors:** Students may place the `<script>` tag in the `<head>` instead of the `<body>`. For these exercises it still works, but note the placement for future reference.
