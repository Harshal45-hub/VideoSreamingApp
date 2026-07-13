const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',   // no fixed URI needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))


//routes imports
const authRoutes = require('./routes/auth.routes')
const videoRoutes = require('./routes/video.routes')


//routes use
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/video', videoRoutes)


module.exports = app