export { };

const removeFromArray = (arr: number[], num1: number, num2?: number): number[] => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num1 || arr[i] == num2) arr.splice(i, 1);
    }

    return arr;

};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */