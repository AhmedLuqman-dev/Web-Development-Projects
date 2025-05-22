const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let resetNext = false;

function updateDisplay(value) {
  display.textContent = value || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const num = button.getAttribute('data-num');
    const op = button.getAttribute('data-op');
    const id = button.id;

    if (id === 'clear') {
      currentInput = '';
      updateDisplay('0');
      return;
    }

    if (id === 'equals') {
      try {
        let result = eval(currentInput);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
          updateDisplay('Error');
          currentInput = '';
        } else {
          updateDisplay(result);
          currentInput = result.toString();
        }
      } catch {
        updateDisplay('Error');
        currentInput = '';
      }
      resetNext = true;
      return;
    }

    if (resetNext) {
      if (num && !op) {
        currentInput = '';
      }
      resetNext = false;
    }

    if (num === '.') {
      let segments = currentInput.split(/[\+\-\*\/]/);
      let lastSegment = segments[segments.length - 1];
      if (lastSegment.includes('.')) return;
    }

    if (op) {
      if (currentInput === '') return;
      if (/[+\-*/]$/.test(currentInput)) {
        currentInput = currentInput.slice(0, -1) + op;
      } else {
        currentInput += op;
      }
      updateDisplay(currentInput);
      return;
    }

    currentInput += num;
    updateDisplay(currentInput);
  });
});
