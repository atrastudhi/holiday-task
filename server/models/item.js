const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema ({
  name: {
    type: String,
    require: [true, 'item name field cannot be empty']
  },
  price: {
    type: Number,
    require: [true, 'price field cannot be empty']
  }
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item
