const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app, server) => {
      const createdCards = require('../controllers/createdCardController')

      app.post('/createdCards', (req, res) => {
            createdCards.createCard(req.body).then((cards) => {
                  server.send({
                        text: "click the link to view your card! https://evelynsecards.herokuapp.com/createdCards/find/" + cards.attributes.id,
                        from: "eeyorep33@gmail.com",
                        to: req.body.recipientEmail,
                        cc: req.body.senderEmail,
                        subject: req.body.senderName + " has sent you an E-card"
                  }, function (err, message) {
                        console.log(err || message);
                        res.send('card sent!')
                  });
            })
      })
      app.get('/createdCards/:id', (req, res) => {
            createdCards.getCard({ id: req.params.id }).then((card) => {
                  res.send(card)
            })
      })
      
} 
