const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const randomstring = require("randomstring")
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

//轉址路由
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

//縮網址路由
app.post('/', (req, res) => {
  const originalUrl = req.body.inputURL
  Url.findOne({ originalUrl: originalUrl })
    //已轉換過直接輸出
    .then(url => {
      if (url) {
        return res.send(`${url.shortenUrl}`)
      } else {
        //沒轉換過再轉換
        const shortenUrl = randomstring.generate(5)
        const url = new Url({
          originalUrl: originalUrl,
          shortenUrl: shortenUrl
        })

        url.save(err => {
          if (err) return console.error(err)
          return res.render('index', { url: url })
        })
      }
    })
})



app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})