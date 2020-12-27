const express = require('express')
const router = express.Router()

const nav = require('./nav.json')


router.get('/', (req, res) => {
res.render('index', { title:"Projekt Basic Agency/Home" })
})
router.get('/about', (req, res) => {
res.render('about', {  title:"Projekt Basic Agency/About"  })
})
router.get('/contact', (req, res) => {
res.render('contact', {  title:"Projekt Basic Agency/Contact"})
})
router.get('/news', (req, res) => {
res.render('news', {  title:"Projekt Basic Agency/News"})
})
router.get('/thinking', (req, res) => {
res.render('thinking', { title:"Projekt Basic Agency/Thinking" })
})
router.get('/work', (req, res) => {
    res.render('work', { title:"Projekt Basic Agency/Work" })
    })


module.exports = router