const Model = require('../models/transactionSchema')

exports.getItems = async () => {
  try {
    return await Model.find()
  } catch (e) {
    throw Error(e)
  }
}

exports.getItem = async (id) => {
  try {
    return await Model.findById(id)
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

exports.deleteItem = async (id) => {
  try {
    return await Model.findByIdAndRemove(id)
  } catch (e) {
    throw Error(e)
  }
}

exports.updateItem = async (id, item) => {
  try {
    return await Model.findByIdAndUpdate(id, item, { new: true })
  } catch (e) {
    throw Error(e)
  }
}
