export { };

/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (email: string): string => {
    const splitEmail: string[] = email.split("@");
    const concatenateEmail: string = splitEmail[0].slice(0, 3).concat("...@", splitEmail[1]);
    return concatenateEmail;
};

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com