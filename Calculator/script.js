const display = document.getElementById('display');

// Append numbers and operators to display
function appendValue(value) {
  if (display.value === 'Error' || display.value === 'Error: Div by 0') {
    display.value = '';
  }
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = '';
}

// Delete the last character entered
function deleteLast() {
  if (display.value === 'Error' || display.value === 'Error: Div by 0') {
    display.value = '';
  } else {
    display.value = display.value.slice(0, -1);
  }
}

// Calculate the result
function calculate() {
  try {
    const expression = display.value;
    if (!expression) return;

    // Check for division by zero (e.g. /0 not followed by other digits or .)
    if (/\/0(?![0-9.])/.test(expression)) {
      display.value = 'Error: Div by 0';
      return;
    }

    // Safely evaluate math expression
    const result = Function('"use strict"; return (' + expression + ')')();

    // Round to prevent floating point inaccuracies (e.g. 0.1 + 0.2)
    display.value = Math.round(result * 1e8) / 1e8;
  } catch (error) {
    display.value = 'Error';
  }
}

// Support keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

