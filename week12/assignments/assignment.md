# Week 12 Assignment: DOM Manipulation

## BMIS 263 -- Introduction to Programming

---

## Task

Create a file called `dom.html` (with an optional external `dom.css`) that demonstrates DOM manipulation.

---

## Requirements

Build a single page that includes all of the following interactive features:

### Feature 1: Text Changer

- A heading that displays "Click the button to change this text"
- A button labelled "Change Text"
- When clicked, the button changes the heading text to "Text has been changed!" and changes its colour to green

### Feature 2: Background Colour Toggler

- A section (div or paragraph) with some text
- A button labelled "Toggle Background"
- When clicked, the button toggles the section's background colour between white and a colour of your choice

### Feature 3: Content Adder

- An empty container (a div with an id)
- A button labelled "Add Item"
- Each time the button is clicked, a new paragraph is added to the container with the text "Item [number]" (Item 1, Item 2, Item 3, etc.)

### Feature 4: Style Modifier

- An image (use any image or placeholder)
- Three buttons: "Add Border", "Make Round", "Reset"
- "Add Border" adds a visible border to the image
- "Make Round" sets `border-radius: 50%` on the image
- "Reset" removes both the border and the border-radius

---

## Technical Requirements

- Use `document.getElementById()` or `document.querySelector()` for all element selections
- Use `textContent` (not `innerHTML`) for changing text
- Use `classList` for at least one feature (toggle, add, or remove)
- Use the `onclick` attribute or assign functions in JavaScript
- Include at least 4 comments

---

## Grading Rubric

| Criteria | Marks | Description |
|---|---|---|
| Feature 1: text changer works | 10 | Text and colour change on click |
| Feature 2: background toggler works | 10 | Background toggles between two states |
| Feature 3: content adder works | 15 | New items added with incrementing numbers |
| Feature 4: style modifier works | 10 | All three buttons work correctly |
| getElementById or querySelector used | 5 | Correct DOM selection methods |
| classList used in at least one feature | 5 | add, remove, or toggle |
| Comments | 5 | At least 4 meaningful comments |
| **Total** | **60** | |

---

## Due Date

Submit by the start of Week 13's class.
