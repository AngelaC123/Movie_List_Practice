// Require express
const express = require('express')
const app = express()

// Set server variable
const port = 3000

// Require handlebars
const exphbs = require('express-handlebars')

// Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set route
app.get('/', (req, res) => {
  res.render('index')
})

// Listen to the server
app.listen(port, () => {
  console.log(`The server is now listening to http://localhost:${port}`)
})