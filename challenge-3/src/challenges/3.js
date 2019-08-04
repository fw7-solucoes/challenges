const { fruits } = require('../db')

const uniqueFruits = [...new Set(fruits)]

console.log(uniqueFruits)
