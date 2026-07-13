const videoModel = require('../models/video.models');
const { uploadVideo, uploadImage } = require('../services/storage.services');



const insertVideo = async (req, res) => {

    const uri = req.files?.video?.[0];
    const posterImage = req.files?.thumbnail?.[0];

    const {title, cast} = req.body

    if (!uri || !posterImage || !title || !cast) {
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
        cast: req.body.cast
    })

    return res.status(201).json({
        message: "video uploaded successfully"
    })

}

module.exports = { insertVideo }