const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const Url = require('./models/url')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shortenerURL', { useNewUrlParser: true, useUnifiedTopology: true })



const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:shortenUrl', (req, res) => {
  const shortenUrl = req.params.shortenUrl
  Url.findOne({ shortenUrl: shortenUrl })
    .then(url => {
      if (!url) {
        return res.send('not find')
      } else {
        res.redirect(url.originalUrl)
      }
    })
    .catch((err) => {
      console.error(err)
    })

})

app.post('/', (req, res) => {
  res.render('index', shortenUrl)
})


app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})