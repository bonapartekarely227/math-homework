function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = getRandomNumber(1, 10);
console.log(num);