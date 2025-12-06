function calculateResult() {
    try {
        let value = eval(result.value);
        
        // Force output to always have 2 decimal places
        if (!isNaN(value)) {
            result.value = Number(value).toFixed(2);
        } else {
            result.value = 'Error';
        }

    } catch (error) {
        result.value = 'Error';
    }
}
