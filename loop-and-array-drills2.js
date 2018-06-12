function computeAverage(numbers) {
    let sum = 0;
    numbers.forEach(function(element) {
        sum = sum + element;
    });
    return sum / numbers.length;
}

