module.exports = [
  {
    name: "first client",
    orderValue: 2345.12,
    discounts: [
      {
        type: "paymentCondition",
        order: 2,
        values: [8.32]
      },
      {
        type: "amountCondition",
        order: 1,
        values: [7.19, 5.0]
      },
      {
        type: "afterNegotiationCondition",
        order: 3,
        values: [4.5]
      }
    ]
  },
  {
    name: "second client",
    orderValue: 3360.05,
    discounts: [
      {
        type: "paymentCondition",
        order: 2,
        values: [3.5]
      },
      {
        type: "amountCondition",
        order: 1,
        values: [5.0]
      },
      {
        type: "afterNegotiationCondition",
        order: 0,
        values: []
      }
    ]
  },
  {
    name: "third client",
    orderValue: 4960.51,
    discounts: [
      {
        type: "paymentCondition",
        order: 0,
        values: []
      },
      {
        type: "amountCondition",
        order: 1,
        values: [10.2, 5.6]
      },
      {
        type: "afterNegotiationCondition",
        order: 2,
        values: [0]
      }
    ]
  }
]
