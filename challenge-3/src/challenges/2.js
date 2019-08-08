const { words } = require('../db')

const palindromeWords = words.filter(
  word =>
    Array.from(word.toLowerCase())
      .reverse()
      .join('') === word.toLowerCase()
)

console.log(palindromeWords)
