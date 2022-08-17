const mongoose = require('mongoose')
const schemaOptions = require('../config/schemaOptions')

const TransactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    amountTypeId: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  schemaOptions
)

module.exports = new mongoose.model('Transaction', TransactionSchema)
