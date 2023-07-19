const express = require('express')
const bodyParser = require("body-parser")
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

const port = 3000

mongoose.connect()

app.get('/', (req, res) => {
  res.render('index', {sum: '0'})
})

app.post("/", function(req, res){
    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)
    var result = num1 + num2
    res.render('index', {sum:result})
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})