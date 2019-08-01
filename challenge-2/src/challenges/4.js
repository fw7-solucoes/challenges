/**
 * @author Roberto <https://github.com/robertoumbelino>
 */

const users = require('../db')

const biggerName = users.reduce(
  (accumulator, user) =>
    user.name.length > accumulator.length ? user.name : accumulator,
  users[0].name
)
console.log(biggerName)
