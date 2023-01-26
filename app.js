const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const app = express()
const path = require('path')
app.set('view engine', 'hbs')
app.set('views', './views')
let link = null
let round = null
app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.render('index', { link: link , round: round})
})

app.post('/admin', (req, res) => {
    link = req.body.link
    round = req.body.round
    res.render('admin')
})

app.get('/admin', (req, res) => {
    res.render('admin')
})
app.listen(3000, '192.168.1.10', function () {
    console.log('server started')
})