// Require express
const express = require('express')
const app = express()

// Set server variable
const port = 3000

// Require handlebars
const exphbs = require('express-handlebars')

// Import data
const movieList = require('./movie-list.json').results

// Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set static files
app.use(express.static('public'))


// Set route
app.get('/', (req, res) => {
  res.render('index', { movie: movieList })
})

app.get('/movies/:movieId', (req, res) => {
  
  const movieToShow = movieList.find((movie) => {
    return movie.id.toString() === req.params.movieId
  })
  res.render('show',{movie: movieToShow})
})

// Listen to the server
app.listen(port, () => {
  console.log(`The server is now listening to http://localhost:${port}`)
})