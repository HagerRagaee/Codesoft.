let displayValue = '';
let isResultDisplayed = false;
let count = 0;

function appendToDisplay(value) {
  const operators = '+-*/%';

  if (operators.includes(value)) {
    displayValue = displayValue.trim();
    displayValue += ' ' + value + ' ';
  } else if (!operators.includes(value)) {
    
    if (operators.includes(displayValue.slice(-1))) {
      displayValue = '';
    }
    displayValue += value;
  }

  document.getElementById('display').value = displayValue;
}


function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
    isResultDisplayed = true;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
