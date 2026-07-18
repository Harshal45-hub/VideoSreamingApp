const jwt = require('jsonwebtoken')
const userModel = require('../models/user.models')


const registerUser = async (req, res) => {

    const { username, email, password, role } = req.body

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
        password,
        role
    })


    const token = jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"user created successfully"
    })



}

const loginUser = async(req, res) => {

    const {username, email, password} = req.body

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"user does not exists. Please login first"
        })
    }

    const validatePassword = await user.comparePassword(password)

    if(!validatePassword){
        return res.status(400).json({
            message:"invalid credentials"
        })
    }

    const token = jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET)


    res.cookie("token", token)

    return res.status(201).json({
        message:'logged in',
        user: user,
        token: token
    })

}

module.exports = { registerUser, loginUser }