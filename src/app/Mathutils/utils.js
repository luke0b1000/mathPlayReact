export function generateRandomNumber(length) {
    // TODO fix it so that length will be working
    return Math.floor(Math.random() * Math.pow(10, 1));
}

export function sortNumberHighLow(numberArr) {
    return numberArr.sort((a, b) => b - a);
}

export function numberReturn() {
    return sortNumberHighLow([
        generateRandomNumber(1),
        generateRandomNumber(1)
    ]);
}
