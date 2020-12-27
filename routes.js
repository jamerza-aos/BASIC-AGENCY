const express = require('express')
const router = express.Router()
const nav = require('./nav.json')

router.get('/', (req, res) => {
res.render('index')
})
router.get('/about', (req, res) => {
res.render('about')
})
router.get('/contact', (req, res) => {
res.render('contact')
})
router.get('/news', (req, res) => {
res.render('news')
})
router.get('/thinking', (req, res) => {
res.render('thinking')
})
router.get('/work', (req, res) => {
    res.render('work')})


module.exports = router