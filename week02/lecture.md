# Week 2: HTML Basics

## BMIS 263 -- Introduction to Programming

---

## Overview

This week you write your first code. HTML -- HyperText Markup Language -- is the language that gives structure to every web page you have ever visited. It is not a programming language (it has no logic, no decisions, no loops), but it is the foundation everything else in this course builds on.

By the end of this session, you will be able to:

- Explain what HTML is and what it does
- Write a valid HTML document from scratch
- Use tags, elements, and attributes correctly
- Create a structured web page with headings, paragraphs, images, and links

---

## 1. What Is HTML?

HTML stands for **HyperText Markup Language**.

- **HyperText** means text that links to other text -- this is how the web works: pages link to other pages.
- **Markup** means you are annotating content to describe its structure. You are telling the browser "this is a heading," "this is a paragraph," "this is an image" -- not telling it how to think.
- **Language** means it has rules (syntax) you must follow precisely, just like the algorithms from Week 1.

HTML describes **what** content is, not how it looks. How it looks is CSS's job (Week 4). How it behaves is JavaScript's job (Week 6). This separation matters, and we will return to it throughout the course.

---

## 2. The Structure of an HTML Document

Every HTML document follows the same skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <!-- Your visible content goes here -->
</body>
</html>
```

Let us break this down line by line.

### `<!DOCTYPE html>`

This is a declaration (not a tag) that tells the browser: "this document is written in HTML5." Always include it as the very first line. Without it, the browser may render your page in a legacy mode that behaves unpredictably.

### `<html lang="en">`

The root element. Everything in your document lives inside this. The `lang="en"` attribute tells the browser (and screen readers) the page is in English.

### `<head>`

The head contains **metadata** -- information about the page that is not displayed on screen. This includes:

- `<meta charset="UTF-8">` -- the character encoding (supports all languages and symbols)
- `<meta name="viewport" ...>` -- makes the page responsive on mobile devices
- `<title>` -- the text that appears in the browser tab

### `<body>`

The body contains everything the user actually sees on the page: text, images, links, forms, and so on.

---

## 3. Tags, Elements, and Attributes

These three terms are the vocabulary of HTML. Get them straight now, because every week from here uses them.

### Tags

A tag is a keyword surrounded by angle brackets. Most tags come in pairs:

```html
<p>This is a paragraph.</p>
```

- `<p>` is the **opening tag**
- `</p>` is the **closing tag** (note the forward slash)
- The text between them is the **content**

Some tags are **self-closing** -- they do not have content and do not need a closing tag:

```html
<br>
<img src="photo.jpg" alt="A photo">
<hr>
```

### Elements

An element is the entire unit: opening tag + content + closing tag.

```
<p>This is a paragraph.</p>
|___|__________________|____|
 tag     content       tag
|______________________________|
          element
```

### Attributes

Attributes provide additional information about an element. They are written inside the opening tag as `name="value"` pairs:

```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

- `href="https://example.com"` -- the URL the link points to
- `target="_blank"` -- opens the link in a new tab
- `a` -- the tag name (anchor, meaning "link")

Rules for attributes:
- Always use lowercase attribute names
- Always quote attribute values (double quotes by convention)
- Separate multiple attributes with spaces

---

## 4. Common HTML Elements

### Headings

HTML has six levels of headings, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection Title</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

Use `<h1>` only once per page (it represents the page's main topic). Use the others in order -- do not skip from `<h1>` to `<h4>` just because you prefer the font size. Headings describe document structure, not appearance.

### Paragraphs

```html
<p>This is a paragraph of text. HTML ignores extra whitespace
and line breaks in your source code. If you want a new paragraph,
you need a new p element.</p>

<p>This is a second paragraph.</p>
```

### Line Breaks

If you need a line break within a paragraph (not a new paragraph), use `<br>`:

```html
<p>Line one<br>Line two<br>Line three</p>
```

Use this sparingly. Most of the time, a new `<p>` element is more appropriate.

### Horizontal Rules

A horizontal line to visually separate sections:

```html
<hr>
```

### Bold and Italic

```html
<strong>This text is bold (and semantically important).</strong>
<em>This text is italic (and semantically emphasised).</em>
```

Note: `<b>` and `<i>` also exist, but `<strong>` and `<em>` are preferred because they carry meaning (importance and emphasis), not just appearance.

### Lists

**Unordered list** (bullet points):

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

**Ordered list** (numbered):

```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

### Links

```html
<a href="https://www.google.com">Go to Google</a>
```

The `href` attribute specifies the destination URL. The text between the tags is what the user sees and clicks.

To open in a new tab:

```html
<a href="https://www.google.com" target="_blank">Go to Google</a>
```

### Images

```html
<img src="photo.jpg" alt="A description of the photo">
```

- `src` -- the path to the image file (can be a URL or a local file path)
- `alt` -- alternative text displayed if the image fails to load, and read aloud by screen readers for visually impaired users. **Always include alt text.**

To set a specific size:

```html
<img src="photo.jpg" alt="A description" width="300" height="200">
```

---

## 5. Semantic HTML

"Semantic" means "relating to meaning." Semantic HTML elements describe what their content **is**, not how it should look.

Some semantic elements you should know:

| Element | Meaning |
|---|---|
| `<header>` | The header section of a page or section |
| `<nav>` | Navigation links |
| `<main>` | The main content of the page |
| `<section>` | A thematic grouping of content |
| `<article>` | Self-contained content (like a blog post) |
| `<footer>` | The footer section of a page or section |

Why use them? Because they make your code more readable (both for humans and for search engines), and they help screen readers navigate your page. A `<div>` tells the browser nothing about what it contains. A `<nav>` tells it "this is navigation."

---

## 6. Comments

Comments are notes in your code that the browser ignores. They are for humans reading the source:

```html
<!-- This is a comment. The browser will not display it. -->

<!-- TODO: Add the contact section here -->
```

Recall from Week 1 that good documentation is a characteristic of a good program. Comments are one form of documentation.

---

## 7. How to Create and View an HTML File

1. Open **Visual Studio Code** (or any text editor)
2. Create a new file and save it with a `.html` extension (e.g., `index.html`)
3. Type your HTML code
4. Save the file
5. Open the file in a web browser (double-click it, or right-click and choose "Open with" your browser)

That is it. No server needed, no installation, no compilation. The browser reads your HTML file directly.

---

## Key Terms

- **HTML** -- HyperText Markup Language; describes the structure of web pages
- **Tag** -- a keyword in angle brackets that defines an element (`<p>`, `<h1>`, `<img>`)
- **Element** -- a complete unit: opening tag + content + closing tag
- **Attribute** -- additional information attached to an element (`href`, `src`, `alt`)
- **Semantic HTML** -- elements that convey meaning about their content, not just structure
- **Self-closing tag** -- a tag that does not need a closing tag (`<br>`, `<img>`, `<hr>`)

---

## What Comes Next

Next week, we build on HTML by introducing forms -- the primary way web pages collect input from users. This connects directly to the input/output concept from Week 1: a form is an input mechanism, and what the program does with that input is the logic.
