const { words } = require('../db')

const palindromeWords = words.filter(word => {
  const reverseWord = [...word]
    .reverse()
    .join('')
    .toLowerCase()

  return word.toLowerCase() === reverseWord
})

console.log(palindromeWords)
