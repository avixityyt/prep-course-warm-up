export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

const USDtoBRL: number = 5.28403;
const BRLtoUSD: number = 0.189243;
const fee: number = 0.01;

// You are allowed to change this function
function convertToUSD(price: number): number {
    return price * BRLtoUSD * (1 + fee);
}
// You are allowed to change this function
function convertToBRL(price: number): number {
    return price * USDtoBRL * (1 + fee);
}

const product: string = "You don't know JS";
const price: number = 12.5;
const priceInUSD: number = convertToUSD(price);
const priceInBRL: number = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/