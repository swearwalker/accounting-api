const mongoose = require('mongoose')
const schemaOptions = require('../config/schemaOptions')

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    transactionTypeId: {
      type: String,
      required: true,
    },
  },
  schemaOptions
)

module.exports = new mongoose.model('Category', CategorySchema)
