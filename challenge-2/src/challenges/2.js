/**
 * @author Vinícius <https://github.com/viniaxt>
 */
const people = require('../db')

const publicRepositories = people.reduce((accumulator, person) => {
  return accumulator + person.public_repos
}, 0)

console.log(publicRepositories)
