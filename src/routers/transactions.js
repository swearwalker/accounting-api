const express = require('express')

const router = express.Router()

const Controllers = require('../controllers/transactions')

router.get('/transactions', Controllers.getItems)

router.get('/transactions/:id', Controllers.getItem)

router.post('/transactions', Controllers.createItem)

router.delete('/transactions/:id', Controllers.deleteItem)

router.put('/transactions/:id', Controllers.updateItem)

module.exports = router
