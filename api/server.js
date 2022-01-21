const express = require('express')

const server = express()
const recipesRouter = require('./recipes/recipes-router')

server.use(express.json())
server.use('/api/recipes', recipesRouter)

// server.get('*', (req, res, next)=>{
//    res.send(
//       `<h1> ello governer </h1>`
//    )
// })

server.use((err, req, res, next) =>{
   res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
   })
})

module.exports = server