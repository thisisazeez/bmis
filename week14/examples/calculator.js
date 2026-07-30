// Calculator Logic - BMIS 263 Final Project Exemplar

let currentInput = "0";
let previousInput = "";
let operator = "";
let shouldResetDisplay = false;

const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = currentInput;
}

function inputNumber(value) {
    if (shouldResetDisplay) {
        currentInput = value;
        shouldResetDisplay = false;
    } else {
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else {
            if (value === "." && currentInput.includes(".")) {
                return;
            }
            currentInput = currentInput + value;
        }
    }
    updateDisplay();
}

function inputOperator(op) {
    if (previousInput !== "" && !shouldResetDisplay) {
        calculate();
    }

    previousInput = currentInput;
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (previousInput === "" || operator === "") {
        return;
    }

    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    let result;

    if (operator === "+") {
        result = prev + curr;
    } else if (operator === "-") {
        result = prev - curr;
    } else if (operator === "*") {
        result = prev * curr;
    } else if (operator === "/") {
        if (curr === 0) {
            currentInput = "Error";
            previousInput = "";
            operator = "";
            shouldResetDisplay = true;
            updateDisplay();
            return;
        }
        result = prev / curr;
    } else if (operator === "%") {
        result = prev % curr;
    }

    currentInput = parseFloat(result.toFixed(10)).toString();
    previousInput = currentInput;
    operator = "";
    shouldResetDisplay = true;
    updateDisplay();
}

function clearCalculator() {
    currentInput = "0";
    previousInput = "";
    operator = "";
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length === 1 || currentInput === "Error") {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// Attach event listeners to all buttons
const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let action = this.getAttribute("data-action");
        let value = this.getAttribute("data-value");

        if (this.classList.contains("number")) {
            inputNumber(value);
        } else if (action === "operator") {
            inputOperator(value);
        } else if (action === "equals") {
            calculate();
        } else if (action === "clear") {
            clearCalculator();
        } else if (action === "delete") {
            deleteLast();
        }
    });
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if ((key >= "0" && key <= "9") || key === ".") {
        inputNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        inputOperator(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearCalculator();
    }
});
