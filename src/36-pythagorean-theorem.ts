export { };

/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is:
 * c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 *
 * You should be able to deduce which function arguments are which sides of a triangle
 * and name them in your function accordingly.
 */

const pythagoreanTheorem = (num1: number, num2: number): number => {
    // Nr.1 solution
    return Math.sqrt(num1 ** 2 + num2 ** 2);
    // Nr.2 solution -> return  Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5