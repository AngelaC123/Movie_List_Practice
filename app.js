// Require express
const express =  require('express')
const app =  express()

// Set server variable
const port = 3000

// Set route
app.get('/', (req,res) => {
  res.send(`<h2>This is my movie list build with express! </h2>`)
})

// Listen to the server
app.listen(port, () => {
  console.log(`The server is now listening to http://localhost:${port}`)
})