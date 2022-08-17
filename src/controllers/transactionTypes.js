const Services = require('../services/transactionTypes')

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
