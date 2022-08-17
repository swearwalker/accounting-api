require('dotenv').config()

const express = require('express')
const mongooseConnection = require('./src/config/mongoose-connection')
const bodyParser = require('body-parser')
const cors = require('cors')

const amountTypes = require('./src/routers/amountTypes')
const transactionTypes = require('./src/routers/transactionTypes')
const categories = require('./src/routers/categories')
const transactions = require('./src/routers/transactions')

const PORT = process.env.PORT || 3456

mongooseConnection()

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/api', amountTypes)
app.use('/api', transactionTypes)
app.use('/api', categories)
app.use('/api', transactions)

app.listen(PORT, () => console.info('Started on port ' + PORT))
