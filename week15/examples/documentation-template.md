# Project Documentation Template

## BMIS 263 Final Project

**Student Name:** [Your Full Name]  
**Matric / Student ID:** [Your ID]  
**Project Title:** Interactive Web Calculator  
**Date:** [Date]  

---

## 1. Project Overview

Provide a brief paragraph explaining what your application does, its target audience, and key features.

*Example:*  
The Web Calculator is a browser-based application built using HTML5, CSS3, and modern JavaScript. It allows users to perform basic arithmetic operations (addition, subtraction, multiplication, division, modulo) in a clean, user-friendly interface. Key features include keyboard input support, error handling for division by zero, decimal precision handling, and a clear/delete function.

---

## 2. Technical Architecture

### HTML & Structure
Explain the main HTML sections and elements used.

### CSS Styling & Layout
Explain how CSS Grid and Flexbox were used to style and align the calculator.

### JavaScript Logic
List state variables and main functions:
- `currentInput`: Stores current number string being typed.
- `previousInput`: Stores the operand before an operator was clicked.
- `operator`: Stores current active operator.
- `calculate()`: Performs arithmetic operations based on current state.
- `updateDisplay()`: Syncs JavaScript state to the DOM display element.

---

## 3. Testing Matrix

| Test Case # | Description / Inputs | Expected Output | Actual Output | Pass / Fail |
|---|---|---|---|---|
| 1 | Addition: 5 + 3 = | 8 | 8 | Pass |
| 2 | Subtraction: 10 - 4 = | 6 | 6 | Pass |
| 3 | Multiplication: 6 x 7 = | 42 | 42 | Pass |
| 4 | Division: 20 / 4 = | 5 | 5 | Pass |
| 5 | Division by zero: 5 / 0 = | Error | Error | Pass |
| 6 | Clear button: Press 'C' | Display resets to 0 | Display resets to 0 | Pass |
| 7 | Delete button: 123 -> DEL | 12 | 12 | Pass |
| 8 | Decimal restriction: 5.2.1 | 5.2 | 5.2 | Pass |

---

## 4. Challenges & Learnings

Describe at least one major challenge encountered during development and how you solved it.
