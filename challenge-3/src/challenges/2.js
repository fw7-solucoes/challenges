const words = require("../db/index");

const wordPalindroms = words.reduce((accumulator, word) => {
  const wordToLowerCase = word.toLowerCase();
  const wordRevese = wordToLowerCase
    .split("")
    .reverse()
    .join("");
  if (wordToLowerCase === wordRevese) {
    return [...accumulator, word];
  }
  return [...accumulator];
}, []);

console.log(wordPalindroms);
