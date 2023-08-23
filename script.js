let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === '0' && val !== '.') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function backspace() {
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
}

function calculatePercentage() {
    try {
        const values = displayValue.split(/[\+\-\*\/]/);

        if (values.length === 2) {
            const num1 = parseFloat(values[0]);
            const num2 = parseFloat(values[1]);
            displayValue = ((num1 * num2) / 100).toString();
        } else if (values.length ===1){
            const num1 = parseFloat(values[0]);
            displayValue = ((num1) / 100).toString();
        } else {
            throw new Error("Invalid input for percentage calculation.");
        }
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}




function handleKeyboardInput(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } 
    if (key === 'Backspace') {
        backspace();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.' && !displayValue.includes('.')) {
        appendToDisplay(key);
    } if (key === '%') {
        calculatePercentage();
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
    
}

document.addEventListener('keydown', handleKeyboardInput);

updateDisplay();
