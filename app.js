const express = require('express')
const converterRouter = require('./src/routers/converterRouter')
const configRouter = require('./src/routers/configRouter')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(converterRouter)
app.use(configRouter)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app