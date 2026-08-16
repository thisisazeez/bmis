# Week 13: Events

## BMIS 263 -- Introduction to Programming

---

## Overview

Last week, you used `onclick` attributes in your HTML to trigger JavaScript functions. That works, but it mixes HTML and JavaScript in a way that becomes difficult to manage as your code grows. This week, you learn the proper way to handle user interactions: **event-driven programming**.

An event is anything the user does -- clicking a button, pressing a key, moving the mouse, submitting a form, scrolling the page. JavaScript lets you listen for these events and respond to them with your own code.

By the end of this session, you will be able to:

- Explain event-driven programming
- Use `addEventListener()` to attach event handlers
- Handle click, input, keypress, and submit events
- Access event information through the event object
- Prevent default browser behaviour for form submissions

---

## 1. What Is Event-Driven Programming?

Most of the code you have written so far runs when the page loads -- top to bottom, once. Event-driven programming flips this: you write functions that **wait** for something to happen, then run in response.

The pattern:

1. **Select** an element
2. **Listen** for a specific event on that element
3. **Respond** by running a function when the event occurs

```javascript
let button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button was clicked!");
});
```

This says: "Find the element with id `myButton`. When it is clicked, run this function."

---

## 2. `addEventListener()`

This is the standard way to attach event handlers in JavaScript.

```javascript
element.addEventListener(eventType, handlerFunction);
```

- `eventType` -- a string naming the event (e.g., `"click"`, `"keydown"`, `"submit"`)
- `handlerFunction` -- the function to call when the event occurs

### Why Not `onclick`?

Using `onclick` in HTML (`<button onclick="doSomething()">`) works but has limitations:

1. It mixes HTML and JavaScript (violates separation of concerns)
2. You can only attach one handler per event (a second `onclick` overwrites the first)
3. It does not work well with complex applications

`addEventListener` keeps JavaScript in JavaScript and allows multiple handlers on the same event:

```javascript
// Both handlers will run when the button is clicked
button.addEventListener("click", doFirstThing);
button.addEventListener("click", doSecondThing);
```

---

## 3. Common Events

### Click Events

The most common event. Fires when the user clicks an element:

```javascript
let btn = document.getElementById("submitBtn");

btn.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

### Input Events

Fires every time the user types in an input field (on every keystroke):

```javascript
let nameInput = document.getElementById("nameField");

nameInput.addEventListener("input", function() {
    console.log("Current value:", nameInput.value);
});
```

### Change Events

Fires when a form field's value changes **and the user leaves the field** (or selects a new option in a dropdown):

```javascript
let dropdown = document.getElementById("courseSelect");

dropdown.addEventListener("change", function() {
    console.log("Selected:", dropdown.value);
});
```

### Keydown and Keyup Events

Fire when the user presses or releases a key:

```javascript
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});
```

### Submit Events

Fires when a form is submitted:

```javascript
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();    // stop the page from reloading
    console.log("Form submitted!");
});
```

### Mouse Events

```javascript
let box = document.getElementById("hoverBox");

box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "white";
});
```

---

## 4. The Event Object

When an event occurs, JavaScript automatically passes an **event object** to the handler function. This object contains information about the event:

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function(event) {
    console.log("Event type:", event.type);        // "click"
    console.log("Target element:", event.target);  // the button itself
    console.log("Mouse X:", event.clientX);        // cursor position
    console.log("Mouse Y:", event.clientY);
});
```

Common event object properties:

| Property | Description |
|---|---|
| `event.type` | The type of event ("click", "keydown", etc.) |
| `event.target` | The element that triggered the event |
| `event.key` | The key that was pressed (for keyboard events) |
| `event.clientX`, `event.clientY` | Mouse cursor position |
| `event.preventDefault()` | Stops the browser's default action |

---

## 5. `event.preventDefault()`

Some elements have default behaviours:

- Clicking a link navigates to a new page
- Submitting a form reloads the page
- Pressing Enter in a form submits it

`event.preventDefault()` stops these defaults so you can handle the event yourself:

```javascript
let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();    // page will NOT reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Logging in as ${username}...`);
    }
});
```

This is essential for form handling. Without `preventDefault()`, the page reloads when the form is submitted, and your JavaScript output disappears.

---

## 6. Named Functions vs. Anonymous Functions

You can use either named or anonymous (inline) functions as event handlers:

### Anonymous Function

```javascript
button.addEventListener("click", function() {
    console.log("Clicked!");
});
```

### Named Function

```javascript
function handleClick() {
    console.log("Clicked!");
}

button.addEventListener("click", handleClick);
// Note: no parentheses after handleClick -- you are passing the function,
// not calling it
```

Named functions are easier to debug (the name appears in error messages) and can be reused or removed:

```javascript
button.removeEventListener("click", handleClick);
```

---

## 7. Practical Example: Interactive Message Display

```html
<input type="text" id="messageInput" placeholder="Type a message">
<button id="displayBtn">Display Message</button>
<button id="clearBtn">Clear</button>
<p id="output"></p>
```

```javascript
let displayBtn = document.getElementById("displayBtn");
let clearBtn = document.getElementById("clearBtn");
let input = document.getElementById("messageInput");
let output = document.getElementById("output");

displayBtn.addEventListener("click", function() {
    let message = input.value;
    if (message === "") {
        output.textContent = "Please type a message first.";
        output.style.color = "red";
    } else {
        output.textContent = message;
        output.style.color = "green";
    }
});

clearBtn.addEventListener("click", function() {
    input.value = "";
    output.textContent = "";
});
```

This is how real web applications work: the user types in a field, clicks a button, and the page updates without any popup boxes or page reloads.

---

## 8. Putting It Together: Form Validation

```html
<form id="registrationForm">
    <label for="name">Name:</label>
    <input type="text" id="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email"><br><br>

    <button type="submit">Register</button>
</form>
<p id="formOutput"></p>
```

```javascript
let form = document.getElementById("registrationForm");
let formOutput = document.getElementById("formOutput");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        formOutput.textContent = "Please fill in all fields.";
        formOutput.style.color = "red";
    } else {
        formOutput.textContent = `Welcome, ${name}! We will contact you at ${email}.`;
        formOutput.style.color = "green";
    }
});
```

---

## Key Terms

- **Event** -- an action or occurrence (click, keypress, submit) that JavaScript can detect and respond to
- **Event handler** -- a function that runs in response to an event
- **`addEventListener()`** -- attaches an event handler to an element
- **Event object** -- an object automatically passed to the handler containing information about the event
- **`event.preventDefault()`** -- stops the browser's default behaviour for an event
- **`event.target`** -- the element that triggered the event
- **Anonymous function** -- a function without a name, defined inline
- **Event-driven programming** -- a programming model where code runs in response to events rather than sequentially

---

## What Comes Next

Next week: **Project Development**. You will combine everything from this course -- HTML, CSS, JavaScript, DOM manipulation, and events -- to build a complete, interactive web application. We will build a calculator step by step, applying the planning, design, and testing workflow that professional developers use.
