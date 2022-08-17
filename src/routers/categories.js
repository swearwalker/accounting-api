const express = require('express')

const router = express.Router()

const Controllers = require('../controllers/categories')

router.get('/categories', Controllers.getItems)

router.get('/categories/:id', Controllers.getItem)

router.post('/categories', Controllers.createItem)

router.delete('/categories/:id', Controllers.deleteItem)

router.put('/categories/:id', Controllers.updateItem)

module.exports = router
