module.exports = {
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id
    },
  },
  toObject: {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id
    },
  },
}
