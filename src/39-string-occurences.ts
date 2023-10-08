export { };

const count = (text: string, word: string): number => {

    let countWord: number = 0;

    text.toLowerCase().split(" ").map(w => { if (w === word) countWord++ });

    return countWord;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1