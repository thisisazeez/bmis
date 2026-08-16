# Week 12 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## dom.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation - BMIS 263</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
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
            margin: 5px;
            cursor: pointer;
            border: 1px solid #333;
            border-radius: 4px;
            background-color: #f0f0f0;
        }
        button:hover {
            background-color: #ddd;
        }
        .highlighted {
            background-color: #fff3cd;
        }
        .bordered {
            border: 4px solid #333;
        }
        .rounded {
            border-radius: 50%;
        }
    </style>
</head>
<body>

    <h1>DOM Manipulation</h1>

    <!-- Feature 1: Text Changer -->
    <div class="section">
        <h2 id="changeable-heading">Click the button to change this text</h2>
        <button onclick="changeText()">Change Text</button>
    </div>

    <!-- Feature 2: Background Colour Toggler -->
    <div class="section">
        <p id="toggle-section">This section's background can be toggled.</p>
        <button onclick="toggleBackground()">Toggle Background</button>
    </div>

    <!-- Feature 3: Content Adder -->
    <div class="section">
        <h2>Dynamic Content</h2>
        <div id="item-container"></div>
        <button onclick="addItem()">Add Item</button>
    </div>

    <!-- Feature 4: Style Modifier -->
    <div class="section">
        <h2>Image Styling</h2>
        <img id="demo-image" src="https://via.placeholder.com/200" alt="Demo image for styling" width="200"><br><br>
        <button onclick="addBorder()">Add Border</button>
        <button onclick="makeRound()">Make Round</button>
        <button onclick="resetImage()">Reset</button>
    </div>

    <script>
        // ============================================
        // Feature 1: Change the heading text and colour
        // ============================================

        function changeText() {
            let heading = document.getElementById("changeable-heading");
            heading.textContent = "Text has been changed!";
            heading.style.color = "green";
        }

        // ============================================
        // Feature 2: Toggle background colour using classList
        // ============================================

        function toggleBackground() {
            let section = document.getElementById("toggle-section");
            // classList.toggle adds the class if absent, removes if present
            section.classList.toggle("highlighted");
        }

        // ============================================
        // Feature 3: Add numbered items to the container
        // ============================================

        let itemCount = 0;

        function addItem() {
            itemCount++;

            // Create a new paragraph element
            let newItem = document.createElement("p");
            newItem.textContent = `Item ${itemCount}`;

            // Append it to the container
            let container = document.getElementById("item-container");
            container.appendChild(newItem);
        }

        // ============================================
        // Feature 4: Modify image styles using classList
        // ============================================

        function addBorder() {
            let img = document.getElementById("demo-image");
            img.classList.add("bordered");
        }

        function makeRound() {
            let img = document.getElementById("demo-image");
            img.classList.add("rounded");
        }

        function resetImage() {
            let img = document.getElementById("demo-image");
            img.classList.remove("bordered");
            img.classList.remove("rounded");
        }
    </script>

</body>
</html>
```

---

## Grading Notes

- **Feature 1 (10 marks):** Text must change (5) and colour must change (5). Using `innerHTML` instead of `textContent` is acceptable but note the preference for `textContent`.
- **Feature 2 (10 marks):** Must toggle between two states. Using `classList.toggle()` (preferred) or manually checking and switching with `if/else` (acceptable). Must work repeatedly (not just once).
- **Feature 3 (15 marks):** Each click must add a new element (5). Items must have incrementing numbers (5). The counter must persist between clicks -- a common error is resetting the counter inside the function (5).
- **Feature 4 (10 marks):** All three buttons must work. "Reset" must undo both the border and the rounding. Using `style` properties directly is acceptable; using `classList` is preferred.
- **classList (5 marks):** Must be used in at least one feature. Using only `element.style` for everything earns 0 for this criterion.
