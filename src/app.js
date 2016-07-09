'use strict'

var express = require('express')

var app = express()

app.get("/", (req, res) => {
  res.send("<h1>Hello, nurse!</h1>")
})
app.listen(3000, () => {
  console.log("The server running on http://localhost:3000/")
})
