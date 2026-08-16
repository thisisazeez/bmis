# Week 10 Assignment: Solution

## BMIS 263 -- Introduction to Programming

---

## loops.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loops - BMIS 263</title>
</head>
<body>

    <h1>Loops</h1>
    <p>Open the console (F12) to see the output of Programs 1, 2, and 4.</p>

    <script>
        // ============================================
        // PROGRAM 1: Print numbers 1 to 10
        // ============================================

        console.log("--- Program 1: Numbers 1 to 10 ---");

        // A simple for loop counting from 1 to 10
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }

        // ============================================
        // PROGRAM 2: Multiplication Table
        // ============================================

        console.log("--- Program 2: Multiplication Table ---");

        // Ask the user for a number
        let tableNumber = parseInt(prompt("Enter a number for its multiplication table:"));

        // Print the multiplication table from 1 to 12
        for (let i = 1; i <= 12; i++) {
            console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
        }

        // ============================================
        // PROGRAM 3: Sum Calculator
        // ============================================

        // Ask the user for the upper limit
        let n = parseInt(prompt("Enter a number N to calculate the sum from 1 to N:"));

        // Use a for loop to accumulate the sum
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }

        alert(`The sum of numbers from 1 to ${n} is ${sum}.`);

        // ============================================
        // PROGRAM 4: Even and Odd Counter
        // ============================================

        console.log("--- Program 4: Even and Odd Counter ---");

        let evenCount = 0;
        let oddCount = 0;

        // Loop through 1 to 20 and classify each number
        for (let i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                evenCount++;
                console.log(`${i} is even`);
            } else {
                oddCount++;
                console.log(`${i} is odd`);
            }
        }

        console.log(`Even: ${evenCount}, Odd: ${oddCount}`);
        alert(`From 1 to 20: Even: ${evenCount}, Odd: ${oddCount}`);

        // ============================================
        // BONUS: Running Total with while loop
        // ============================================

        console.log("--- Bonus: Running Total ---");

        let total = 0;
        let userInput = prompt("Enter a number to add (or 'done' to stop):");

        while (userInput !== null && userInput.toLowerCase() !== "done") {
            let num = parseFloat(userInput);
            if (!isNaN(num)) {
                total += num;
                console.log(`Added ${num}. Running total: ${total}`);
            } else {
                console.log(`"${userInput}" is not a valid number. Skipped.`);
            }
            userInput = prompt(`Current total: ${total}. Enter another number (or 'done' to stop):`);
        }

        alert(`Final total: ${total}`);
    </script>

</body>
</html>
```

---

## Grading Notes

- **Program 1 (5 marks):** Simple for loop. Must print exactly 1 through 10. Using `i < 11` instead of `i <= 10` is acceptable.
- **Program 2 (15 marks):** Must use `prompt()` for input, `parseInt()` for conversion, and a loop from 1 to 12. The format "N x i = result" must be clear. Deduct 3 marks if the format is unclear (e.g., just printing the product without the equation).
- **Program 3 (10 marks):** The sum formula `n * (n + 1) / 2` is mathematically correct and can be used without a loop. Award full marks for this approach but note that it does not demonstrate loops. Deduct 3 marks if no loop is used (since the assignment is about loops).
- **Program 4 (15 marks):** Must count even and odd separately (5 marks each for correct counts) and display the result (5 marks). The modulo operator (`%`) must be used correctly. A common error is `i % 2 === 1` for odd -- this works but `i % 2 !== 0` is more reliable for negative numbers (not relevant here, but good habit).
- **Infinite loops:** If a student's code contains an infinite loop, deduct 5 marks and note the cause. Do not attempt to run infinite loop code.
