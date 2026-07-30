# Week 1: Introduction to Programming

## BMIS 263 -- Introduction to Programming

---

## Overview

This week has one job: before you touch a single line of HTML, CSS, or JavaScript, you need a working mental model of what programming actually is. Everything that follows in this course -- syntax errors, debugging, "why won't this work" -- makes more sense once this foundation is in place.

We will cover four ideas today:

1. What is a program?
2. What is an algorithm?
3. What is programming?
4. What makes a program "good"?

No code this week. That is deliberate. The thinking is the hard part; the typing comes later.

---

## 1. What Is a Program?

A program is a precise set of instructions that tells a computer what to do, step by step, written in a language the computer can understand.

Strip away the jargon and a program is just this: **instructions + order + a machine that follows them literally**.

### The Recipe Analogy

A recipe is a good starting point because you already understand it:

- A recipe lists **ingredients** (inputs).
- It gives **steps in a specific order** (the logic).
- Following it produces **a dish** (output).
- If you skip a step, do steps out of order, or misread a quantity, you get a different -- often broken -- result.

A program has the same shape: **inputs --> ordered steps --> output**. The difference is who follows the recipe. A human cook uses judgment -- if a recipe says "season to taste," a person improvises. A computer has no judgment. It does exactly what it is told, no more, no less, and it will follow a flawed instruction just as faithfully as a correct one.

This is the single most important idea to land this week: **the computer is not stupid, and it is not smart. It is obedient.** Every bug you will ever write traces back to this fact -- you told the computer to do something, and it did exactly that, even though that is not what you meant.

### Working Definition

> A **program** is a sequence of instructions, written in a language a computer can process, that transforms some input into some output.

### Common Misconception

Students often think a "program" means something big and finished -- an app, a website. A program can be one line long. The size does not matter; the property of being followed exactly, in order, is what makes something a program.

### Discussion Prompt

Ask yourself: "If I gave a robot the instruction 'go make me tea' and nothing else, what would go wrong?" The answer is that "make tea" is not actually an instruction -- it is a goal, made up of many smaller instructions the robot does not have. This sets up the next section.

---

## 2. What Is an Algorithm?

An algorithm is the plan -- the sequence of logical steps designed to solve a problem or complete a task -- independent of any programming language.

A program is what you get when you take an algorithm and translate it into a language a computer can execute.

This distinction matters:

| | Algorithm | Program |
|---|---|---|
| **What it is** | The logic / the plan | The plan, written in a specific language |
| **Language-dependent?** | No -- can be written in English, pseudocode, a flowchart | Yes -- written in HTML, JavaScript, Python, etc. |
| **Can a human follow it?** | Yes | Only if they read the language it is written in |
| **Example** | "Check if the number is even by dividing by 2 and looking at the remainder" | `if (n % 2 === 0) { ... }` |

A useful way to say it: you **design** an algorithm, and you **implement** a program. The thinking happens first; the syntax happens second. Students who skip straight to typing code without designing the algorithm first are the ones who get stuck staring at a blank editor.

### Properties of a Good Algorithm

1. **Finite** -- it must eventually stop. An algorithm that runs forever is not useful.
2. **Precise / unambiguous** -- every step must have exactly one interpretation. "Add a bit of salt" is not precise; "add 1 teaspoon of salt" is.
3. **Ordered** -- the steps must happen in a specific sequence. Order matters.
4. **Effective** -- each step must be something that can actually be carried out. "Guess the right answer" is not an effective step.
5. **General** -- it should work for a range of inputs, not just one specific case.

### Exercise 1: The Toothbrushing Algorithm

Write an algorithm -- in plain English, numbered steps -- for brushing your teeth.

Here is a first attempt most people produce:

```
1. Pick up toothbrush
2. Put toothpaste on it
3. Brush teeth
4. Rinse mouth
5. Done
```

This looks fine until you ask: what does "brush teeth" actually mean? How long? Which teeth first? What motion? A computer (or a robot) given step 3 would not know what to do.

A more precise version:

```
1. Pick up toothbrush with dominant hand
2. Hold toothpaste tube with other hand
3. Remove cap from toothpaste
4. Squeeze a pea-sized amount of toothpaste onto the bristles
5. Replace the cap on the toothpaste
6. Turn on the tap
7. Briefly wet the bristles under the water
8. Turn off the tap
9. Bring the toothbrush to your mouth
10. Brush the outer surfaces of your upper teeth using small back-and-forth strokes for 30 seconds
11. Brush the outer surfaces of your lower teeth for 30 seconds
12. Brush the inner surfaces of your upper teeth for 30 seconds
13. Brush the inner surfaces of your lower teeth for 30 seconds
14. Brush the chewing surfaces of all teeth for 30 seconds
15. Brush your tongue gently
16. Turn on the tap
17. Rinse the toothbrush under the water
18. Cup water in your hand and rinse your mouth
19. Spit out the water
20. Turn off the tap
21. Put the toothbrush back in its holder
```

The lesson: what feels like one step to a human ("brush teeth") is actually many steps when you have to be precise enough for a machine. Programming is the discipline of being this precise.

### Exercise 2: Connecting Your Phone to Wi-Fi

Write an algorithm for connecting a phone to a Wi-Fi network. This one introduces **branching** -- the idea that different conditions lead to different steps.

```
1. Open the Settings app on the phone
2. Tap on "Wi-Fi" or "Network" settings
3. IF Wi-Fi is turned off:
     3a. Tap the toggle to turn Wi-Fi on
     3b. Wait for the phone to scan for available networks
4. Look at the list of available networks
5. Find the network you want to connect to
6. Tap on the network name
7. IF the network requires a password:
     7a. Enter the password using the on-screen keyboard
     7b. Tap "Connect" or "Join"
8. Wait for the phone to connect
9. IF the connection is successful:
     9a. A "Connected" status appears under the network name
     9b. Done
10. IF the connection fails:
     10a. Tap on the network name again
     10b. Tap "Forget this network"
     10c. Go back to step 4 and try again
```

Notice the IF statements. This is **conditional logic** -- the algorithm does different things depending on the situation. You will see this again formally in Week 9 when we cover JavaScript's `if/else` statements, but the concept starts here.

---

## 3. What Is Programming?

Programming is the **process** of designing an algorithm and translating it into a program. It includes:

1. **Understanding the problem** -- what are the inputs? What output do you need?
2. **Designing the algorithm** -- planning the steps, on paper or in your head.
3. **Writing the code** -- translating the algorithm into a programming language.
4. **Testing** -- checking that the program produces the right output for various inputs.
5. **Debugging** -- finding and fixing errors when it does not.

The key insight: programming is not just "writing code." The code is the last step. Most of the work is thinking.

### A Note on Languages

In this course, you will work with three technologies:

- **HTML** (HyperText Markup Language) -- structures web pages. Technically a markup language, not a programming language: it describes content but has no logic.
- **CSS** (Cascading Style Sheets) -- styles web pages. A style sheet language: it controls appearance but has no logic.
- **JavaScript** -- the actual programming language of the three. It has variables, conditions, loops, and functions -- the building blocks of logic.

This distinction matters. When someone asks "what programming language are you learning?" the honest answer is JavaScript. HTML and CSS are essential tools, but they do not have the ability to make decisions or repeat actions on their own.

As a brief aside: programming languages exist on a spectrum. At the lowest level, computers understand only binary -- ones and zeros (machine language). Assembly language uses short abbreviations to represent machine instructions, making them slightly more human-readable. Languages like JavaScript, Python, and Java sit at a higher level, using words and syntax closer to English. The higher the level, the easier it is for humans to read and write, but the more translation the computer must do behind the scenes. For this course, you will work exclusively with high-level tools, but it is worth knowing that layers exist beneath them.

### Debugging Is Normal

One more thing worth saying explicitly: **debugging is not a sign you did something wrong as a person -- it is a normal, expected phase of programming.** Professional programmers spend a significant portion of their time debugging. Setting this expectation now saves a lot of frustration later when you hit your first syntax error and conclude you are "just not a programmer."

---

## 4. Characteristics of a Good Program

Each of these is a lens you will use to evaluate your own code for the rest of this course.

### 1. Correctness

The program does what it is supposed to do, for **all valid inputs** -- not just the one example you tested. A program that works for one input by luck is not correct, it is untested.

### 2. Readability

Code is read far more often than it is written -- by other developers, by graders, and by your own future self three weeks later. A readable program uses sensible names, consistent formatting, and a logical structure. You are not just writing for the computer; you are writing for the next human who reads this -- and that human is often you.

### 3. Efficiency

The program should use time and resources sensibly. You do not need to understand performance analysis this week -- just understand that **how** a problem is solved matters, not just **whether** it is solved.

### 4. Reliability

The program behaves predictably and handles unexpected situations gracefully rather than crashing or producing garbage output.

### 5. Maintainability

The program can be updated, extended, or fixed later without being rewritten from scratch. This is a professional concern more than a beginner one, but it is worth naming now so you start forming the habit of writing code you (or a teammate) could return to.

### 6. Good Documentation / Comments

Notes within the code (or accompanying it) that explain **why** something was done a certain way -- not just what it does, which good naming should already make clear.

### 7. Portability

The program works across different environments without modification. In a web programming course, this is relevant from day one -- different browsers can behave differently, which you will encounter once we reach CSS.

### A Useful Framing

Correctness answers "does it work?" Everything else answers "will it **keep** working, and can someone else work with it?" Beginners only care about the first question. Part of this course is getting you to care about the rest.

---

## Key Terms Recap

- **Program** -- a set of instructions, written in a language a computer can execute, that transforms input into output.
- **Algorithm** -- the logical plan behind a program; language-independent; can be expressed in English, pseudocode, or a flowchart.
- **Programming** -- the process of designing an algorithm and translating it into a program, including understanding the problem, testing, and debugging.
- **Pseudocode** -- structured, code-like English used to plan a program before writing it in an actual language.
- **Input / Output** -- what goes into a program (data, user actions) and what comes out (results, displayed content, behavior).
- **Debugging** -- the process of finding and fixing errors in a program; a normal and expected part of programming, not a sign of failure.
- **Syntax** -- the rules governing how instructions must be written in a particular language.
- **Semantics** -- the meaning of those instructions; what they actually do when executed.

---

## What Comes Next

Next week, you write your first real code. We will start with HTML -- the language that gives structure to every web page you have ever visited. The concepts from today (precision, order, input/output) carry directly into how HTML documents are organized.
