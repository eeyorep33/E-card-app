const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Card = bookshelf.Model.extend({
      tableName: 'card_items',
})
const Video = bookshelf.Model.extend({
      tableName: 'video_items',
})
exports.getCards = () => {
      return Card.fetchAll()
            .then(result => {
                  const cards = result.models.map(card => {
                        return card.attributes
                  })
                  return cards
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getAllCards = () => {
      return Video.fetchAll()
            .then(result => {
                  const video = result.models.map(video => {
                        return video.attributes
                  })
                  return video
            })
            .catch(err => {
                  console.log(err)
            })

}