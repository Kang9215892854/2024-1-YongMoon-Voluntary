let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let operator = null;
let currentInput = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');

        if (value === 'C') {
            display.value = '';
            currentInput = '';
            previousInput = '';
            operator = null;
        } else if (value === '=') {
            if (operator && previousInput && currentInput) {
                let result = 0;
                let num1 = parseFloat(previousInput);
                let num2 = parseFloat(currentInput);
                
                // +, - *, / 를 이용해서 계산식을 만들어주세요.
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                }

                display.value = result;
                currentInput = result.toString();
                previousInput = '';
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                display.value += ' ' + value + ' ';
            }
        } else {
            currentInput += value;
            display.value += value;
        }
    });
});
