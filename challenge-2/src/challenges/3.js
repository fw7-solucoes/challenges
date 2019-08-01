/**
 * @author Roberto <https://github.com/robertoumbelino>
 */

const users = require('../db')

const ordenedUsersByCreatedAt = users
  .map(user => ({
    name: user.name,
    createdAt: user.created_at
  }))
  .sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 0))

console.log(ordenedUsersByCreatedAt)
