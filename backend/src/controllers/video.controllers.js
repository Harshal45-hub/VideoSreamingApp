const videoModel = require('../models/video.models');
const { uploadVideo, uploadImage } = require('../services/storage.services');



const insertVideo = async (req, res) => {

    const uri = req.files?.video?.[0];
    const posterImage = req.files?.thumbnail?.[0];

    const {title, cast, genre, description} = req.body

    if (!uri || !posterImage || !title || !cast || !genre || !description) {
        return res.status(400).json({
            message: "please fill all details"
        })
    }

    const videoUrl = await uploadVideo(uri.buffer)
    const posterImageUrl = await uploadImage(posterImage.buffer)

    const createVideo = await videoModel.create({
        uri: videoUrl.url,
        posterImage: posterImageUrl.url,
        title: req.body.title,
        cast: req.body.cast,
        genre: req.body.genre,
        description: req.body.description
    })

    return res.status(201).json({
        message: "video uploaded successfully",
        createVideo
    })

}

const getVideos = async(req, res) => {

    try {
        const videos = await videoModel.find()

        return res.status(200).json({
            message: 'videos fetched successfully',
            videos: videos
        })

    } catch (error) {
        res.status(500).json({ 
            message: err.message 
        });
    }

}

module.exports = { insertVideo, getVideos }