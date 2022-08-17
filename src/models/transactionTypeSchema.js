const mongoose = require('mongoose')
const schemaOptions = require('../config/schemaOptions')

const TransactionTypeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
  },
  schemaOptions
)

module.exports = new mongoose.model('TransactionType', TransactionTypeSchema)
