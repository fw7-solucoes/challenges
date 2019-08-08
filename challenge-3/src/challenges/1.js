const { colors } = require('../db')

const groupedColors = colors.reduce(
  (accumulator, color) => {
    const status = color.isAvailable ? 'availables' : 'unavailables'

    return {
      ...accumulator,
      [status]: [...accumulator[status], color]
    }
  },
  {
    availables: [],
    unavailables: []
  }
)

console.log(groupedColors)
