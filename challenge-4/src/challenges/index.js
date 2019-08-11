const orders = require("../db")

console.time("Performance")
/* ----- 1 ----- */

const orderedOrders = orders.map(order => {
  const orderedDiscounts = order.discounts.sort((a, b) => {
    return a.order < b.order ? -1 : 0
  })

  return {
    ...order,
    discounts: orderedDiscounts
  }
})

// console.dir(orderedOrders, { depth: null })

/* ----- 2 ----- */

const ordersWithResultantDiscount = orderedOrders
  .map(({ name, discounts, orderValue }) => {
    const filteredDiscounts = discounts.filter(({ order }) => order !== 0)
    return {
      name,
      orderValue,
      discounts: filteredDiscounts
    }
  })

  .map(({ name, discounts, orderValue }) => {
    const resultantDiscount = discounts.reduce((accumulator, { values }) => {
      const resultantFromDiscounts = values.reduce(
        (accumulator, discountValue) => {
          return (accumulator * (100 - discountValue)) / 100
        },
        100
      )

      return (accumulator * resultantFromDiscounts) / 100
    }, 100)

    return {
      name,
      orderValue,
      resultantDiscount: resultantDiscount
    }
  })

// console.log(ordersWithResultantDiscount)

/* ----- 3 ----- */

const ordersWithTotalDiscount = ordersWithResultantDiscount.map(order => {
  return {
    ...order,
    orderValueWithDiscount: (order.orderValue * order.resultantDiscount) / 100
  }
})

// console.log(ordersWithTotalDiscount)

const clientWithBiggerAmountOfDiscount = ordersWithTotalDiscount.reduce(
  (accumulator, order) => {
    return accumulator.orderValue - accumulator.orderValueWithDiscount >
      order.orderValue - order.orderValueWithDiscount
      ? accumulator.name
      : order.name
  },
  ordersWithTotalDiscount[0]
)

// console.log(clientWithBiggerAmountOfDiscount)

/* ----- 4 ----- */

const averegeDiscount =
  ordersWithTotalDiscount.reduce((accumulator, { resultantDiscount }) => {
    return accumulator + (100 - resultantDiscount)
  }, 0) /
    ordersWithTotalDiscount.length -
  1

const totalDiscountedOrders =
  (ordersWithTotalDiscount.reduce(
    (accumulator, { orderValue, orderValueWithDiscount }) => {
      return accumulator + orderValue - orderValueWithDiscount
    },
    0
  ) *
    (100 - averegeDiscount)) /
  100

// console.log(`
// Averege discount => ${averegeDiscount}%
// Represents R$ ${totalDiscountedOrders} from total
// `)

/* ----- 5 ----- */

const discountsApplied = orderedOrders.reduce((accumulator, { discounts }) => {
  const updatedValues = discounts.reduce(
    (discountAccumulator, { type, values }) => {
      const previousValues =
        (accumulator[type] || 0) + (discountAccumulator[type] || 0)

      return {
        ...discountAccumulator,
        [type]: values.length + previousValues
      }
    },
    {}
  )
  return {
    ...updatedValues
  }
}, {})

console.log(discountsApplied)

/* ------------- */
console.timeEnd("Performance")
