// DEPENDENCIES
const db = require('./models')
const { Session_cookies, User_data } = db 
const { Op } = require('sequelize')
const cookie = require('cookie')
const hash = require('hash.js')

function generateToken() {
    const currentDate = new Date()
    const timestamp = currentDate.getTime()
    const rand = Math.random() * 1000000

    return hash.sha256().update(String(timestamp + rand)).digest('hex')
}

class Authentication {

    static async createCookie(user_id) {

        await Session_cookies.destroy({
            where: {
                user_id: user_id
            }
        })

        const sessionCookieInfo = {
            user_id: user_id,
            session_token: generateToken()
        }

        const sessionToken = await Session_cookies.create(sessionCookieInfo)

        return sessionToken

    }

    static async confirmToken(user_id, session_token) {
        const session = await Session_cookies.findOne({
            where: {
                user_id: user_id,
                session_token: session_token
            }
        })

        console.log("FOUND SESSION:")
        console.log(session)
        console.log(session !== null)
        console.log("END SESSION")

        return (session !== null)
    }

    static async logout(user_id, session_token) {
        const session = Session_cookies.findOne({
            where: {
                user_id: user_id,
                session_token: session_token
            }
        })

        if (session !== null) {
            Session_cookies.destroy({
                where: {
                    user_id: user_id
                }
            })
        }
    }

    static async viewSessionTokens() {
        const foundTokens = Session_cookies.findAll({
            order: [ [ 'user_id', 'ASC'] ],
        })

        return foundTokens
    }
}

module.exports = Authentication