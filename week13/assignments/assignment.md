# Week 13 Assignment: Events

## BMIS 263 -- Introduction to Programming

---

## Task

Create a file called `events.html` that demonstrates event handling using `addEventListener()`.

---

## Requirements

### Feature 1: Click to Display Message

- A button with the text "Click Me"
- A paragraph below it (initially empty)
- When the button is clicked, display "You clicked the button!" in the paragraph
- Use `addEventListener()`, not `onclick`

### Feature 2: Live Character Counter

- A textarea for user input
- A paragraph below it showing the character count
- As the user types, the character count updates in real-time
- Use the `"input"` event

### Feature 3: Colour Changer Buttons

- Three buttons labelled "Red", "Green", "Blue"
- A div or section that changes its background colour when each button is clicked
- All three buttons should use `addEventListener()`

### Feature 4: Form with Validation

- A simple form with at least two fields (e.g., Name and Email)
- A submit button
- When submitted:
  - Use `event.preventDefault()` to stop the page from reloading
  - Check if both fields are filled in
  - If yes: display a success message on the page
  - If no: display an error message on the page
- Messages should appear on the page, not in alert boxes

---

## Technical Requirements

- All event handlers must use `addEventListener()` (no inline `onclick` attributes)
- Use `event.preventDefault()` in the form submission handler
- Use `textContent` to update text on the page
- Include at least 4 comments

---

## Grading Rubric

| Criteria | Marks | Description |
|---|---|---|
| Feature 1: click event with addEventListener | 10 | Message appears on click, addEventListener used |
| Feature 2: live character counter | 10 | Count updates on every keystroke using "input" event |
| Feature 3: colour changer buttons | 10 | All three buttons work, addEventListener used |
| Feature 4: form validation | 15 | preventDefault, validation, messages on page |
| All handlers use addEventListener() | 5 | No inline onclick attributes |
| Comments | 5 | At least 4 meaningful comments |
| Code runs without errors | 5 | No console errors |
| **Total** | **60** | |

---

## Due Date

Submit by the start of Week 14's class.
