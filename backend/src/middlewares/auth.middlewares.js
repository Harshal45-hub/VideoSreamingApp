require('dotenv').config()
const jwt = require('jsonwebtoken')


const authUser = async (req, res, next) => {

    const token = req.cookies?.token || req.authorization?.headers.split('')[1]

    if (!token) {
        return res.status(403).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "user") {
            return res.status(401).json({
                message: "You are not authorized to use this page"
            })
        }

        req.user = decoded

        next()


    } catch (error) {
        return res.status(403).json({
            message: error
        })
    }

}

const authAdmin = async (req, res, next) => {

    const token = req.cookies?.token || req.authorization?.headers.split('')[1]

    if (!token) {
        return res.status(403).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "admin") {
            return res.status(401).json({
                message: "You are not authorized to use this page"
            })
        }

        req.admin = decoded

        next()


    } catch (error) {
        return res.status(403).json({
            message: error
        })
    }

}


module.exports = { authUser, authAdmin }