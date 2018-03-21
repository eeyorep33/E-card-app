const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Card = bookshelf.Model.extend({
      tableName: 'card_items',
      
})
exports.getCards = () => {
      return Card.fetchAll()
            .then(result => {
                  const cards = result.models.map(card => {
                        return card.attributes
                  })
                  console.log(result)
                  return cards
            })
            .catch(err => {
                  console.log(err)
            })
}