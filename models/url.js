const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', todoSchema)