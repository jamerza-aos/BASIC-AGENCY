const express = require('express')
const router = express.Router()
const nav = require('./nav.json')
const Featu = require('./Featu.json')
const FeaturedNews = require('./FeaturedNews.json')
const news = require('./News.json')
const think = require('./Thinking.json')

router.get('/', (req, res) => {
res.render('index', { title:"Projekt Basic Agency/Home",nav,Featu ,FeaturedNews })
})
router.get('/about', (req, res) => {
res.render('about', {  title:"Projekt Basic Agency/About" ,nav  })
})
router.get('/contact', (req, res) => {
res.render('contact', {  title:"Projekt Basic Agency/Contact" ,nav })
})
router.get('/news', (req, res) => {
res.render('news', {  title:"Projekt Basic Agency/News" ,nav,news })
})
router.get('/thinking', (req, res) => {
res.render('thinking',{ title:"Projekt Basic Agency/Thinking",nav , think  })
})
router.get('/work', (req, res) => {
    res.render('work',{title:"Projekt Basic Agency/Work",nav  })
    })

module.exports=router