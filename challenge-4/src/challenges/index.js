console.time("Performance")
const clients = require('../db/index')

/* ----- 1 ----- */

const discountsClient = clients.map(({ name, orderValue, discounts }) => {
  return {
    name,
    orderValue,
    discounts: discounts.sort((firstOrder, secondOrder) =>
      firstOrder.order > secondOrder.order && 1)
  }
})

// console.dir(discountsClient, { depth: null })

/* ----- 2 ----- */

const totalDiscounts = discountsClient.map(({ name, orderValue, discounts }) => {
  return {
    name,
    orderValue,
    resultantDiscount: [...discounts].map(({ values }) => {
      return values.reduce((firstValue, secondValue) => {
        return (100 - firstValue) * (100 - secondValue) / 100
      }, '')
    })
  }
})

console.dir(totalDiscounts, { depth: null })

/* ----- 3 ----- */

/* ----- 4 ----- */

/* ----- 5 ----- */

/* ------------- */
console.timeEnd("Performance")
