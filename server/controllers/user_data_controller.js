// DEPENDENCIES
const user = require('express').Router()
const db = require('../models')
const { User_data, Recipe_data, Rating_reviews } = db 
const { Op } = require('sequelize')
const cookie = require('cookie')
const Authentication = require('../authentication')

// FIND ALL USERS
user.get('/', async (req, res) => {
    try {
        const foundUsers = await User_data.findAll({
            order: [ [ 'user_id', 'ASC'] ],
            where: {
                username: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            },
            include: [
                {
                    model: Recipe_data,
                    as: 'recipes'
                },
                {
                    model: Rating_reviews,
                    as: 'reviews'
                }
            ]
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
            where: { user_id: req.params.id }
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

// VERIFY LOGIN FOR USER
user.post('/login', async (req, res) => {
    try {
        const foundUser = await User_data.findOne({
            where: { 
                username: req.body.username,
                password: req.body.password
            }
        })
        if (foundUser) {
            //res.status(200).json(foundUser)

            const sessionToken = await Authentication.createCookie(foundUser.user_id)

            res.statusCode = 200
            res.setHeader('Set-Cookie', [
                cookie.serialize('session_token', sessionToken.session_token, {
                    secure: true,
                    httpOnly: true,
                    path: '/'
                }),
                cookie.serialize('user_id', foundUser.user_id, {
                    secure: true,
                    httpOnly: true,
                    path: '/'
                })
            ])
            res.json(foundUser)
            res.end()
        } else {
            res.status(401).json({user_id: null})
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// TEST CONTROLLER 

user.post('/test', async (req, res) => {
    try {
        console.log(req.headers.cookie)
        res.status(200).json({cookies: req.headers.cookie})
    } catch (err) {
        res.status(500).json(err)
    }
})

user.post('/session/view', async (req, res) => {
    try {

        const tokens = await Authentication.viewSessionTokens();

        res.status(200).json(tokens)

    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

user.post('/session', async (req, res) => {
    try {
        const { user_id, session_token } = cookie.parse(req.headers.cookie)

        if (user_id === undefined || session_token === undefined) {
            res.status(200).json({user_id: null})
            return
        }

        if (await Authentication.confirmToken(parseInt(user_id), session_token)) {
            console.log("LOGGING IN WITH SESSION TOKEN")
            const user = await User_data.findOne({
                where: {
                    user_id: parseInt(user_id)
                }
            })
            res.status(200).json(user)
        } else {
            res.status(401).json({user_id: null})
        }
    } catch (err) {
        console.log(err)
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

user.delete('/logout/:id', async (req, res) => {
    try {
        const { user_id, session_token } = cookie.parse(req.headers.cookie)

        if (user_id === undefined || session_token === undefined) {
            res.status(200).json({user_id: null})
            return
        }

        await Authentication.logout(user_id, session_token)
        res.status(200).json({message: "Logged out successfully"})
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = user