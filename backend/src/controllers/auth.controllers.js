const jwt = require('jsonwebtoken')
const userModel = require('../models/user.models')


const registerUser = async (req, res) => {

    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(409).json({
            message: "above credentials are required"
        })
    }

    const isUserExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserExists) {
        return res.status(414).json({
            message: "user exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })


    const token = jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"user created successfully"
    })



}

module.exports = { registerUser }