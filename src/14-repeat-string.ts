export { };

const repeatString = (text: string, times: number) => {
    return text.repeat(times);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
