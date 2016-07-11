'use strict'

const express = require('express')
const posts = require('./mock/posts.json')

var app = express()

let postsList = Object.keys(posts).map( (value) => {
  return posts[value]
})

app.use('/static', express.static(__dirname + "/public"))

app.set('view engine', 'pug')
app.set('views', __dirname + "/templates")

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/blog/:title?", (req, res) => {
  let title = req.params.title

  if (title === undefined) {
    res.status(503)
    res.render('blog', { posts: postsList })
  } else {
    let post = posts[req.params.title] || {}
    res.render("post", { post: post })
  }
})

app.listen(3000, () => {
  console.log("The server running on http://localhost:3000/")
})
