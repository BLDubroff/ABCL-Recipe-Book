// DEPENDENCIES
const recipes = require('express').Router()
const db = require('../models')
const { Recipe_data } = db 
const { Op } = require('sequelize')

// FIND ALL RECIPES
recipes.get('/', async (req, res) => {
    try {
        const foundRecipes = await Recipe_data.findAll({
            order: [ [ 'recipe_id', 'ASC'] ],
            // where: {
            //     name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            // }
        })
        res.status(200).json(foundRecipes)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC RECIPE
recipes.get('/:id', async (req, res) => {
    try {
        const foundRecipe = await Recipe_data.findOne({
            where: { recipe_id: req.params.id }
        })
        res.status(200).json(foundRecipe)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A RECIPE
recipes.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipe_data.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe',
            data: newRecipe
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A RECIPE
recipes.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe_data.update(req.body, {
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRecipe} recipe(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A RECIPE
recipes.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe_data.destroy({
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRecipe} recipe(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = recipes