const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
  })
// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

