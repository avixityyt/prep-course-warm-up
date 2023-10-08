export { };

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */


const min = (array: number[]): number => {
    let findMin: number = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < findMin) {
            findMin = array[i];
        }
    }

    return findMin;
};
function max(array: number[]): number {

    let findMax: number = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > findMax) {
            findMax = array[i];
        }
    }

    return findMax;
}

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9