const mongoose = require('mongoose')
const schemaOptions = require('../config/schemaOptions')

const AmountTypeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
  },
  schemaOptions
)

module.exports = new mongoose.model('AmountType', AmountTypeSchema)
