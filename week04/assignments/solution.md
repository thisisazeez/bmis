# Week 4 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## styled-profile.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Profile - Adamu Bello</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header id="page-header">
        <h1>Adamu Bello</h1>
        <p class="subtitle">BSc Management Information Systems, Year 2</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>
            I am a second-year student studying Management Information Systems
            at Lincoln University. I am passionate about using technology to solve
            business problems and I enjoy learning new programming concepts.
        </p>
        <p>
            This is my first programming course, and I built this page to practise
            HTML and CSS.
        </p>
    </section>

    <section>
        <h2>My Photo</h2>
        <img src="https://via.placeholder.com/250x250" alt="Profile photo of Adamu Bello" class="profile-photo">
    </section>

    <section>
        <h2>My Courses</h2>
        <ul>
            <li>Introduction to Programming</li>
            <li>Business Statistics</li>
            <li>Principles of Marketing</li>
        </ul>
    </section>

    <section>
        <h2>Contact</h2>
        <p>
            Visit my university:
            <a href="https://www.lincolnuni.edu.ng" target="_blank">Lincoln University</a>
        </p>
    </section>

    <footer>
        <p class="subtitle">Created for BMIS 263 - Week 4 CSS Exercise</p>
    </footer>

</body>
</html>
```

---

## styles.css

```css
/* ============================
   BMIS 263 - Week 4 Solution
   External CSS for styled profile page
   ============================ */

/* Page-wide styles */
body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    color: #333;
    margin: 0;
    padding: 20px;
    line-height: 1.6;
}

/* ID selector: style the page header */
#page-header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 20px;
}

/* Heading styles */
h1 {
    font-size: 28px;
    margin: 0;
}

h2 {
    color: #2c3e50;
    font-size: 22px;
    border-bottom: 2px solid #2c3e50;
    padding-bottom: 5px;
}

/* Paragraph styles */
p {
    font-size: 16px;
    color: #555;
    line-height: 1.8;
}

/* Class selector: subtitle text */
.subtitle {
    font-style: italic;
    color: #aaa;
    font-size: 14px;
}

/* Class selector: profile photo styling */
.profile-photo {
    border: 3px solid #2c3e50;
    border-radius: 50%;
}

/* Link styling */
a {
    color: #2980b9;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* List styling */
ul {
    padding-left: 20px;
}

li {
    margin-bottom: 5px;
}

/* Section spacing */
section {
    background-color: white;
    padding: 15px 20px;
    margin-bottom: 15px;
    border-radius: 5px;
}

/* Footer styling */
footer {
    text-align: center;
    margin-top: 30px;
}
```

---

## Grading Notes

- **External CSS linked (5 marks):** The `<link rel="stylesheet" href="styles.css">` must be in the `<head>`. Deduct all 5 if the student used only internal or inline CSS.
- **Class selector (10 marks):** Must appear in both the HTML (as a `class` attribute) and the CSS (as `.classname`). Simply writing a class in CSS that is not applied to any HTML element does not count.
- **ID selector (5 marks):** Same principle -- must be in both HTML and CSS.
- **Common errors:** Students often forget the dot (`.`) before class names or the hash (`#`) before IDs in CSS. Students may also write `href="styles.css"` but place the CSS file in a different folder without adjusting the path.
