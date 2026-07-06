const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
    try {

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected Successfully...✅✅✅")
        console.log(`host is: ${connectionInstance.connection.host}`)

    } catch (error) {

        console.log("MongoDB connection failed..❌❌❌",error)
        
    }
}

module.exports = connectDB