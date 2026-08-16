# Week 2 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## Page 1: introduction.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction - Adamu Bello</title>
</head>
<body>

    <!-- Main heading: student's full name -->
    <h1>Adamu Bello</h1>

    <!-- Subheading: course name -->
    <h2>BSc Management Information Systems</h2>

    <!-- Short paragraph about the student -->
    <p>
        My name is Adamu Bello and I am a second-year student studying Management
        Information Systems. I am interested in learning how technology can be used
        to solve real-world problems, especially in business. This is my first
        programming course, and I am looking forward to building my own web pages
        by the end of the semester.
    </p>

    <!-- Horizontal rule to separate sections -->
    <hr>

    <!-- Unordered list of hobbies -->
    <h3>My Hobbies</h3>
    <ul>
        <li>Playing football</li>
        <li>Reading tech news</li>
        <li>Watching documentaries</li>
    </ul>

</body>
</html>
```

---

## Page 2: profile.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - Adamu Bello</title>
</head>
<body>

    <!-- Profile heading -->
    <h1>Adamu Bello - Profile</h1>

    <!-- Profile image with alt text -->
    <img src="https://via.placeholder.com/300x200" alt="A placeholder image representing Adamu's profile photo" width="300" height="200">

    <!-- Description paragraph -->
    <p>
        This is my profile page for BMIS 263. I created this page to practise
        using HTML elements including images, links, and lists. The image above
        is a placeholder that I will replace with a real photo later.
    </p>

    <!-- Link to an external website, opens in a new tab -->
    <p>
        Visit my university's website:
        <a href="https://www.lincolnuni.edu.ng" target="_blank">Lincoln University</a>
    </p>

    <!-- Ordered list of favourite courses -->
    <h2>My Top 3 Favourite Courses</h2>
    <ol>
        <li>Introduction to Programming</li>
        <li>Business Communication</li>
        <li>Principles of Management</li>
    </ol>

</body>
</html>
```

---

## Grading Notes

- **Valid structure (10 marks):** Both files must have `<!DOCTYPE html>`, `<html>`, `<head>` with `<title>`, and `<body>`. Deduct 3 marks per file if missing.
- **Introduction page elements (15 marks):** h1 (3), h2 (3), paragraph with 3+ sentences (3), unordered list with 3 items (3), horizontal rule (3).
- **Profile page elements (15 marks):** heading (3), image with alt (3), paragraph (3), link with target="_blank" (3), ordered list with 3 items (3).
- **Nesting (10 marks):** All tags properly opened and closed, correct nesting order. Deduct 2 marks per nesting error.
- **Comments (5 marks):** At least one comment per file. Deduct all 5 if comments are completely absent.
- **Readability (5 marks):** Consistent indentation, reasonable spacing. Do not penalise minor inconsistencies -- look for whether the student made an effort.

### Common Student Errors to Watch For

1. Missing `<!DOCTYPE html>` -- very common in first submissions.
2. Forgetting the closing `</li>` tags inside lists.
3. Using `<img>` without the `alt` attribute.
4. Using `href` on an `<img>` tag instead of wrapping the image in an `<a>` tag (if they try to make the image clickable).
5. Omitting `target="_blank"` on the link, or using `target="blank"` (missing the underscore).
