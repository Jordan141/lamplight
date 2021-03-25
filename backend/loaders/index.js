const cors = require('cors')
const express = require('express')
const routes = require('../api/routes')
module.exports = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use('/', routes())
}