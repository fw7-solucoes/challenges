const { animals } = require('../db')

const animalsWithPanda = [
  ...animals.slice(0, 1),
  'Panda',
  ...animals.slice(1, animals.length)
]

console.log(animalsWithPanda)
