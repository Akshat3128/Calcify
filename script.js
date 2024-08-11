function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
