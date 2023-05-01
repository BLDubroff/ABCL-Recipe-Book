// DEPENDENCIES
const reviews = require('express').Router()
const db = require('../models')
const { Rating_reviews, User_data, Recipe_data } = db 
const { Op } = require('sequelize')

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
reviews.get('/:id', async (req, res) => {
    try {
        const foundReview = await Rating_reviews.findOne({
            where: { rating_reviews_id: req.params.id }
        })
        res.status(200).json(foundReview)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A REVIEW
reviews.post('/', async (req, res) => {
    try {
        const newReview = await Rating_reviews.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new review',
            data: newReview
        })
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