const {Router} = require('express')
const {eventsHandler, factsHandler} = require('../controllers')
module.exports = () => {
    const app = Router()
    app.get('/events', eventsHandler)
    app.post('/fact', factsHandler)
    return app
}