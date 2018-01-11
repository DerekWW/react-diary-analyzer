const express = require('express')
const knex = require('../../knex')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('at users')
})

router.post('/', (req, res, next) => {
  console.log(req.body)

  res.send(req.body)
})

module.exports = router
