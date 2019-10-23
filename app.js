const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const Url = require('./models/url')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shortenerURL')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:shortURL', (req, res) => {
  res.redirect(``)
})

app.post('/', (req, res) => {
  res.render('index', shortenURL)
})


app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})