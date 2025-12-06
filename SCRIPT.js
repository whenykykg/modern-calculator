let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value);

        // ➤ Add two-decimal formatting only
        result.value = Number(result.value).toFixed(2);

    } catch (error) {
        result.value = 'Error';
    }
}
