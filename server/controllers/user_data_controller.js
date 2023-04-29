// DEPENDENCIES
const user = require('express').Router()
const db = require('../models')
const { User_data } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
user.get('/', async (req, res) => {
    try {
        const foundUsers = await User_data.findAll({
            order: [ [ 'user_id', 'ASC'] ],
            // where: {
            //     username: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            // }
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC USER
user.get('/:id', async (req, res) => {
    try {
        const foundUser = await User_data.findOne({
            where: { recipe_id: req.params.id }
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER
user.post('/', async (req, res) => {
    try {
        const newUser = await User_data.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER
user.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User_data.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER
user.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User_data.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = user