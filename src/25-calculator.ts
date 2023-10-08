export { };

function add(num1: number, num2: number): number {
    return [num1, num2].reduce((num1, num2) => num1 + num2);
    // return num1 + num2;
}

function subtract(num1: number, num2: number): number {
    return [num1, num2].reduce((num1, num2) => num1 - num2);
    // return num1 - num2;
}

function sum(num: number[]): number {
    return num.reduce((num1, num2) => num1 + num2);
}

function multiply(num: number[]): number {
    return num.reduce((num1, num2) => num1 * num2);
}

function power(num1: number, num2: number): number {

    let result: number = 1;

    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    return result;

    // Also can use this -> return Math.pow(num1, num2);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
