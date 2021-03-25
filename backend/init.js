const express = require('express')
const config = require('./config')
const logger = require('./logger')
const app = express()

let clients = []
let facts = []

//Load middleware 
require('./loaders')(app)

app.listen(config.port, () => {
    logger.info(`Server is listening on PORT: ${config.port}`)
}).on('error', (e) => {
    logger.error(e)
    process.exit(1)
})