# Week 9: Conditional Statements

## BMIS 263 -- Introduction to Programming

---

## Overview

Until now, your programs have been linear -- they execute every line, in order, every time. Real programs are not like that. Real programs make **decisions**: if the password is correct, log the user in; otherwise, show an error. If the score is above 50, the student passes; otherwise, they fail.

This is **conditional logic**, and you have already seen it. In Week 1, the Wi-Fi algorithm had steps like "IF the network requires a password, enter it." This week, you learn to write those decisions in JavaScript.

By the end of this session, you will be able to:

- Write `if`, `else if`, and `else` statements
- Use comparison operators (`===`, `!==`, `>`, `<`, `>=`, `<=`)
- Use logical operators (`&&`, `||`, `!`)
- Understand boolean expressions and how they evaluate to `true` or `false`

---

## 1. The `if` Statement

The simplest decision: **if** a condition is true, **then** do something.

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
```

Syntax:

```javascript
if (condition) {
    // code to run if the condition is true
}
```

- The **condition** is an expression that evaluates to `true` or `false`.
- The code inside the curly braces `{}` runs **only if** the condition is `true`.
- If the condition is `false`, the code is skipped entirely.

---

## 2. The `else` Clause

What if you want to do something different when the condition is false?

```javascript
let age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

The `else` block runs **only when** the `if` condition is `false`. Exactly one of the two blocks will run -- never both, never neither.

---

## 3. The `else if` Clause

When you have more than two possibilities:

```javascript
let score = 75;

if (score >= 70) {
    console.log("Grade: A");
} else if (score >= 60) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

JavaScript evaluates the conditions from top to bottom. As soon as one condition is `true`, it runs that block and **skips the rest**. If no condition is `true`, the `else` block runs.

The order matters. If you put `score >= 50` first, a score of 75 would match it (75 is indeed >= 50) and you would get "Grade: C" instead of "Grade: A." Always put the most specific (or highest) condition first.

---

## 4. Comparison Operators

These operators compare two values and return `true` or `false`:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `===` | Strictly equal (same value AND same type) | `5 === 5` | `true` |
| `!==` | Strictly not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or equal to | `5 >= 5` | `true` |
| `<=` | Less than or equal to | `4 <= 3` | `false` |

### `===` vs `==`

JavaScript has two equality operators:

- `===` (strict equality) -- checks value **and** type
- `==` (loose equality) -- checks value only, converting types if needed

```javascript
console.log(5 === "5");    // false (different types: number vs string)
console.log(5 == "5");     // true  (JavaScript converts "5" to 5, then compares)
```

**Always use `===` and `!==`.** Loose equality (`==`) has surprising conversion rules that cause bugs. Strict equality is predictable.

---

## 5. Logical Operators

Logical operators combine multiple conditions:

### AND (`&&`)

Both conditions must be true:

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}
```

### OR (`||`)

At least one condition must be true:

```javascript
let isStudent = true;
let isStaff = false;

if (isStudent || isStaff) {
    console.log("You can access the library.");
}
```

### NOT (`!`)

Reverses a boolean:

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}
// !false is true, so this message prints
```

### Combining Operators

You can combine as many conditions as needed:

```javascript
let age = 25;
let hasLicense = true;
let isSuspended = false;

if (age >= 18 && hasLicense && !isSuspended) {
    console.log("You can drive.");
}
```

---

## 6. Boolean Expressions

Any expression that evaluates to `true` or `false` is a boolean expression. You have been using them in every `if` statement:

```javascript
let x = 10;

// These are all boolean expressions:
x > 5         // true
x === 10      // true
x < 3         // false
x !== 10      // false
x > 5 && x < 20   // true (both conditions are true)
```

### Truthy and Falsy Values

In JavaScript, values other than `true` and `false` can also be treated as boolean in a condition. These values are **falsy** (treated as `false`):

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy** (treated as `true`), including:

- Any non-zero number
- Any non-empty string (even `"false"` is truthy -- it is a non-empty string)
- Any object or array

```javascript
let name = prompt("Enter your name:");

if (name) {
    console.log(`Hello, ${name}!`);
} else {
    console.log("You did not enter a name.");
}
// If the user types nothing and clicks OK, name is "" (falsy)
// If the user clicks Cancel, name is null (falsy)
```

---

## 7. Practical Example: Pass/Fail Checker

This program asks for a test score and tells the student whether they passed or failed:

```javascript
let score = parseFloat(prompt("Enter your test score (0-100):"));

if (isNaN(score)) {
    alert("That is not a valid number.");
} else if (score < 0 || score > 100) {
    alert("Score must be between 0 and 100.");
} else if (score >= 50) {
    alert(`You scored ${score}. You PASSED.`);
} else {
    alert(`You scored ${score}. You FAILED.`);
}
```

Notice:
- The first check handles invalid input (not a number)
- The second check handles out-of-range values
- The logic only reaches the pass/fail decision if the input is valid
- This is **defensive programming** -- anticipating what could go wrong

---

## 8. Nested Conditionals

You can put `if` statements inside other `if` statements:

```javascript
let age = parseInt(prompt("Enter your age:"));
let hasTicket = prompt("Do you have a ticket? (yes/no)");

if (age >= 18) {
    if (hasTicket === "yes") {
        alert("Welcome to the event.");
    } else {
        alert("You need a ticket to enter.");
    }
} else {
    alert("You must be 18 or older.");
}
```

Nesting works, but deep nesting (more than 2-3 levels) makes code hard to read. When possible, use `else if` or combine conditions with `&&` instead.

---

## Key Terms

- **Conditional statement** -- code that runs only when a specified condition is true
- **`if`** -- executes a block of code if a condition is true
- **`else`** -- executes a block of code if the preceding `if` condition is false
- **`else if`** -- tests an additional condition if the preceding `if` was false
- **Comparison operators** -- operators that compare two values and return a boolean (`===`, `!==`, `>`, `<`, `>=`, `<=`)
- **Logical operators** -- operators that combine boolean values (`&&` AND, `||` OR, `!` NOT)
- **Boolean expression** -- an expression that evaluates to `true` or `false`
- **Truthy / Falsy** -- non-boolean values that JavaScript treats as true or false in a boolean context

---

## What Comes Next

Next week: **loops**. Conditional statements let your programs make decisions; loops let your programs **repeat actions**. Together, decisions and repetition are the two fundamental building blocks of all programming logic.
