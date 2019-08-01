/**
 * @author Roberto <https://github.com/robertoumbelino>
 */

const users = require('../db')

const userWithMore10PublicRepo = users
  .filter(user => user.public_repos > 10)
  .map(user => ({
    name: user.name,
    publicRepos: user.public_repos
  }))
  .sort((a, b) => (a.publicRepos > b.publicRepos ? -1 : 0))

console.log(userWithMore10PublicRepo)
