const express = require('express')

const router = express.Router()

const Controllers = require('../controllers/transactionTypes')

router.get('/transaction-types', Controllers.getItems)

router.post('/transaction-types', Controllers.createItem)

module.exports = router
