// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const app = express()
const usersController = require('./controllers/user_data_controller')
const recipesController = require('./controllers/recipe_data_controller')
const reviewsController = require('./controllers/rating_reviews_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()

// this corsOptions snippet was adapted from https://stackoverflow.com/questions/42710057/fetch-cannot-set-cookies-received-from-the-server
// const corsOptions = {
//     origin: process.env.ORIGIN,
//     credentials:  true
// }
  
// app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Recipe API'
    })
})

// CONTROLLERS 
app.use('/users', usersController)
app.use('/recipes', recipesController)
app.use('/reviews', reviewsController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Cooking on port: ${process.env.PORT}`)
})