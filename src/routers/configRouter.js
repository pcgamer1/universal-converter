const fs = require('fs')
const express = require('express')
const cors = require('cors')
const router = new express.Router()

const { mapping } = require('../constants/config')

router.use(express.json())

router.get('/mapping', cors(), async (req, res) => {
  return res.status(200).send(mapping);
})


module.exports = router