
# PRACTICE QUESTIONS

**Answer all questions. Each question references the relevant lecture notes for review.**

---

## HTML Fundamentals

### 1.
What does HTML stand for?
*(Reference: Week 2 Lecture, Section 1)*

**Answer:** HyperText Markup Language.

---

### 2.
What is the purpose of the `<!DOCTYPE html>` declaration at the top of an HTML document?
*(Reference: Week 2 Lecture, Section 2)*

**Answer:** It tells the browser that the document is written in HTML5. Without it, the browser may render the page in a legacy mode with unpredictable behaviour.

---

### 3.
Write the correct HTML code to create an ordered list with three items: "HTML", "CSS", and "JavaScript".
*(Reference: Week 2 Lecture, Section 4)*

**Answer:**
```html
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

---

### 4.
What is the difference between the `<strong>` tag and the `<b>` tag? Which one is preferred and why?
*(Reference: Week 2 Lecture, Section 4)*

**Answer:** `<strong>` carries semantic meaning (the text is important), while `<b>` only makes text bold visually. `<strong>` is preferred because it conveys meaning to screen readers and search engines, not just appearance.

---

### 5.
Write the HTML code for an image element that displays a photo called `campus.jpg`, includes alt text "Lincoln University campus", and sets the width to 400px.
*(Reference: Week 2 Lecture, Section 4)*

**Answer:**
```html
<img src="campus.jpg" alt="Lincoln University campus" width="400">
```

---

## HTML Forms

### 6.
What does the `required` attribute do on a form input?
*(Reference: Week 3 Lecture, Section 4)*

**Answer:** It prevents the form from being submitted until the field has been filled in. The browser handles this validation automatically without any JavaScript.

---

### 7.
Why must all radio buttons in a group share the same `name` attribute?
*(Reference: Week 3 Lecture, Section 3)*

**Answer:** The shared `name` attribute tells the browser that the radio buttons belong to the same group, so only one can be selected at a time. Without a shared name, they would behave independently.

---

### 8.
What is the purpose of the `<label>` element in a form? How does the `for` attribute connect it to an input?
*(Reference: Week 3 Lecture, Section 3)*

**Answer:** A `<label>` describes what an input field is for. The `for` attribute on the label must match the `id` attribute on the input, which connects them. This improves accessibility (screen readers read labels aloud) and usability (clicking the label focuses the input).

---

### 9.
What is the difference between a `<select>` dropdown and a group of radio buttons? When would you use each?
*(Reference: Week 3 Lecture, Section 3)*

**Answer:** A `<select>` dropdown hides options until the user clicks to expand it, making it space-efficient for long lists. Radio buttons show all options at once. Use a dropdown when there are many options or when screen space is limited. Use radio buttons when there are few options (2-4) and you want the user to see all choices immediately.

---

### 10.
Write the HTML for a textarea that allows a user to enter a message. It should have 6 rows, 50 columns, and placeholder text "Type your message here".
*(Reference: Week 3 Lecture, Section 3)*

**Answer:**
```html
<textarea rows="6" cols="50" placeholder="Type your message here"></textarea>
```

---

## CSS Basics

### 11.
Write a CSS rule that changes all `<h1>` elements to have a colour of `navy`, a font size of `36px`, and centred text alignment.
*(Reference: Week 4 Lecture, Section 2)*

**Answer:**
```css
h1 {
    color: navy;
    font-size: 36px;
    text-align: center;
}
```

---

### 12.
What are the three methods of applying CSS to an HTML document? Which is recommended for multi-page projects?
*(Reference: Week 4 Lecture, Section 3)*

**Answer:**
1. Inline CSS (using the `style` attribute) - almost never recommended.
2. Internal CSS (using a `<style>` tag in the `<head>`) - for single-page projects.
3. External CSS (using a `<link>` tag to a `.css` file) - recommended for multi-page projects because one CSS file can style all pages.

---

### 13.
Explain the difference between a class selector and an ID selector in CSS. Give an example of each.
*(Reference: Week 4 Lecture, Section 4)*

**Answer:**
- A **class selector** (written with `.`) selects elements with a specific `class` attribute. It is reusable across multiple elements.
- An **ID selector** (written with `#`) selects the one element with a specific `id` attribute. IDs must be unique on a page.

Example:
```css
.highlight { background-color: yellow; }  /* class */
#page-title { color: navy; }              /* ID */
```

---

### 14.
What does the CSS `text-decoration: none;` property do? In what common scenario would you use it?
*(Reference: Week 4 Lecture, Section 5)*

**Answer:** It removes the underline from text. It is commonly used on navigation links (`a` elements) to remove the default underline, allowing you to style links with custom hover effects instead.

---

### 15.
Explain CSS specificity. If you have `p { color: blue; }` and `.special { color: green; }`, what colour will a paragraph with `class="special"` be? Why?
*(Reference: Week 4 Lecture, Section 6)*

**Answer:** Specificity is the priority system CSS uses to resolve conflicting rules. Class selectors (`.special`) have higher specificity than element selectors (`p`). Therefore, the paragraph will be **green** because the class selector wins.

---

## CSS Layout

### 16.
List the four layers of the CSS box model from inside to outside.
*(Reference: Week 5 Lecture, Section 1)*

**Answer:** Content, Padding, Border, Margin.

---

### 17.
What does `box-sizing: border-box` do? Write the CSS to apply it to all elements.
*(Reference: Week 5 Lecture, Section 1)*

**Answer:** It makes the `width` and `height` properties include padding and border, not just the content area. This prevents elements from becoming wider than expected.
```css
* {
    box-sizing: border-box;
}
```

---

### 18.
What is the difference between `margin` and `padding`?
*(Reference: Week 5 Lecture, Section 1)*

**Answer:** `margin` is space **outside** the border, between the element and its neighbours. `padding` is space **inside** the border, between the content and the border edge. Padding shares the element's background colour; margin is always transparent.

---

### 19.
Write the CSS to create a Flexbox container that centres its items both horizontally and vertically, with a gap of 15px between items.
*(Reference: Week 5 Lecture, Section 3)*

**Answer:**
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
```

---

### 20.
What is the difference between `justify-content` and `align-items` in Flexbox?
*(Reference: Week 5 Lecture, Section 3)*

**Answer:** `justify-content` controls distribution along the **main axis** (horizontal in a default row). `align-items` controls alignment along the **cross axis** (vertical in a default row).

---

### 21.
Write the CSS to centre a block element with a fixed width of 600px horizontally on the page.
*(Reference: Week 5 Lecture, Section 4)*

**Answer:**
```css
.box {
    width: 600px;
    margin: 0 auto;
}
```

---

### 22.
What does `display: none;` do to an element? How is it different from `visibility: hidden;`?
*(Reference: Week 5 Lecture, Section 2)*

**Answer:** `display: none;` removes the element from the page flow entirely -- it takes up no space and is invisible. (Note: `visibility: hidden;` makes the element invisible but it still takes up its space in the layout.)

---

## Semantic HTML

### 23.
What is semantic HTML and why is it important?
*(Reference: Week 2 Lecture, Section 5)*

**Answer:** Semantic HTML uses elements that describe the **meaning** of their content (e.g., `<nav>`, `<header>`, `<footer>`), not just their structure (e.g., `<div>`). It is important because it makes code more readable, helps search engines understand the page, and improves accessibility for screen readers.

---

### 24.
List four semantic HTML elements and explain what each one represents.
*(Reference: Week 2 Lecture, Section 5)*

**Answer:**
1. `<header>` -- the header section of a page or section.
2. `<nav>` -- contains navigation links.
3. `<main>` -- the main content of the page (only one per page).
4. `<footer>` -- the footer section of a page (e.g., copyright info).

---

## HTML Comments

### 25.
Write the correct syntax for an HTML comment and a CSS comment.
*(Reference: Week 2 Lecture, Section 6; Week 4 Lecture, Section 7)*

**Answer:**
- HTML comment: `<!-- This is a comment -->`
- CSS comment: `/* This is a comment */`

---

## Combined HTML & CSS

### 26.
Write a complete HTML page with an external CSS link that contains: a header with a heading, a paragraph, and an image. The CSS should style the heading with a colour, the paragraph with a font size, and the image with rounded corners. Include at least 2 CSS comments.
*(Reference: Weeks 2, 4)*

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Styled Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>My Styled Page</h1>
    <p>This page demonstrates basic HTML and CSS styling.</p>
    <img src="photo.jpg" alt="A sample photo">
</body>
</html>
```

```css
/* Style the heading */
h1 {
    color: #2c3e50;
    text-align: center;
}

/* Style the paragraph */
p {
    font-size: 18px;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}

/* Round the image corners */
img {
    border-radius: 10px;
    max-width: 100%;
}
```

---

### 27.
Write a CSS navigation bar using Flexbox that has 4 links, is centred, has a gap of 20px between links, and the links are styled with no underline and a custom colour that changes on hover.
*(Reference: Weeks 4, 5)*

**Answer:**
```css
nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    background-color: #333;
    padding: 15px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #3498db;
    text-decoration: underline;
}
```

---

### 28.
A CSS rule sets `p { color: blue; }` and a later rule sets `.note { color: red; }`. If you have `<p class="note">Hello</p>`, what colour will the text be? Explain why using specificity.
*(Reference: Week 4 Lecture, Section 6)*

**Answer:** The text will be **red**. The class selector `.note` has higher specificity than the element selector `p`, so the class rule wins even though the element rule appears first in the CSS.

---

### 29.
What is the input/output pattern in programming? Give an example using an HTML form.
*(Reference: Week 1 Lecture, Section 3; Week 3 Lecture, Section 1)*

**Answer:** The input/output pattern is: INPUT -> PROCESSING -> OUTPUT. In a web context, the **input** is data the user enters into a form (e.g., typing a name into a text field), the **processing** is what JavaScript does with that data (e.g., validating or calculating), and the **output** is the result displayed to the user (e.g., a greeting message on the page).

---

### 30.
Write the HTML and CSS for a styled form that contains a name input, an email input, and a submit button. The form should have a white background, padding of 20px, a border-radius of 8px, and be centred on the page. The submit button should have a distinct background colour and white text.
*(Reference: Weeks 3, 4, 5)*

**Answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Styled Form</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>
    <form class="styled-form">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" placeholder="you@example.com" required><br><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

```css
/* Form container */
.styled-form {
    background-color: white;
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
}

/* Label styling */
label {
    font-weight: bold;
    color: #333;
}

/* Input styling */
input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}

/* Submit button */
button[type="submit"] {
    background-color: #2980b9;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #2471a3;
}
```

---
