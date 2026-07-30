# Week 4: Introduction to CSS

## BMIS 263 -- Introduction to Programming

---

## Overview

You have spent two weeks building HTML pages. They work, but they look plain -- default fonts, no colours, no spacing control. This week, we fix that.

CSS -- Cascading Style Sheets -- controls how HTML elements look on screen. HTML defines **what** the content is; CSS defines **how** it appears. Separating structure from presentation is one of the most important principles in web development.

By the end of this session, you will be able to:

- Explain what CSS is and why it exists separately from HTML
- Write CSS rules using selectors, properties, and values
- Apply CSS using inline, internal, and external methods
- Change colours, fonts, sizes, and spacing

---

## 1. What Is CSS?

CSS stands for **Cascading Style Sheets**.

- **Cascading** means that when multiple styles apply to the same element, there is a priority system that determines which style wins. More on this shortly.
- **Style** means visual appearance: colours, fonts, spacing, layout.
- **Sheet** means a separate document (or section) that contains these style rules.

### Why Separate CSS from HTML?

Consider this analogy: a manuscript and its typesetting are separate concerns. A writer creates the text and structure (chapters, headings, paragraphs). A designer decides the font, margins, and colour scheme. If the designer changes their mind about the font, they do not need to rewrite the manuscript. If the writer adds a new chapter, it automatically picks up the existing design.

CSS works the same way:

- **HTML** is the manuscript (content and structure).
- **CSS** is the typesetting (appearance and layout).
- Change the CSS, and the entire site's look changes without touching the HTML.
- Change the HTML, and the new content automatically inherits the existing styles.

---

## 2. CSS Syntax

A CSS rule has three parts:

```css
selector {
    property: value;
}
```

- **Selector** -- which HTML element(s) to style
- **Property** -- which aspect of the element to change (e.g., `color`, `font-size`)
- **Value** -- what to set that property to (e.g., `red`, `16px`)

Example:

```css
p {
    color: blue;
    font-size: 16px;
}
```

This says: "Find all `<p>` elements. Make their text blue and 16 pixels in size."

### Multiple Properties

You can set as many properties as you want inside a single rule. Each property-value pair ends with a semicolon:

```css
h1 {
    color: darkblue;
    font-size: 32px;
    text-align: center;
    font-family: Arial, sans-serif;
}
```

---

## 3. How to Apply CSS

There are three ways to apply CSS to HTML. They differ in where the CSS is written and how widely it applies.

### Method 1: Inline CSS

CSS is written directly on the HTML element using the `style` attribute:

```html
<p style="color: red; font-size: 18px;">This text is red and 18px.</p>
```

**When to use it:** Almost never. It mixes structure and presentation, making your code harder to maintain. Useful only for quick one-off testing.

### Method 2: Internal CSS

CSS is written inside a `<style>` tag in the `<head>` of the HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internal CSS Example</title>
    <style>
        body {
            background-color: #f0f0f0;
        }
        h1 {
            color: darkblue;
            text-align: center;
        }
        p {
            color: #333;
            font-size: 16px;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Welcome</h1>
    <p>This page uses internal CSS.</p>
</body>
</html>
```

**When to use it:** For single-page projects or quick prototypes. Keeps styles close to the content they affect.

### Method 3: External CSS (Recommended)

CSS is written in a separate `.css` file and linked to the HTML document:

**styles.css:**
```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: darkblue;
    text-align: center;
}

p {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome</h1>
    <p>This page uses external CSS.</p>
</body>
</html>
```

**When to use it:** Always, for any project with more than one page. One CSS file can style an entire website. Change the CSS file once, and every page that links to it updates automatically.

---

## 4. Selectors

Selectors are how you tell CSS which elements to style. Here are the most important ones.

### Element Selector

Selects all elements of a given type:

```css
p {
    color: green;
}
/* Styles ALL paragraphs on the page */
```

### Class Selector

Selects elements that have a specific `class` attribute. Written with a dot (`.`) before the class name:

```html
<p class="highlight">This is highlighted.</p>
<p>This is not.</p>
```

```css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

Classes are reusable -- you can apply the same class to many elements. This is the selector you will use most often.

### ID Selector

Selects the one element with a specific `id` attribute. Written with a hash (`#`) before the ID:

```html
<h1 id="page-title">Welcome</h1>
```

```css
#page-title {
    color: navy;
    border-bottom: 2px solid navy;
}
```

IDs must be unique on a page -- only one element can have a given ID. Use IDs for one-of-a-kind elements (like a page header); use classes for repeated styles.

### Grouping Selectors

Apply the same styles to multiple selectors by separating them with commas:

```css
h1, h2, h3 {
    font-family: Georgia, serif;
    color: #333;
}
```

---

## 5. Common CSS Properties

### Colours

```css
/* Named colours */
color: red;
background-color: lightblue;

/* Hex codes (most common in professional work) */
color: #333333;
background-color: #f5f5f5;

/* RGB */
color: rgb(51, 51, 51);
background-color: rgb(245, 245, 245);
```

### Text

```css
font-size: 16px;              /* size of the text */
font-family: Arial, sans-serif; /* font face, with a fallback */
font-weight: bold;             /* bold text */
font-style: italic;            /* italic text */
text-align: center;            /* centre, left, right, justify */
text-decoration: underline;    /* underline, none, line-through */
line-height: 1.6;              /* spacing between lines */
```

### Background

```css
background-color: #f0f0f0;
background-image: url('background.jpg');
background-size: cover;
background-repeat: no-repeat;
```

### Borders

```css
border: 1px solid black;      /* width, style, colour -- all in one */
border-radius: 8px;            /* rounded corners */
```

### Width and Height

```css
width: 300px;
height: 200px;
max-width: 100%;               /* responsive: never wider than its container */
```

---

## 6. The Cascade and Specificity

"Cascading" means that when multiple rules target the same element, CSS uses a priority system to decide which rule wins.

The priority order (from lowest to highest):

1. **Element selectors** (`p`, `h1`) -- lowest specificity
2. **Class selectors** (`.highlight`) -- medium specificity
3. **ID selectors** (`#page-title`) -- high specificity
4. **Inline styles** (`style="..."`) -- highest specificity

If two rules have the same specificity, the one that appears **later** in the CSS wins.

Example:

```css
p {
    color: blue;    /* element selector */
}

.special {
    color: green;   /* class selector -- higher specificity, wins */
}
```

```html
<p class="special">What colour am I?</p>
<!-- Answer: green, because .special has higher specificity than p -->
```

For now, the practical rule is: **use classes for most styling, use IDs sparingly, avoid inline styles.**

---

## 7. CSS Comments

```css
/* This is a CSS comment */
/* The browser ignores everything between these markers */

h1 {
    color: navy; /* Dark blue heading */
}
```

---

## Key Terms

- **CSS** -- Cascading Style Sheets; controls the visual presentation of HTML elements
- **Selector** -- identifies which elements a CSS rule applies to
- **Property** -- the visual characteristic being changed (e.g., `color`, `font-size`)
- **Value** -- what the property is set to (e.g., `red`, `16px`)
- **Class** -- a reusable label applied to elements via the `class` attribute; selected in CSS with a dot (`.`)
- **ID** -- a unique identifier for a single element; selected in CSS with a hash (`#`)
- **Specificity** -- the priority system CSS uses to resolve conflicting rules
- **External stylesheet** -- a separate `.css` file linked to HTML via `<link>`

---

## What Comes Next

Next week, we go deeper into CSS with the **box model** and **layout**. You will learn how every HTML element is really a rectangular box, and how to control the spacing, size, and arrangement of those boxes to create professional page layouts.
