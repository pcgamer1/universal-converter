const express = require('express')
const converterRouter = require('./src/routers/converterRouter')

require('dotenv').config({path: __dirname + '/.env'})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(converterRouter)

module.exports = app