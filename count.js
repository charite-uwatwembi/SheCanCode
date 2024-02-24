//Q: Count the occurrences of each word in the sentence.
let sentence = " i love javascript, javascript is awesome!";
let words = sentence.split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;

},{});
console.log(words);//{i: 1, love: 1, javascript





































































