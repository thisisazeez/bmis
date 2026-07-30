# Week 5 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## layout.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website Layout - BMIS 263</title>
    <link rel="stylesheet" href="layout.css">
</head>
<body>

    <!-- Header section -->
    <header>
        <h1>My Website</h1>
        <p>A multi-section layout built with CSS Flexbox</p>
    </header>

    <!-- Navigation bar -->
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
    </nav>

    <!-- Main content: three columns -->
    <main>
        <div class="column">
            <h2>About Us</h2>
            <p>
                We are a learning community dedicated to understanding the
                fundamentals of web development. Our courses cover HTML, CSS,
                and JavaScript from the ground up.
            </p>
        </div>
        <div class="column">
            <h2>Our Courses</h2>
            <p>
                We offer introductory courses in web programming, including
                page structure with HTML, visual design with CSS, and
                interactivity with JavaScript. No prior experience required.
            </p>
        </div>
        <div class="column">
            <h2>Get Started</h2>
            <p>
                Ready to begin? All you need is a text editor and a web
                browser. Our step-by-step materials guide you through
                building your first web page to creating interactive
                applications.
            </p>
        </div>
    </main>

    <!-- Footer -->
    <footer>
        <p>Adamu Bello -- BMIS 263: Introduction to Programming</p>
    </footer>

</body>
</html>
```

---

## layout.css

```css
/* Apply border-box globally so width includes padding and border */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

/* ---- Header ---- */
header {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 30px 20px;
}

header h1 {
    font-size: 28px;
    margin-bottom: 5px;
}

header p {
    font-size: 14px;
    color: #bdc3c7;
}

/* ---- Navigation ---- */
nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: #34495e;
    padding: 12px 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

nav a:hover {
    text-decoration: underline;
}

/* ---- Main content: three columns ---- */
main {
    display: flex;
    gap: 20px;
    padding: 30px 20px;
    background-color: #ecf0f1;
    max-width: 1000px;
    margin: 0 auto;
}

.column {
    flex: 1;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
}

.column h2 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 20px;
}

.column p {
    font-size: 15px;
    color: #555;
}

/* ---- Footer ---- */
footer {
    background-color: #2c3e50;
    color: #bdc3c7;
    text-align: center;
    padding: 15px 20px;
    font-size: 14px;
}
```

---

## Grading Notes

- **Semantic elements (5 marks):** Look for `<header>`, `<nav>`, `<main>`, `<footer>`. Using `<div>` for everything loses these marks.
- **Navigation Flexbox (10 marks):** The nav must use `display: flex` and links must appear horizontally. If links are stacked vertically, deduct full marks.
- **Three columns (15 marks):** Must use `display: flex` on the container and `flex: 1` (or equivalent widths) on the columns. Using `float` is acceptable but less ideal -- award partial credit.
- **Common errors:** Students may set column widths to fixed pixel values that overflow the page on smaller screens. The `max-width` and `flex: 1` approach avoids this.
