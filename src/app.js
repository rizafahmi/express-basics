'use strict'

const express = require('express')
const posts = require('./mock/posts.json')

var app = express()
debugger

app.get("/", (req, res) => {
  res.send("<h1>Hello nurse!</h1>")
})

app.get("/blog", (req, res) => {
  res.send(posts)
})

app.listen(3000, () => {
  console.log("The server running on http://localhost:3000/")
})
