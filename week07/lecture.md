# Week 7: Variables and Data Types

## BMIS 263 -- Introduction to Programming

---

## Overview

Last week you wrote your first JavaScript -- messages in alert boxes and the console. But those messages were fixed. A program that only displays hardcoded text is not very useful. To do anything interesting, you need a way to **store**, **name**, and **work with** data. That is what variables are for.

By the end of this session, you will be able to:

- Declare variables using `let`, `const`, and `var`
- Identify JavaScript's primitive data types
- Use `typeof` to check a value's type
- Understand the difference between strings, numbers, and booleans

---

## 1. What Is a Variable?

A variable is a **named container for a value**. Think of it as a labelled box: the label is the variable name, and whatever is inside the box is the value.

```javascript
let studentName = "Adamu";
```

- `let` -- the keyword that creates the variable
- `studentName` -- the name (label) you choose
- `=` -- the assignment operator (it puts a value into the box)
- `"Adamu"` -- the value stored in the variable

After this line, whenever you write `studentName` in your code, JavaScript replaces it with `"Adamu"`.

### Why Variables Matter

Without variables, you would have to write the same value everywhere it is needed. If the value changed, you would have to find and update every occurrence. Variables let you:

- Store a value once and use it many times
- Give data a meaningful name (making code readable)
- Change the value later without rewriting your code

---

## 2. Declaring Variables: `let`, `const`, and `var`

JavaScript has three ways to declare a variable. Here is when to use each:

### `let`

Use `let` when the value **might change** later:

```javascript
let score = 0;
score = 10;     // allowed -- the value can change
score = 25;     // allowed again
```

### `const`

Use `const` when the value **should not change** after it is set:

```javascript
const pi = 3.14159;
const courseName = "BMIS 263";

pi = 3.0;    // ERROR: Assignment to constant variable
```

`const` stands for "constant." Use it for values that are meant to stay the same -- course names, configuration values, mathematical constants. If you try to reassign a `const`, JavaScript will throw an error.

**Rule of thumb:** Start with `const`. If you find you need to change the value later, switch to `let`.

### `var`

`var` is the old way of declaring variables, from before 2015. It still works, but it has quirks that can cause bugs:

```javascript
var age = 21;
```

For this course, **use `let` and `const`**. You may see `var` in older tutorials and code examples online, but `let` and `const` are the modern standard.

### The Difference at a Glance

| Keyword | Can be reassigned? | When to use |
|---|---|---|
| `const` | No | Values that should not change |
| `let` | Yes | Values that will change |
| `var` | Yes | Avoid -- older style, has scoping issues |

---

## 3. Naming Variables

Variable names in JavaScript must follow these rules:

1. Must start with a letter, underscore (`_`), or dollar sign (`$`)
2. Can contain letters, digits, underscores, and dollar signs
3. Cannot be a reserved word (`let`, `if`, `for`, `function`, etc.)
4. Are case-sensitive (`myName` and `myname` are different variables)

### Conventions

```javascript
// camelCase (recommended in JavaScript)
let firstName = "Adamu";
let totalScore = 85;
let isLoggedIn = true;

// Bad names (technically valid, but unclear)
let x = "Adamu";      // what is x?
let a = 85;            // what is a?
let flag = true;       // flag of what?
```

Good variable names describe **what the data is**, not just that it exists. `studentAge` is better than `x`. `isLoggedIn` is better than `flag`. Recall from Week 1 that **readability** is a characteristic of a good program. Naming is where readability starts.

---

## 4. Data Types

Every value in JavaScript has a **type** -- a category that determines what you can do with it. JavaScript has seven primitive types, but we will focus on the five most important ones for now.

### String

A sequence of characters, enclosed in quotes:

```javascript
let name = "Fatima";
let greeting = 'Hello, world!';
let empty = "";                  // an empty string is still a string
```

Strings can be joined together using the `+` operator (called **concatenation**):

```javascript
let firstName = "Adamu";
let lastName = "Bello";
let fullName = firstName + " " + lastName;   // "Adamu Bello"
console.log(fullName);
```

### Number

Integers and decimals. No quotes:

```javascript
let age = 21;
let price = 99.99;
let temperature = -5;
```

You can do arithmetic with numbers:

```javascript
let a = 10;
let b = 3;
console.log(a + b);    // 13
console.log(a - b);    // 7
console.log(a * b);    // 30
console.log(a / b);    // 3.3333...
console.log(a % b);    // 1 (remainder after division)
```

The `%` operator (modulo) gives the remainder. It is surprisingly useful -- for example, to check if a number is even: `n % 2 === 0`.

### Boolean

A value that is either `true` or `false`. No quotes, no capitals:

```javascript
let isStudent = true;
let hasPaid = false;
```

Booleans are the foundation of decision-making in programming. You will use them heavily in Week 9 (conditional statements).

### Undefined

A variable that has been declared but not assigned a value:

```javascript
let score;
console.log(score);    // undefined
```

### Null

An intentional "nothing" value. Used when you want to explicitly say "this variable has no value":

```javascript
let selectedCourse = null;   // nothing selected yet
```

### The Difference Between Undefined and Null

- `undefined` means "this variable exists but nobody gave it a value yet."
- `null` means "this variable exists and someone deliberately set it to nothing."

In practice, both represent "no value," but the intent is different.

---

## 5. `typeof`

The `typeof` operator tells you what type a value is:

```javascript
console.log(typeof "Hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (this is a known bug in JavaScript)
```

The `typeof null` returning `"object"` is a historical mistake in JavaScript that was never fixed for backward-compatibility reasons. Just know that `null` is **not** actually an object.

---

## 6. String + Number: A Common Trap

What happens when you use `+` with a string and a number?

```javascript
console.log("5" + 3);      // "53" (string concatenation, NOT addition)
console.log(5 + 3);         // 8 (number addition)
console.log("Age: " + 21);  // "Age: 21" (number converted to string, then concatenated)
```

If either side of `+` is a string, JavaScript converts the other side to a string and concatenates. This is one of the most common sources of bugs for beginners. When you expect math but get text, check your types.

### Template Literals (A Better Way to Build Strings)

Instead of concatenation with `+`, you can use **template literals** -- strings wrapped in backticks (`` ` ``) with `${}` for embedded expressions:

```javascript
let name = "Adamu";
let age = 21;

// Concatenation (old way)
console.log("My name is " + name + " and I am " + age + " years old.");

// Template literal (modern way -- easier to read)
console.log(`My name is ${name} and I am ${age} years old.`);
```

Both produce the same output. Template literals are cleaner, especially when you have multiple variables.

---

## Key Terms

- **Variable** -- a named container for storing a value
- **`let`** -- declares a variable whose value can be changed
- **`const`** -- declares a constant whose value cannot be changed after assignment
- **Data type** -- the category of a value (string, number, boolean, undefined, null)
- **String** -- a sequence of characters in quotes
- **Number** -- a numeric value (integer or decimal), without quotes
- **Boolean** -- `true` or `false`
- **`typeof`** -- an operator that returns the type of a value as a string
- **Concatenation** -- joining strings together using `+`
- **Template literal** -- a string in backticks that supports embedded expressions with `${}`

---

## What Comes Next

Next week, we combine variables with user input. You will use `prompt()` to ask the user for data, store it in variables, process it, and display the result using `alert()` or by writing to the page. This is the full input-processing-output cycle from Week 3, now powered by JavaScript.
