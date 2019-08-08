const { product } = require('../db')

const getGroupedSizes = (groupedSizes, sizes) => {
  return sizes.reduce((accumulator, { size, stock }) => {
    const index = groupedSizes.findIndex(foundSize => foundSize.size === size)
    const currentStock = groupedSizes[index] ? groupedSizes[index].stock : 0

    return Object.values({
      ...accumulator,
      [index]: {
        size,
        stock: currentStock + stock
      }
    })
  }, groupedSizes)
}

const sizes = product.colors.reduce((accumulator, color) => {
  return getGroupedSizes(accumulator, color.sizes)
}, [])

console.log(sizes)
