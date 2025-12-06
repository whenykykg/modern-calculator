function calculateResult() {
    try {
        result.value = eval(result.value);

        // Add this line to force 2 decimals
        result.value = Number(result.value).toFixed(2);

    } catch (error) {
        result.value = 'Error';
    }
}
