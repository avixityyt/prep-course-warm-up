export { };

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums: number[] = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num: number | string): boolean {

  return (typeof num == "number")
    && (num % 1 == 0)
    && (!excludedNums.some(n => n == num));
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
