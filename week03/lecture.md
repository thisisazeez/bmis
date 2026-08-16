# Week 3: Forms and Input Concepts

## BMIS 263 -- Introduction to Programming

---

## Overview

Recall from Week 1 that a program transforms **input** into **output**. So far, you have built static HTML pages -- pages that display content but do not collect anything from the user. This week, that changes. Forms are how web pages collect input.

By the end of this session, you will be able to:

- Explain the difference between input and output in a web context
- Build an HTML form with various input types
- Understand how form data is structured (names and values)

---

## 1. Input and Output in Programming

Every useful program follows the same pattern:

```
INPUT --> PROCESSING --> OUTPUT
```

- **Input** is what goes into the program: data the user provides, a file that is read, a button that is clicked.
- **Processing** is what the program does with the input: calculations, decisions, transformations.
- **Output** is what comes out: text on screen, a file saved, a sound played.

In web programming:

| Role | Examples |
|---|---|
| Input | Text typed into a form, a button click, a file upload, a dropdown selection |
| Processing | JavaScript logic (you will learn this starting in Week 6) |
| Output | Text displayed on the page, an alert box, a page redirect, data sent to a server |

This week we focus on the **input** side: how to build the forms that collect data. The processing comes later with JavaScript.

---

## 2. The `<form>` Element

A form is a container for input elements. It tells the browser: "everything inside here is data the user can fill in."

```html
<form>
    <!-- Input elements go here -->
</form>
```

In a full web application, the `<form>` tag has two important attributes:

- `action` -- the URL where the form data is sent
- `method` -- how the data is sent (`GET` or `POST`)

For now, we will leave these out. We are building forms to understand their structure, not to send data to a server. When we reach JavaScript, we will handle form data on the page itself.

---

## 3. Input Elements

### Text Input

The most common input type. A single-line text box.

```html
<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" placeholder="Enter your full name">
```

Key attributes:
- `type="text"` -- specifies a text input
- `id` -- a unique identifier, used to connect the label to the input
- `name` -- the name of the data field (this is what identifies the data when the form is submitted)
- `placeholder` -- hint text shown inside the box before the user types

### The `<label>` Element

Labels describe what an input field is for. Always use them. They improve accessibility (screen readers read them aloud) and usability (clicking the label focuses the input).

```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">
```

The `for` attribute on the label must match the `id` attribute on the input. This is what connects them.

### Password Input

Same as text, but the characters are hidden:

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password">
```

### Email Input

Looks like a text input, but the browser validates that the value is a valid email format:

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

### Number Input

Only accepts numeric values:

```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="120">
```

### Date Input

Provides a date picker:

```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

### Radio Buttons

Used when the user must choose exactly one option from a group. All radio buttons in the same group share the same `name` attribute:

```html
<p>Gender:</p>
<label>
    <input type="radio" name="gender" value="male"> Male
</label>
<label>
    <input type="radio" name="gender" value="female"> Female
</label>
```

### Checkboxes

Used when the user can choose multiple options:

```html
<p>Interests:</p>
<label>
    <input type="checkbox" name="interests" value="sports"> Sports
</label>
<label>
    <input type="checkbox" name="interests" value="music"> Music
</label>
<label>
    <input type="checkbox" name="interests" value="reading"> Reading
</label>
```

### Dropdown (Select)

A dropdown menu for choosing one option from a list:

```html
<label for="course">Course:</label>
<select id="course" name="course">
    <option value="">-- Select your course --</option>
    <option value="bmis">Management Information Systems</option>
    <option value="bcs">Computer Science</option>
    <option value="bba">Business Administration</option>
</select>
```

### Textarea

A multi-line text input, used for longer text like comments or messages:

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="40" placeholder="Type your message here"></textarea>
```

### Submit Button

A button that submits the form:

```html
<button type="submit">Submit</button>
```

Or, equivalently:

```html
<input type="submit" value="Submit">
```

---

## 4. Structuring a Form

A well-structured form groups related inputs and uses clear labels. Here is a complete example:

```html
<form>
    <h2>Student Registration</h2>

    <label for="fullname">Full Name:</label><br>
    <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required><br><br>

    <label for="email">Email Address:</label><br>
    <input type="email" id="email" name="email" placeholder="you@example.com" required><br><br>

    <label for="age">Age:</label><br>
    <input type="number" id="age" name="age" min="16" max="60"><br><br>

    <label for="course">Course:</label><br>
    <select id="course" name="course">
        <option value="">-- Select --</option>
        <option value="bmis">Management Information Systems</option>
        <option value="bcs">Computer Science</option>
    </select><br><br>

    <p>Gender:</p>
    <label><input type="radio" name="gender" value="male"> Male</label><br>
    <label><input type="radio" name="gender" value="female"> Female</label><br><br>

    <button type="submit">Register</button>
</form>
```

### The `required` Attribute

Adding `required` to an input means the form cannot be submitted until that field is filled in. The browser handles this automatically -- no JavaScript needed.

```html
<input type="text" id="fullname" name="fullname" required>
```

---

## 5. Input vs. Output -- The Bigger Picture

Right now, our forms do not **do** anything when submitted. The browser either reloads the page or tries to send data to a URL we have not set up.

This is intentional. We are separating the concerns:

- **This week:** Build the input mechanism (the form).
- **Weeks 6-8:** Add the processing and output (JavaScript).

When we reach JavaScript, you will learn to read values from these form fields, process them (calculate, compare, decide), and display output on the page. The form structure you learn this week is exactly what JavaScript will interact with.

---

## Key Terms

- **Form** -- an HTML container (`<form>`) that groups input elements for collecting user data
- **Input** -- data provided by the user; in HTML, collected through `<input>`, `<select>`, `<textarea>` elements
- **Output** -- data displayed to the user; in HTML, shown as text, images, or other content on the page
- **Label** -- a text description for a form field; connects to the input via matching `for` and `id` attributes
- **Attribute `name`** -- identifies the data when the form is submitted; think of it as the variable name for that piece of data
- **Attribute `value`** -- the actual data contained in or selected by the input element
- **`required`** -- an attribute that prevents form submission until the field is filled in

---

## What Comes Next

Next week, we make things look better. CSS (Cascading Style Sheets) controls how HTML elements appear on screen -- colours, fonts, spacing, layout. Your forms and pages from Weeks 2 and 3 will get a visual upgrade.
