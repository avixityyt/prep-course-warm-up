export { };

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(str: any): boolean {
    return str === null || str.trim().length === 0;
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
