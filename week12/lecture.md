# Week 12: DOM Manipulation

## BMIS 263 -- Introduction to Programming

---

## Overview

For six weeks, you have used `alert()` and `console.log()` for output and `prompt()` for input. These work, but they are not how real web applications behave. Real applications update the page itself -- changing text, adding elements, modifying styles -- without popup boxes.

The mechanism for this is the **DOM** -- the Document Object Model. The DOM is JavaScript's interface to the HTML page. This week, you learn to use it.

By the end of this session, you will be able to:

- Explain what the DOM is
- Select HTML elements using `getElementById()` and `querySelector()`
- Read and change element content with `textContent` and `innerHTML`
- Modify CSS styles from JavaScript
- Add and remove CSS classes dynamically

---

## 1. What Is the DOM?

When the browser loads an HTML page, it creates a **tree structure** in memory that represents every element on the page. This tree is the **Document Object Model** -- the DOM.

```
document
  |-- html
       |-- head
       |    |-- title
       |    |-- meta
       |-- body
            |-- h1
            |-- p
            |-- div
                 |-- p
                 |-- img
```

Every HTML tag becomes a **node** in this tree. JavaScript can access any node, read its content, change its content, change its styles, remove it, or add new nodes. The DOM is the bridge between your HTML and your JavaScript.

### The `document` Object

In JavaScript, `document` is the object that represents the entire HTML page. All DOM operations start with `document`.

---

## 2. Selecting Elements

Before you can change an element, you need to select it. Here are the main methods:

### `getElementById()`

Selects the element with a specific `id` attribute:

```html
<h1 id="title">Welcome</h1>
```

```javascript
let titleElement = document.getElementById("title");
console.log(titleElement);    // the <h1> element
```

This returns a single element (IDs must be unique on a page).

### `querySelector()`

Selects the **first** element that matches a CSS selector:

```javascript
// Select by tag name
let firstParagraph = document.querySelector("p");

// Select by class
let highlight = document.querySelector(".highlight");

// Select by ID (same as getElementById)
let title = document.querySelector("#title");

// Complex selectors
let navLink = document.querySelector("nav a");
```

`querySelector()` is more flexible than `getElementById()` because it accepts any CSS selector -- the same selectors you used in your stylesheets.

### `querySelectorAll()`

Selects **all** elements that match a CSS selector, returning a list:

```javascript
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs.length);    // number of <p> elements

// Loop through all of them
for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i].textContent);
}
```

---

## 3. Changing Content

### `textContent`

Gets or sets the text content of an element (no HTML):

```html
<p id="message">Original text</p>
```

```javascript
let msg = document.getElementById("message");

// Read the content
console.log(msg.textContent);    // "Original text"

// Change the content
msg.textContent = "New text from JavaScript";
```

### `innerHTML`

Gets or sets the HTML content of an element (can include tags):

```javascript
let container = document.getElementById("container");

// Set HTML content (including tags)
container.innerHTML = "<strong>Bold text</strong> and <em>italic text</em>";
```

**Warning:** Using `innerHTML` with user-supplied data is a security risk (cross-site scripting). For now, use it only with content you control. When displaying user input, use `textContent` instead.

---

## 4. Changing Styles

You can modify an element's CSS from JavaScript using the `style` property:

```javascript
let title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "36px";
title.style.backgroundColor = "#f0f0f0";
title.style.textAlign = "center";
title.style.padding = "20px";
```

Notice: CSS property names with hyphens (`font-size`, `background-color`) become camelCase in JavaScript (`fontSize`, `backgroundColor`).

---

## 5. Working with Classes

Instead of setting individual style properties, you can add or remove CSS classes. This is the preferred approach because it keeps your styles in CSS and your logic in JavaScript.

### `classList.add()`

```javascript
element.classList.add("highlight");
```

### `classList.remove()`

```javascript
element.classList.remove("highlight");
```

### `classList.toggle()`

Adds the class if it is not there; removes it if it is:

```javascript
element.classList.toggle("active");
```

### `classList.contains()`

Checks if the element has a specific class:

```javascript
if (element.classList.contains("active")) {
    console.log("Element is active");
}
```

### Example

```css
/* In your CSS file */
.hidden {
    display: none;
}

.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

```javascript
// In your JavaScript
let paragraph = document.getElementById("info");

paragraph.classList.add("highlight");     // apply highlight styles
paragraph.classList.remove("highlight");  // remove highlight styles
paragraph.classList.toggle("hidden");     // show/hide the element
```

---

## 6. Changing Attributes

You can read and change HTML attributes:

```javascript
let image = document.querySelector("img");

// Read an attribute
console.log(image.getAttribute("src"));

// Change an attribute
image.setAttribute("src", "new-photo.jpg");
image.setAttribute("alt", "A new photo");

// For common attributes, you can use properties directly
let link = document.querySelector("a");
link.href = "https://www.example.com";
link.target = "_blank";
```

---

## 7. Creating and Removing Elements

### Creating

```javascript
// Create a new element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created by JavaScript.";

// Add it to the page
document.body.appendChild(newParagraph);
```

### Removing

```javascript
let element = document.getElementById("old-content");
element.remove();
```

---

## 8. Practical Example: Change Text on Button Click

```html
<h1 id="heading">Click the button to change me</h1>
<button onclick="changeText()">Change Text</button>

<script>
    function changeText() {
        let heading = document.getElementById("heading");
        heading.textContent = "The text has been changed!";
        heading.style.color = "green";
    }
</script>
```

This is a preview of event handling (next week's topic). The `onclick` attribute calls the `changeText` function when the button is clicked. The function selects the heading by its ID and changes its text and colour.

---

## Key Terms

- **DOM** -- Document Object Model; the tree-structure representation of an HTML page that JavaScript can interact with
- **`document`** -- the JavaScript object representing the entire HTML page
- **`getElementById()`** -- selects the single element with a given ID
- **`querySelector()`** -- selects the first element matching a CSS selector
- **`querySelectorAll()`** -- selects all elements matching a CSS selector
- **`textContent`** -- property for reading/setting an element's text (no HTML)
- **`innerHTML`** -- property for reading/setting an element's HTML content
- **`style`** -- property for reading/setting individual CSS properties from JavaScript
- **`classList`** -- property for adding, removing, and toggling CSS classes

---

## What Comes Next

Next week: **Events**. You will learn to respond to user actions (clicks, key presses, mouse movements, form submissions) in a structured way, replacing the simple `onclick` attribute with JavaScript's proper event system.
