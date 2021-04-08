const express = require('express')
const converterRouter = require('./src/routers/converterRouter')
const configRouter = require('./src/routers/configRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(converterRouter)
app.use(configRouter)

module.exports = app