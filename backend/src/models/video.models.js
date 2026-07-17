const mongoose =  require('mongoose')
const uploadVideo = require('../services/storage.services')

const videoSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: [true, "uri is required"],
        unique: true
    },
    posterImage: {
        type: String,
        required: [true, "Poster image is mandatory"],
        unique: true
    },
    title: {
        type: String,
        required: [true,"title is required"]
    },
    cast: [{
        type: String,
        required: [true, "cast is required"]
    }],
    genre: {
        type: String,
        required: [true,"genre is required"],
        enum: ['Romantic', 'Sci-fi', 'Thriller', 'Horror', 'Drama', 'Animation', 'Action'],
        default: 'Action'
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{timetamps:true})

const videoModel = mongoose.model("video", videoSchema)

module.exports = videoModel