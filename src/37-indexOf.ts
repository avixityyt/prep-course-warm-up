export { };

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: (number | string)[], valueToRemove: number | string): (number | string)[] {

  let cleanedArr: (number | string)[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (valueToRemove != arr[i]) cleanedArr.push(arr[i]);
  }

  return cleanedArr;

}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/