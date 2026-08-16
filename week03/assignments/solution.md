# Week 3 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## Part A: Written Answers

### 1. Input vs. Output

**Input** is any data or action that a user provides to a program. On a web page, an example of input is a user typing their name into a text field on a form. **Output** is what the program produces or displays in response. An example of output on a web page is the text "Welcome, Adamu!" appearing on screen after the user submits their name.

The relationship between them is that input is what goes in, and output is what comes out after the program processes it.

### 2. The `name` Attribute

The `name` attribute identifies a piece of form data so that it can be referenced when the form is submitted. Without it, the data typed into that field would be collected by the browser but would have no label attached to it -- the receiving end (whether a server or a JavaScript function) would not know what the data represents. It would be like sending someone an envelope with a letter inside but no subject line or name on the outside.

---

## Part B: registration.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration Form</title>
</head>
<body>

    <h1>Student Registration Form</h1>
    <p>Please fill in the form below to register for your course.</p>

    <form>
        <!-- Personal information section -->
        <h2>Personal Information</h2>

        <label for="fullname">Full Name:</label><br>
        <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required><br><br>

        <label for="email">Email Address:</label><br>
        <input type="email" id="email" name="email" placeholder="you@example.com" required><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" placeholder="Create a password" required><br><br>

        <label for="dob">Date of Birth:</label><br>
        <input type="date" id="dob" name="dob"><br><br>

        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age" min="16" max="60"><br><br>

        <p>Gender: <span style="color: red;">*</span></p>
        <label>
            <input type="radio" name="gender" value="male" required> Male
        </label><br>
        <label>
            <input type="radio" name="gender" value="female"> Female
        </label><br><br>

        <!-- Academic information section -->
        <h2>Academic Information</h2>

        <label for="course">Course:</label><br>
        <select id="course" name="course" required>
            <option value="">-- Select your course --</option>
            <option value="bmis">Management Information Systems</option>
            <option value="bcs">Computer Science</option>
            <option value="bba">Business Administration</option>
            <option value="bact">Accounting</option>
        </select><br><br>

        <p>Hobbies / Interests:</p>
        <label>
            <input type="checkbox" name="interests" value="sports"> Sports
        </label><br>
        <label>
            <input type="checkbox" name="interests" value="music"> Music
        </label><br>
        <label>
            <input type="checkbox" name="interests" value="reading"> Reading
        </label><br>
        <label>
            <input type="checkbox" name="interests" value="coding"> Coding
        </label><br><br>

        <label for="bio">Short Bio:</label><br>
        <textarea id="bio" name="bio" rows="5" cols="50" placeholder="Tell us a little about yourself"></textarea><br><br>

        <!-- Submit button -->
        <button type="submit">Register</button>
    </form>

</body>
</html>
```

---

## Grading Notes

- **Written answers (10 marks):** Award full marks for answers that clearly distinguish input from output with concrete examples, and that explain the purpose of `name` with reasoning about what happens without it.
- **All fields present (15 marks):** Deduct 1-2 marks per missing field. The exact input types must match (e.g., password must use `type="password"`, not `type="text"`).
- **Labels (10 marks):** Each input should have a `<label>` connected via `for`/`id`. Wrapping the input inside the label (without `for`/`id`) is also acceptable.
- **Required fields (5 marks):** Full Name, Email, Password, Gender, and Course must have `required`. Deduct 1 mark per missing `required`.
- **Common errors:** Students often forget to give radio buttons the same `name` attribute, breaking the group. Students may also confuse `id` and `name` -- both should be present, but they serve different purposes.
