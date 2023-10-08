export { };
let findSimilarWords: string[];
function onlyTheAces(arr: string[]): string[] {

    for (let i = 0; i < arr.length; i++) {
        findSimilarWords = arr.filter(word => arr[i] == word);
    }

    return findSimilarWords;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"]));