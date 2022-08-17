const express = require('express')

const router = express.Router()

const Controllers = require('../controllers/amountTypes')

router.get('/amount-types', Controllers.getItems)

router.post('/amount-types', Controllers.createItem)

module.exports = router
