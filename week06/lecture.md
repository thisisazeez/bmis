# Week 6: Introduction to JavaScript

## BMIS 263 -- Introduction to Programming

---

## Overview

For five weeks, you have built web pages that display static content. HTML structures the page, CSS styles it, but neither can make **decisions**, **respond to user actions**, or **process data**. That is what JavaScript does.

JavaScript is the programming language of the web. Unlike HTML (a markup language) and CSS (a style sheet language), JavaScript is a **real programming language** -- it has variables, conditions, loops, and functions. From this week forward, you are programming in the full sense of the word.

By the end of this session, you will be able to:

- Explain what JavaScript is and where it runs
- Understand what "syntax" means in a programming context
- Write your first JavaScript code using `alert()` and `console.log()`
- Include JavaScript in an HTML document

---

## 1. What Is JavaScript?

JavaScript is a high-level programming language that runs in the web browser. It was created in 1995 to add interactivity to web pages, and it remains the only programming language that all modern browsers understand natively.

What JavaScript can do:

- Respond to user actions (clicks, key presses, form submissions)
- Change the content and style of a page after it has loaded
- Validate form data before it is sent to a server
- Perform calculations
- Make decisions (if this, then that)
- Repeat actions (loops)
- Communicate with servers (load data without refreshing the page)

### JavaScript Is Not Java

This is a common point of confusion. JavaScript and Java are completely different languages with different syntax, different purposes, and different creators. The name similarity is historical and accidental. Do not confuse them.

### Where JavaScript Runs

JavaScript runs inside the browser. Every modern browser (Chrome, Firefox, Edge, Safari) has a built-in **JavaScript engine** that reads and executes JavaScript code. You do not need to install anything extra.

You can also run JavaScript outside the browser using tools like Node.js, but for this course, we stay in the browser.

---

## 2. Syntax

Recall from Week 1 that **syntax** is the set of rules governing how instructions must be written in a particular language. Every programming language has its own syntax, just as every human language has its own grammar.

In English, "I go store the to" is grammatically wrong. The words are correct, but the order violates English syntax. In JavaScript:

```javascript
// Correct syntax
alert("Hello");

// Wrong syntax -- missing closing parenthesis
alert("Hello";
```

The second line will produce a **syntax error** -- the browser will refuse to run it and will report the problem. This is not a failure on your part; it is the language telling you exactly what you need to fix. Syntax errors are the easiest kind of bug because the browser tells you where the problem is.

### Semicolons

In JavaScript, each statement typically ends with a semicolon (`;`):

```javascript
alert("Hello");
console.log("World");
```

JavaScript can sometimes work without semicolons, but it is a best practice to always include them. It removes ambiguity and prevents subtle bugs.

### Case Sensitivity

JavaScript is case-sensitive. `alert` and `Alert` are different things. `myName` and `myname` are different variables. Be precise.

---

## 3. How to Include JavaScript in HTML

There are two methods, similar to how CSS can be internal or external.

### Method 1: Internal JavaScript

Write JavaScript inside a `<script>` tag, typically placed just before the closing `</body>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First JavaScript</title>
</head>
<body>
    <h1>JavaScript Demo</h1>
    <p>Check the alert box and the browser console.</p>

    <script>
        alert("Hello, world!");
        console.log("This message appears in the browser console.");
    </script>
</body>
</html>
```

Why place `<script>` at the bottom of the body? Because the browser reads HTML from top to bottom. If JavaScript tries to interact with HTML elements that have not loaded yet, it will fail. Placing the script at the bottom ensures all HTML is loaded first.

### Method 2: External JavaScript

Write JavaScript in a separate `.js` file and link it:

**script.js:**
```javascript
alert("Hello from an external file!");
console.log("External JavaScript loaded.");
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External JS Demo</title>
</head>
<body>
    <h1>External JavaScript</h1>
    <script src="script.js"></script>
</body>
</html>
```

For anything beyond a few lines of JavaScript, use an external file. Same reasoning as external CSS: it keeps your code organised and reusable.

---

## 4. Your First JavaScript: `alert()`

`alert()` displays a popup box with a message:

```javascript
alert("Welcome to BMIS 263!");
```

The browser pauses everything until the user clicks "OK." This is useful for quick demonstrations but annoying in real applications. You will not use `alert()` in professional code, but it is a good learning tool because the result is immediately visible.

### Strings

The text inside the quotes -- `"Welcome to BMIS 263!"` -- is called a **string**. A string is a sequence of characters (letters, numbers, symbols, spaces) enclosed in quotes. In JavaScript, you can use double quotes (`"..."`) or single quotes (`'...'`):

```javascript
alert("Hello");    // double quotes
alert('Hello');    // single quotes -- same result
```

Pick one style and be consistent. In this course, we will use double quotes.

---

## 5. `console.log()`

`console.log()` prints a message to the **browser console** -- a developer tool built into every browser.

```javascript
console.log("This appears in the console, not on the page.");
console.log(42);
console.log("The answer is", 42);
```

### How to Open the Console

- **Chrome / Edge:** Press `F12` or `Ctrl + Shift + J` (Windows/Linux), then click the "Console" tab
- **Firefox:** Press `F12` or `Ctrl + Shift + K`
- **Safari:** Enable the Develop menu in Preferences, then press `Cmd + Option + C`

`console.log()` is your most important debugging tool. When something does not work, add `console.log()` statements to check what values your variables hold and which parts of your code are actually running. You will use this constantly from now on.

---

## 6. `document.write()`

`document.write()` writes content directly into the HTML page:

```javascript
document.write("<h2>This heading was created by JavaScript</h2>");
document.write("<p>So was this paragraph.</p>");
```

This is useful for demonstrations but problematic in real applications -- calling `document.write()` after the page has finished loading will erase the entire page. Use it only for simple exercises; we will learn better methods in Week 12 (DOM Manipulation).

---

## 7. Comments in JavaScript

```javascript
// This is a single-line comment

/* This is a
   multi-line comment */

alert("Hello"); // You can also comment at the end of a line
```

Comments serve the same purpose as in HTML and CSS: explaining **why** your code does something, not just what it does. Recall from Week 1 that good documentation is a characteristic of a good program.

---

## 8. Errors

When JavaScript encounters a problem, it reports an error in the console. The three most common types at this stage:

### Syntax Error

You broke the language's grammar rules:

```javascript
alert("Hello"    // SyntaxError: missing ) after argument list
```

### Reference Error

You used a name that does not exist:

```javascript
console.log(myVariable);   // ReferenceError: myVariable is not defined
```

### Type Error

You tried to do something with a value that does not support it:

```javascript
null.toString();   // TypeError: Cannot read properties of null
```

**The console is your friend.** When your code does not work, open the console first. The error message tells you what went wrong and which line it happened on.

---

## Key Terms

- **JavaScript** -- a high-level programming language that runs in the browser, used to add logic and interactivity to web pages
- **Syntax** -- the rules governing how code must be written in a given language
- **`alert()`** -- displays a popup message box to the user
- **`console.log()`** -- prints a message to the browser's developer console
- **`document.write()`** -- writes content directly into the HTML page (use sparingly)
- **String** -- a sequence of characters enclosed in quotes (`"hello"`, `'world'`)
- **Syntax error** -- an error caused by code that violates the language's grammar rules
- **Console** -- a developer tool in the browser that displays JavaScript output and errors

---

## What Comes Next

Next week, we introduce **variables** and **data types** -- the building blocks for storing and working with data in JavaScript. You will learn how to store a user's name, age, or any other piece of information in your program so that you can use it, change it, and display it.
