# Week 3 Assignment: Forms and Input Concepts

## BMIS 263 -- Introduction to Programming

---

## Part A: Written (Theory -- 30%)

Answer the following in your own words:

1. **What is the difference between input and output in programming?** Give one example of each in the context of a web page. (5 marks)

2. **Why is the `name` attribute important on form input elements?** What would happen if you left it out? (5 marks)

---

## Part B: Practical (70%)

### Task: Design a Registration Form

Create a file called `registration.html` that contains a student registration form with the following fields:

| Field | Input Type | Required? |
|---|---|---|
| Full Name | Text | Yes |
| Email Address | Email | Yes |
| Password | Password | Yes |
| Date of Birth | Date | No |
| Age | Number (min 16, max 60) | No |
| Gender | Radio buttons (Male / Female) | Yes |
| Course | Dropdown with at least 3 options | Yes |
| Hobbies/Interests | Checkboxes with at least 3 options | No |
| Short Bio | Textarea (at least 4 rows) | No |
| Submit button | Button | -- |

### Requirements

- The page must be a valid HTML5 document.
- Every input must have a corresponding `<label>` element properly connected using `for` and `id`.
- All required fields must use the `required` attribute.
- The form must include placeholder text in at least 3 fields.
- Include at least 2 comments in your code.

---

## Grading Rubric

| Criteria | Marks | Description |
|---|---|---|
| Written answers (Part A) | 10 | Clear, own-words explanations with examples |
| Valid HTML5 structure | 5 | Correct doctype, html, head, body |
| All required form fields present | 15 | All 10 fields from the table above |
| Labels properly connected to inputs | 10 | Matching for/id attributes |
| `required` attribute on correct fields | 5 | Applied to Full Name, Email, Password, Gender, Course |
| Placeholder text used | 5 | At least 3 fields have placeholder text |
| Comments in code | 5 | At least 2 meaningful comments |
| Code readability | 5 | Clean indentation and structure |
| **Total** | **60** | |

---

## Due Date

Submit by the start of Week 4's class.
