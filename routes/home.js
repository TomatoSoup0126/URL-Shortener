const express = require('express')
const router = express.Router()
const randomstring = require("randomstring")
const Url = require('../models/url')

//路由設定
router.get('/', (req, res) => {
  res.render('index')
})

//轉址路由
router.get('/:shortenUrl', (req, res) => {
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
router.post('/', (req, res) => {
  const hostName = req.headers.origin
  const originalUrl = req.body.inputURL

  if (!originalUrl) {
    const errorMessage = "你沒填寫要縮的網址喔！"
    return res.render('index', { errorMessage })
  } else {
    Url.findOne({ originalUrl: originalUrl })
      //查詢原始網址 若已存在直接輸出縮網址
      .then(url => {
        if (url) {
          return res.render('index', { url: url, hostName })
        } else {
          //不存在資料庫 轉成縮網址後輸出
          const shortenUrl = randomstring.generate(5)
          const url = new Url({
            originalUrl: originalUrl,
            shortenUrl: shortenUrl
          })

          url.save(err => {
            if (err) return console.error(err)
            return res.render('index', { url: url, hostName })
          })
        }
      })
  }
})



module.exports = router