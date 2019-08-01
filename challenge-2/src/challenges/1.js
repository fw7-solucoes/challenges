/**
 * @author Roberto <https://github.com/robertoumbelino>
 */

const users = require('../db')

const ordenedUsers = users.map(user => user.name).sort()

console.log(ordenedUsers)
