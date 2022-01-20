const express = require('express')

const server = express()
const recipesRouter = require('./recipes/recipes-router')

server.use(express.json())
server.use('/api/recipes', recipesRouter)

server.use((err, req, res, next) =>{
   res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
   })
})

module.exports = server