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
        const session = Session_cookies.findOne({
            where: {
                user_id: user_id,
                session_token
            }
        })

        return session !== null
    }
}

module.exports = Authentication