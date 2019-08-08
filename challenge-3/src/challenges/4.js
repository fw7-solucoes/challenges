const { animals } = require('../db/index')

const newListAnimals = [...new Set([animals[0], 'Panda', ...animals])]

console.log(newListAnimals)
