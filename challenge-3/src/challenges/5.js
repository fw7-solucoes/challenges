const colors = require("../db/index");
const { colors } = product;
const findKey = "stock";

const novo = Object.entries(colors).map(([key, value]) => {
  return Object.entries(value).reduce((acc, item, indice) => item[indice]);
});

console.log(novo);
