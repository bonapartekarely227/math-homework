function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

function sortData(data) {
    data.sort((a, b) => a - b);
}
