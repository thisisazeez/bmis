# Week 7 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## variables.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables and Data Types - BMIS 263</title>
</head>
<body>

    <h1>Variables and Data Types</h1>
    <p>Open the browser console (F12) to see the output of this exercise.</p>

    <script>
        // ---- Step 1: Declare variables ----
        // Using const for values that will not change
        const fullName = "Adamu Bello";
        const courseName = "BMIS 263";
        const isStudent = true;

        // Using let for values that could change
        let age = 21;
        let gpa = 3.45;

        // ---- Step 2: Display using console.log() ----
        console.log("Name:", fullName);
        console.log("Age:", age);
        console.log("Course:", courseName);
        console.log("Is a student:", isStudent);
        console.log("GPA:", gpa);

        // ---- Step 3: Check types using typeof ----
        console.log("Type of fullName:", typeof fullName);
        console.log("Type of age:", typeof age);
        console.log("Type of courseName:", typeof courseName);
        console.log("Type of isStudent:", typeof isStudent);
        console.log("Type of gpa:", typeof gpa);

        // ---- Step 4: Template literal ----
        console.log(`My name is ${fullName}, I am ${age} years old, and I study ${courseName}.`);

        // ---- Step 5: String + Number trap ----

        // This concatenates because one side is a string.
        // JavaScript converts 3 to "3" and joins them: "53"
        console.log("String + Number:", "5" + 3);

        // This adds because both sides are numbers.
        // Result: 8
        console.log("Number + Number:", 5 + 3);
    </script>

</body>
</html>
```

---

## Grading Notes

- **Variable keywords (10 marks):** Full marks if the student uses `const` for values that do not change and `let` for values that might. Using `let` for everything is acceptable but earns 7/10. Using `var` for everything earns 5/10 with a note to use modern syntax.
- **Data types (10 marks):** Age and GPA must be numbers (no quotes). Name and course must be strings (in quotes). isStudent must be `true` or `false` (no quotes, not `"true"`).
- **Template literal (10 marks):** Must use backticks, not regular quotes. Must embed at least 3 variables using `${}`. A common error is using regular quotes with `${}` -- this prints the literal text `${name}` instead of the variable value.
- **String + Number (5 marks):** Must show both cases and have a comment explaining why the results differ. Award 3/5 if the code is correct but the comment is missing.
