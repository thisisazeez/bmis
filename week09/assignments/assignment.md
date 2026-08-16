# Week 9 Assignment: Conditional Statements

## BMIS 263 -- Introduction to Programming

---

## Task

Create a file called `conditionals.html` containing the following two programs.

---

## Program 1: Pass/Fail Checker

Write a program that:

1. Uses `prompt()` to ask the user for their test score
2. Converts the input to a number
3. Checks if the input is valid (must be a number between 0 and 100)
4. Displays the result using `alert()`:
   - 70 and above: "Grade A - Excellent"
   - 60-69: "Grade B - Very Good"
   - 50-59: "Grade C - Pass"
   - Below 50: "Grade F - Fail"
   - Invalid input: "Please enter a valid score between 0 and 100"

---

## Program 2: Age Category Checker

Write a program that:

1. Uses `prompt()` to ask the user for their age
2. Converts the input to a number
3. Displays the user's age category:
   - 0-12: "Child"
   - 13-17: "Teenager"
   - 18-64: "Adult"
   - 65 and above: "Senior"
   - Negative number or invalid input: "Invalid age"

---

## Requirements

- Use `if`, `else if`, and `else` statements
- Use at least one comparison operator (`>=`, `<`, `===`, etc.)
- Use `parseFloat()` or `parseInt()` for type conversion
- Use `isNaN()` to check for invalid input
- Include at least 3 comments explaining your logic
- Use template literals for the output messages

---

## Grading Rubric

| Criteria | Marks | Description |
|---|---|---|
| Program 1: score input and conversion | 5 | prompt() + parseFloat/parseInt |
| Program 1: input validation | 5 | Handles NaN and out-of-range |
| Program 1: correct grade logic | 15 | All four grades assigned correctly |
| Program 2: age input and conversion | 5 | prompt() + parseInt |
| Program 2: input validation | 5 | Handles NaN and negative |
| Program 2: correct category logic | 10 | All four categories assigned correctly |
| Template literals used | 5 | At least one template literal |
| Comments | 5 | At least 3 meaningful comments |
| Code runs without errors | 5 | No syntax errors or crashes |
| **Total** | **60** | |

---

## Due Date

Submit by the start of Week 10's class.
