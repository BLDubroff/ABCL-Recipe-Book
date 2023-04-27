// DEPENDENCIES
const reviews = require('express').Router()
const db = require('../models')
const { Review } = db 
const { Op } = require('sequelize')

// FIND ALL REVIEWS
reviews.get('/', async (req, res) => {
    try {
        const foundReviews = await Review.findAll({
            order: [ [ 'rating_reviews_id', 'ASC'] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundReviews)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC REVIEW
reviews.get('/:id', async (req, res) => {
    try {
        const foundReview = await Review.findOne({
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
        const newReview = await Review.create(req.body)
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
        const updatedReview = await Review.update(req.body, {
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
        const deletedReview = await Review.destroy({
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