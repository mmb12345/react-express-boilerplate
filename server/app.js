const express = require('express')

const app = express()
const allowCrossOrigin = require('./middleware/allowCrossOrigin')
app.use(allowCrossOrigin)
app.use(express.json())

app.get('/hello', (req, res) => res.json('helloworld'))


module.exports = app