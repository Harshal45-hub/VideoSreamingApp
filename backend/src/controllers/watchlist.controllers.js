const watchListModel = require('../models/watchlist.models')
const videoModel = require('../models/video.models')

const addWatchList = async(req, res) => {

    const videoId = req.params.videoId

    const video = await videoModel.findOne({
        _id: videoId
    })

    if(!video){
        return res.status(404).json({
            message:"this video does not exists"
        })
    }

    const watchListVideo = await watchListModel.create({
        favourite: video._id
    })

    return res.status(201).json({
        message: "video added to watchlist"
    })

}

module.exports = {addWatchList}