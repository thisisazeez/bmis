# Week 7 Assignment: Variables and Data Types

## BMIS 263 -- Introduction to Programming

---

## Task

Create a file called `variables.html` that demonstrates your understanding of variables and data types in JavaScript.

---

## Requirements

Your JavaScript code (inside `<script>` tags) must do the following:

### Step 1: Declare Variables

Create variables for the following, using appropriate keywords (`let` or `const`) and appropriate data types:

| Variable | Value | Type Expected |
|---|---|---|
| Your full name | Your actual name | String |
| Your age | Your actual age | Number |
| Your course name | "BMIS 263" | String |
| Whether you are a student | true | Boolean |
| Your GPA or score | A decimal number | Number |

### Step 2: Display Using console.log()

Print each variable to the console using `console.log()`. For each one, print a label and the value. Example:

```
Name: Adamu Bello
Age: 21
```

### Step 3: Check Types

Use `typeof` to print the type of each variable to the console. Example:

```
Type of name: string
Type of age: number
```

### Step 4: Use a Template Literal

Create a single `console.log()` statement that uses a **template literal** (backtick string with `${}`) to print a sentence containing at least 3 of your variables. Example:

```
My name is Adamu Bello, I am 21 years old, and I study BMIS 263.
```

### Step 5: Demonstrate the String + Number Trap

Write two `console.log()` statements that show the difference between:
- `"5" + 3` (string concatenation)
- `5 + 3` (number addition)

Add a comment above each one explaining what happens and why.

---

## Grading Rubric

| Criteria | Marks | Description |
|---|---|---|
| Variables declared with correct keywords | 10 | `const` for values that do not change, `let` for values that might |
| Correct data types used | 10 | Strings in quotes, numbers without, boolean as true/false |
| console.log() with labels | 10 | Each variable printed with a descriptive label |
| typeof used correctly | 10 | Type of each variable printed |
| Template literal used | 10 | At least one template literal with 3+ variables |
| String + Number trap demonstrated | 5 | Both cases shown with comments explaining the difference |
| Code comments | 5 | At least 3 meaningful comments |
| **Total** | **60** | |

---

## Due Date

Submit by the start of Week 8's class.
