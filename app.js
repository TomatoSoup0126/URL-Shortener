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


app.use('/', require('./routes/home'))


app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})