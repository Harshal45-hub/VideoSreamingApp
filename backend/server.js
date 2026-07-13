require('dotenv').config()
const connectDB = require('./src/db/db')
const app = require('./src/app')



connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000 , () => {
        console.log(`app is listening on port ${process.env.PORT}`)
    })
})
.catch(err => {
    console.log("problem in the server", err)
})