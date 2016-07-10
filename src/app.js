'use strict'

const express = require('express')
const posts = require('./mock/posts.json')

var app = express()

app.get("/", (req, res) => {
  res.send("<h1>Hello nurse!</h1>")
})

app.get("/blog/:title?", (req, res) => {
  let title = req.params.title

  if (title === undefined) {
    res.status(503)
    res.send("Under construction!")
  } else {
    let post = posts[req.params.title]
    res.send(post)
  }
})

app.listen(3000, () => {
  console.log("The server running on http://localhost:3000/")
})
