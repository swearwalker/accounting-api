const Services = require('../services/categories')

exports.getItems = async (req, res) => {
  try {
    const items = await Services.getItems()
    return res.status(200).json({
      items,
    })
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}

exports.getItem = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Services.getItem(id)
    return res.status(200).json(data)
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}

exports.createItem = async (req, res) => {
  const newItem = req.body
  try {
    await Services.createItem(newItem)
    return res.status(200).json({
      answer: 'success',
    })
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params
  try {
    await Services.deleteItem(id)
    return res.status(200).json({
      answer: 'success',
    })
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}

exports.updateItem = async (req, res) => {
  const { id } = req.params
  const item = req.body
  try {
    const data = await Services.updateItem(id, item)
    return res.status(200).json(data)
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}
