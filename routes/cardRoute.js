const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const cards = require('../controllers/cardController')

      app.get('/cards', (req, res) => {
            cards.getCards().then((cards) => { res.send(cards) })
      })
} 