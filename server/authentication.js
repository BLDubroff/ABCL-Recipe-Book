// DEPENDENCIES
const db = require('./models')
const { Session_cookies, User_data } = db 
const { Op } = require('sequelize')
const cookie = require('cookie')
const hash = require('hash.js')

class Authentication {

    static async createToken(user_id) {

        const destroyedCookies = await Session_cookies.destroy({
            where: {
                user_id: user_id
            }
        })

        const currentDate = new Date()
        const timestamp = currentDate.getTime()
        const rand = Math.random() * 1000000

        const sessionTokenInfo = {
            user_id: user_id,
            session_token: hash.sha256().update(String(timestamp + rand)).digest('hex')
        }

        const sessionToken = await Session_cookies.create(sessionTokenInfo)

        return sessionToken

    }
}

module.exports = Authentication