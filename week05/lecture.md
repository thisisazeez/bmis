# Week 5: CSS Layout

## BMIS 263 -- Introduction to Programming

---

## Overview

Last week you learned to change colours, fonts, and borders. This week you learn to control **where things go on the page**. Layout is the hardest part of CSS for beginners, and the reason is that every HTML element is actually a rectangular box with invisible edges. Until you understand that box, layout will feel unpredictable.

By the end of this session, you will be able to:

- Explain the CSS box model (content, padding, border, margin)
- Control spacing around and inside elements
- Use `display` to control element flow
- Use Flexbox to create multi-column layouts

---

## 1. The Box Model

Every HTML element -- whether it is a heading, a paragraph, an image, or a div -- is rendered by the browser as a **rectangular box**. That box has four layers, from inside to outside:

```
+------------------------------------------+
|               MARGIN                     |
|  +------------------------------------+  |
|  |             BORDER                 |  |
|  |  +------------------------------+  |  |
|  |  |          PADDING             |  |  |
|  |  |  +------------------------+  |  |  |
|  |  |  |       CONTENT          |  |  |  |
|  |  |  |   (text, image, etc.)  |  |  |  |
|  |  |  +------------------------+  |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
+------------------------------------------+
```

### Content

The actual stuff inside the element -- the text, the image, the child elements.

### Padding

Space **inside** the border, between the content and the border. Padding pushes the content inward. The padding area shares the element's background colour.

```css
.box {
    padding: 20px;          /* 20px on all four sides */
    padding-top: 10px;      /* just the top */
    padding: 10px 20px;     /* 10px top/bottom, 20px left/right */
    padding: 10px 20px 15px 25px;  /* top, right, bottom, left (clockwise) */
}
```

### Border

The visible (or invisible) edge of the box. You styled borders last week:

```css
.box {
    border: 2px solid #333;
    border-radius: 8px;
}
```

### Margin

Space **outside** the border, between this element and its neighbours. Margin pushes other elements away. Margin is always transparent -- it does not take the element's background colour.

```css
.box {
    margin: 20px;           /* 20px on all sides */
    margin-bottom: 30px;    /* just the bottom */
    margin: 0 auto;         /* 0 top/bottom, auto left/right -- centres the element */
}
```

### The Total Width Problem

By default, the `width` you set in CSS applies only to the **content** area. Padding and border are added on top of it:

```css
.box {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}
/* Actual rendered width: 300 + 20 + 20 + 2 + 2 = 344px */
```

This catches everyone off guard. The fix is `box-sizing: border-box`, which makes `width` include padding and border:

```css
* {
    box-sizing: border-box;
}
/* Now width: 300px means the total box is 300px, padding and border included */
```

**Best practice:** Put `box-sizing: border-box` on everything (`*`) at the top of your CSS file. Professional developers do this universally.

---

## 2. Display Property

The `display` property controls how an element behaves in the page flow.

### Block Elements

Block elements take up the **full width** of their container and start on a new line:

```css
display: block;
```

By default, these are block elements: `<div>`, `<p>`, `<h1>` through `<h6>`, `<section>`, `<header>`, `<footer>`, `<form>`, `<ul>`, `<ol>`.

### Inline Elements

Inline elements take up only as much width as their content needs and do **not** start on a new line:

```css
display: inline;
```

By default, these are inline: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`.

You cannot set `width` or `height` on inline elements. If you need to, use:

```css
display: inline-block;
```

`inline-block` sits on the same line as other inline elements but accepts width, height, margin, and padding like a block element.

### None

```css
display: none;
```

The element is completely removed from the page flow. It is invisible and takes up no space. You will use this with JavaScript later to show/hide elements.

---

## 3. Flexbox

Flexbox is a CSS layout system designed to arrange elements in a row or column. Before Flexbox, creating multi-column layouts required hacks. Flexbox makes it straightforward.

### The Concept

You have a **container** (the parent) and **items** (the children). You apply `display: flex` to the container, and the items arrange themselves automatically.

```css
.container {
    display: flex;
}
```

```html
<div class="container">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
</div>
```

By default, flex items arrange themselves in a **row** (side by side, left to right).

### flex-direction

Controls whether items flow in a row or a column:

```css
.container {
    display: flex;
    flex-direction: row;      /* default: left to right */
}

.container {
    display: flex;
    flex-direction: column;   /* top to bottom, like normal block flow */
}
```

### justify-content

Controls how items are distributed along the **main axis** (horizontally, if direction is row):

```css
.container {
    display: flex;
    justify-content: flex-start;    /* items packed to the start (default) */
    justify-content: center;         /* items centred */
    justify-content: space-between;  /* items spread out, no space at edges */
    justify-content: space-around;   /* items spread out, equal space around each */
    justify-content: space-evenly;   /* items spread out, equal gaps everywhere */
}
```

### align-items

Controls how items are aligned along the **cross axis** (vertically, if direction is row):

```css
.container {
    display: flex;
    align-items: stretch;    /* items stretch to fill the container height (default) */
    align-items: center;     /* items centred vertically */
    align-items: flex-start; /* items aligned to the top */
    align-items: flex-end;   /* items aligned to the bottom */
}
```

### gap

Adds space between flex items without using margins:

```css
.container {
    display: flex;
    gap: 20px;
}
```

### flex-wrap

By default, flex items all squeeze onto one line. To allow them to wrap to the next line:

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

### Practical Example: Three-Column Layout

```css
.container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.column {
    flex: 1;                    /* each column takes equal space */
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
}
```

```html
<div class="container">
    <div class="column">
        <h3>Column 1</h3>
        <p>Content goes here.</p>
    </div>
    <div class="column">
        <h3>Column 2</h3>
        <p>Content goes here.</p>
    </div>
    <div class="column">
        <h3>Column 3</h3>
        <p>Content goes here.</p>
    </div>
</div>
```

---

## 4. Centring Things

Centring is one of the most common layout tasks, and it has historically been one of the most frustrating. Here are the reliable methods:

### Centre text inside an element

```css
.box {
    text-align: center;
}
```

### Centre a block element horizontally

```css
.box {
    width: 600px;
    margin: 0 auto;    /* auto left and right margins centre the block */
}
```

### Centre anything with Flexbox

```css
.container {
    display: flex;
    justify-content: center;  /* horizontal centre */
    align-items: center;      /* vertical centre */
    height: 100vh;            /* full viewport height, so vertical centring is visible */
}
```

---

## Key Terms

- **Box model** -- the four-layer model (content, padding, border, margin) that governs the size and spacing of every HTML element
- **Padding** -- space inside the border, between the content and the border edge
- **Margin** -- space outside the border, between the element and its neighbours
- **`box-sizing: border-box`** -- makes width/height include padding and border, not just content
- **Block element** -- takes full width, starts on a new line
- **Inline element** -- takes only as much width as needed, does not start a new line
- **Flexbox** -- a CSS layout system for arranging items in rows or columns with control over spacing and alignment
- **`justify-content`** -- controls distribution along the main axis (horizontal in a row)
- **`align-items`** -- controls alignment along the cross axis (vertical in a row)

---

## What Comes Next

You now have the tools to structure pages (HTML), collect input (forms), and control appearance and layout (CSS). Next week, we add the third and final technology: **JavaScript** -- the language that brings logic, decisions, and interactivity to your web pages.
