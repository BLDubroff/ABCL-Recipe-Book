// DEPENDENCIES
const reviews = require('express').Router()
const db = require('../models')
const { Rating_reviews, User_data, Recipe_data } = db 
const { Op } = require('sequelize')
const Authentication = require('../authentication')

// FIND ALL REVIEWS
reviews.get('/', async (req, res) => {
    try {
        const foundReviews = await Rating_reviews.findAll({
            order: [ [ 'rating_reviews_id', 'ASC'] ],
            include: [
                {
                    model: User_data,
                    as: 'author'
                },
                {
                    model: Recipe_data,
                    as: 'recipe'
                }
            ]
        })
        res.status(200).json(foundReviews)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC REVIEW

// reviews.get('/:id', async (req, res) => {
//     try {
//         const foundReview = await Rating_reviews.findOne({
//             where: { rating_reviews_id: req.params.id }
//         })
//         res.status(200).json(foundReview)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// FIND ALL REVIEWS TIED TO A SPECIFIC RECIPE
reviews.get('/recipes/:id', async (req, res) => {
    try {
        const foundReviews = await Rating_reviews.findAll({
            where: { recipe_id: req.params.id }
        })
        res.status(200).json(foundReviews)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A REVIEW
reviews.post('/', async (req, res) => {
    try {

        const { user_id, session_token } = cookie.parse(req.headers.cookie + '')

        if (user_id === undefined || session_token === undefined || user_id !== req.params.id) {
            res.status(401).json({recipe_id: null})
            return
        }
        
        if (await Authentication.confirmToken(parseInt(user_id), session_token)) {

            // const newReview = await Rating_reviews.create(req.body)

            const recipeInfo = {
                user_id: user_id,
                title: req.body.title,
                description: req.body.description,
                recipe_content: req.body.content,
                prep_time_in_minutes: req.body.prepTime,
                cook_time_in_minutes: req.body.cookTime,
                total_time_in_minutes: parseInt(req.body.prepTime) + parseInt(req.body.cookTime),
                servings: req.body.servings,
                tags: req.body.tags.toLowerCase().split(' '),
                avg_rating: 3
            }

            const newReview = await Rating_reviews.create(recipeInfo)

            res.status(200).json({
                message: `Successfully posted review: ${newReview}`
            })

        } else {
            res.status(401).json({rating_reviews_id: null})
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A REVIEW
reviews.put('/:id', async (req, res) => {
    try {
        const updatedReview = await Rating_reviews.update(req.body, {
            where: {
                rating_reviews_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedReview} reviews(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A REVIEW
reviews.delete('/:id', async (req, res) => {
    try {
        const deletedReview = await Rating_reviews.destroy({
            where: {
                rating_reviews_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedReview} review(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = reviews