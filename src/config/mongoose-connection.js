const mongoose = require('mongoose')

// Replace this with your MONGOURI.
const MONGOURI = process.env.MONGO_URL + process.env.MONGO_DB

const InitMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true
    })
    console.log('Connected to DB !!')
  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports = InitMongoServer
