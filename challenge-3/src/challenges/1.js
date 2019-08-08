const colors = require("../db/index");

const colorsSort = colors.reduce(
  (accumulator, item) => ({
    ...accumulator,
    [item.isAvailable ? "availables" : "unavailables"]: [
      ...(accumulator[[item.isAvailable ? "availables" : "unavailables"]] ||
        []),
      item
    ]
  }),
  {}
);

console.log(colorsSort);
