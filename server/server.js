const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000)
console.log('http://localhost:3000/')
