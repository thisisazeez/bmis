# Week 5 Assignment: CSS Layout

## BMIS 263 -- Introduction to Programming

---

## Task

Design a **multi-section webpage layout** using CSS box model properties and Flexbox. Create two files:

1. `layout.html` -- the HTML structure
2. `layout.css` -- the external stylesheet

---

## Page Structure

Your page must have the following sections, in this order:

1. **Header** -- page title and a short tagline, centred
2. **Navigation bar** -- at least 4 links, displayed horizontally using Flexbox
3. **Main content area** -- three equal-width columns side by side, each containing a heading and a paragraph (use Flexbox)
4. **Footer** -- your name and the course name, centred

---

## Requirements

### CSS Requirements

| Requirement | Details |
|---|---|
| `box-sizing: border-box` | Applied globally using `* { box-sizing: border-box; }` |
| Padding | Used on at least 3 different elements |
| Margin | Used on at least 2 different elements |
| Flexbox for navigation | Nav links displayed in a horizontal row |
| Flexbox for columns | Three columns displayed side by side with equal width |
| `gap` property | Used in at least one flex container |
| Background colours | Different background colours for header, main area, and footer |
| Border or border-radius | Used on at least one element |
| Page is not wider than the viewport | No horizontal scrollbar |

### HTML Requirements

- Valid HTML5 document structure
- Semantic elements used where appropriate (`<header>`, `<nav>`, `<main>`, `<footer>`)
- At least 2 comments

---

## Grading Rubric

| Criteria | Marks | Description |
|---|---|---|
| Valid HTML5 with semantic elements | 5 | Uses header, nav, main, footer |
| Header styled and centred | 5 | Title and tagline centred |
| Navigation bar using Flexbox | 10 | Links displayed horizontally |
| Three-column layout using Flexbox | 15 | Three equal columns side by side |
| Box model properties (padding, margin) | 10 | Padding on 3+ elements, margin on 2+ |
| `box-sizing: border-box` applied | 5 | Global rule present |
| Background colours differentiated | 5 | Header, main, and footer have distinct backgrounds |
| No horizontal scrollbar | 5 | Page fits within the viewport width |
| **Total** | **60** | |

---

## Due Date

Submit both files by the start of Week 6's class.
