# Week 13 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## events.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events - BMIS 263</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 700px;
            margin: 0 auto;
        }
        .section {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
        }
        button {
            padding: 8px 16px;
            margin: 4px;
            cursor: pointer;
            border: 1px solid #555;
            border-radius: 4px;
            background: #f0f0f0;
        }
        button:hover { background: #ddd; }
        #colour-box {
            width: 100%;
            height: 80px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 10px;
            transition: background-color 0.3s;
        }
        textarea {
            width: 100%;
            padding: 8px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        input[type="text"], input[type="email"] {
            padding: 8px;
            width: 100%;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .error { color: red; }
        .success { color: green; }
    </style>
</head>
<body>

    <h1>Event Handling</h1>

    <!-- Feature 1: Click to Display Message -->
    <div class="section">
        <h2>1. Click Event</h2>
        <button id="click-btn">Click Me</button>
        <p id="click-output"></p>
    </div>

    <!-- Feature 2: Live Character Counter -->
    <div class="section">
        <h2>2. Character Counter</h2>
        <textarea id="text-area" rows="4" placeholder="Start typing..."></textarea>
        <p id="char-count">Characters: 0</p>
    </div>

    <!-- Feature 3: Colour Changer -->
    <div class="section">
        <h2>3. Colour Changer</h2>
        <div id="colour-box"></div>
        <button id="red-btn">Red</button>
        <button id="green-btn">Green</button>
        <button id="blue-btn">Blue</button>
    </div>

    <!-- Feature 4: Form with Validation -->
    <div class="section">
        <h2>4. Form Validation</h2>
        <form id="contact-form">
            <label for="form-name">Name:</label><br>
            <input type="text" id="form-name" placeholder="Enter your name"><br>
            <label for="form-email">Email:</label><br>
            <input type="email" id="form-email" placeholder="Enter your email"><br><br>
            <button type="submit">Submit</button>
        </form>
        <p id="form-output"></p>
    </div>

    <script>
        // ============================================
        // Feature 1: Click event using addEventListener
        // ============================================

        let clickBtn = document.getElementById("click-btn");
        let clickOutput = document.getElementById("click-output");

        clickBtn.addEventListener("click", function() {
            clickOutput.textContent = "You clicked the button!";
            clickOutput.style.color = "green";
        });

        // ============================================
        // Feature 2: Live character counter using "input" event
        // Updates on every keystroke in the textarea
        // ============================================

        let textArea = document.getElementById("text-area");
        let charCount = document.getElementById("char-count");

        textArea.addEventListener("input", function() {
            let count = textArea.value.length;
            charCount.textContent = `Characters: ${count}`;
        });

        // ============================================
        // Feature 3: Colour changer buttons
        // Each button changes the box's background colour
        // ============================================

        let colourBox = document.getElementById("colour-box");

        document.getElementById("red-btn").addEventListener("click", function() {
            colourBox.style.backgroundColor = "#e74c3c";
        });

        document.getElementById("green-btn").addEventListener("click", function() {
            colourBox.style.backgroundColor = "#2ecc71";
        });

        document.getElementById("blue-btn").addEventListener("click", function() {
            colourBox.style.backgroundColor = "#3498db";
        });

        // ============================================
        // Feature 4: Form validation with preventDefault
        // Prevents page reload and validates input
        // ============================================

        let form = document.getElementById("contact-form");
        let formOutput = document.getElementById("form-output");

        form.addEventListener("submit", function(event) {
            // Stop the form from reloading the page
            event.preventDefault();

            let name = document.getElementById("form-name").value;
            let email = document.getElementById("form-email").value;

            if (name === "" || email === "") {
                formOutput.textContent = "Please fill in all fields.";
                formOutput.className = "error";
            } else {
                formOutput.textContent = `Thank you, ${name}! We will contact you at ${email}.`;
                formOutput.className = "success";
            }
        });
    </script>

</body>
</html>
```

---

## Grading Notes

- **addEventListener (5 marks):** No inline `onclick` attributes in the HTML. All event handling must be in the `<script>` block using `addEventListener()`. Deduct all 5 marks if any inline handler is used.
- **Character counter (10 marks):** Must use the `"input"` event (not `"keydown"` or `"keyup"`, which do not capture paste events). Must update on every keystroke.
- **Form validation (15 marks):** `event.preventDefault()` must be present (5 marks). Validation must check both fields (5 marks). Messages must appear on the page using `textContent`, not `alert()` (5 marks).
- **Common errors:**
  - Forgetting `event.preventDefault()` -- the page reloads and the output disappears.
  - Using `onclick` in HTML instead of `addEventListener()` in JavaScript.
  - Reading `input.textContent` instead of `input.value` for form fields (textContent gives the label text, value gives what the user typed).
