const fruits = require("../db/index");

const unique = [...new Set(fruits)];

console.log(unique);
