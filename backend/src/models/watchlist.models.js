const mongoose = require('mongoose')

const watchListSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    favourite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "video"
    }]
},{timestamps:true})

const watchListModel = mongoose.model("watchList", watchListSchema)

module.exports = watchListModel