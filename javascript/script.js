const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');

let operaciones = [];
let currentInput = '';

calculadora.addEventListener('click', añadirNumeros);

function añadirNumeros(e) {
    if (e.target.getAttribute('type') === 'button') {
        const btn = e.target;
        if (btn.className !== 'operacion') {
            appendNumber(btn.innerText);
        }
        switch (btn.id) {
            case 'sumar':
                addOperation('+');
                break;
            case 'restar':
                addOperation('-');
                break;
            case 'multiplicar':
                addOperation('*');
                break;
            case 'dividir':
                addOperation('/');
                break;
            case 'igual':
                calculateResult();
                break;
            case 'clear':
                clearCalculator();
                break;
        }
    }
}

function appendNumber(number) {
    if (number === '.') {
        if (currentInput.includes('.')) return; 
        if (currentInput === '') {
            currentInput = '0.';
        } else {
            currentInput += '.';
        }
    } else {
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else {
            currentInput += number;
        }
    }
    updateDisplay();
}

function addOperation(operator) {
    if (currentInput !== '') {
        operaciones.push(currentInput);
        operaciones.push(operator);
        currentInput = '';
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '') {
        operaciones.push(currentInput);
    }
    if (operaciones.length > 0) {
        const resultadoOperacion = eval(operaciones.join(''));
        resultado.value = resultadoOperacion;
        operaciones = [];
        currentInput = '';
    }
}

function clearCalculator() {
    operaciones = [];
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    resultado.value = currentInput;
}
