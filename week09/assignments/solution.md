# Week 9 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## conditionals.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditional Statements - BMIS 263</title>
</head>
<body>

    <h1>Conditional Statements</h1>
    <p>This page runs two programs that use if/else logic.</p>

    <script>
        // ============================================
        // PROGRAM 1: Pass/Fail Checker with Grades
        // ============================================

        // Collect the test score from the user
        let score = parseFloat(prompt("Enter your test score (0-100):"));

        // Check if the input is a valid number
        if (isNaN(score)) {
            alert("Please enter a valid score between 0 and 100.");
        } else if (score < 0 || score > 100) {
            // Score is a number but outside the valid range
            alert("Please enter a valid score between 0 and 100.");
        } else if (score >= 70) {
            alert(`You scored ${score}. Grade A - Excellent`);
        } else if (score >= 60) {
            alert(`You scored ${score}. Grade B - Very Good`);
        } else if (score >= 50) {
            alert(`You scored ${score}. Grade C - Pass`);
        } else {
            alert(`You scored ${score}. Grade F - Fail`);
        }

        // ============================================
        // PROGRAM 2: Age Category Checker
        // ============================================

        // Collect the age from the user
        let age = parseInt(prompt("Enter your age:"));

        // Determine the age category using conditional logic
        if (isNaN(age) || age < 0) {
            alert("Invalid age. Please enter a positive number.");
        } else if (age <= 12) {
            alert(`Age ${age}: You are a Child.`);
        } else if (age <= 17) {
            alert(`Age ${age}: You are a Teenager.`);
        } else if (age <= 64) {
            alert(`Age ${age}: You are an Adult.`);
        } else {
            alert(`Age ${age}: You are a Senior.`);
        }
    </script>

</body>
</html>
```

---

## Grading Notes

- **Grade boundaries (15 marks):** The boundaries must be correct. A common error is using `>` instead of `>=`, which misclassifies boundary scores (e.g., exactly 70 getting Grade B instead of A). Test with boundary values: 0, 49, 50, 59, 60, 69, 70, 100.
- **Input validation (5 marks each):** Must handle both NaN (non-numeric input) and out-of-range values. Students who only check for NaN but not range earn 3/5. Students who check neither earn 0/5.
- **Order of conditions:** If a student puts `score >= 50` before `score >= 70`, the logic breaks (a score of 75 would match `>= 50` first). If the output is wrong because of ordering, deduct from the grade logic marks, not the syntax marks.
- **Age categories:** The ranges must not overlap or leave gaps. Testing values: -1, 0, 12, 13, 17, 18, 64, 65, 100.
- **Common error in Program 2:** Using `age >= 0 && age <= 12` instead of just `age <= 12` (after validating that age is not negative). Both approaches are correct; the solution above validates negatives first, then uses simple upper-bound checks.
