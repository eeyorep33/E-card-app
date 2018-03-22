const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const createdCard = bookshelf.Model.extend({
      tableName: 'created_cards',
})
exports.createCard = (card) => {
      const newCard = new createdCard(
            card)
      return newCard.save()
            .then(card => {
                  return card;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getCard = (id) => {
      return createdCard.where(id)
            .fetch()
            .then(card => {
                  return card
            })
            .catch(err => {
                  console.log(err)
            })
}

