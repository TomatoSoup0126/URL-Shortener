const mongoose = require('mongoose')
const Url = require('../url')
const urlList = require('./url.json')

mongoose.connect('mongodb://localhost/shortenerURL', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')

  for (let i = 0; i < urlList.results.length; i++) {
    const item = urlList.results[i];
    Url.create(item)
  }

  console.log('done')

})