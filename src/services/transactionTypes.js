const Model = require('../models/transactionTypeSchema')

exports.getItems = async () => {
  try {
    return await Model.find()
  } catch (e) {
    throw Error(e)
  }
}

exports.createItem = async (item) => {
  try {
    await Model.create(item)
  } catch (e) {
    throw Error(e)
  }
}
