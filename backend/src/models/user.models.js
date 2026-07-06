const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "username already exists"],
        minLength: [6, "username must be atleast 6 characters long"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email address already exists"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "invalid email"],
    },
    password: {
        type: String,
        minLength: [8, "password must be 8 characters long"],
        required: [true, "password is required"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user",
        required: [true, "role is required"]
    }
})


userSchema.pre("save", async function (next) {
    if(!this.isModified('password')){
        return
    }

    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(this.password, salt)
        this.password = hash
        
    } catch (error) {
        next(error)
    }
})


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compareSync(password, this.password)
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel