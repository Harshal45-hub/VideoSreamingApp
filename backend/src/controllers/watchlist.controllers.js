const watchListModel = require('../models/watchlist.models')
const videoModel = require('../models/video.models')

const addWatchList = async (req, res) => {


    const userId = req.user._id

    const videoId = req.params.videoId

    const video = await videoModel.findOne({
        _id: videoId
    })

    if (!video) {
        return res.status(404).json({
            message: "this video does not exists"
        })
    }

    let watchList = await watchListModel.findOne({
        user:userId
    })

    if(!watchList){
        watchList = await watchListModel.create({
            user:userId,
            favourite: [videoId]
        })
    }else{
        if(watchList.favourite.includes(videoId)){
            return res.status(409).json({
                message:'video already exists in watchlist'
            })
        }
        watchList.favourite.push(videoId)
        await watchList.save()
    }

    return res.status(200).json({
        message:'video added to watchlist'
    })

}

const getWatchList = async (req, res) => {

    const userId = req.user._id

    const watchList = await watchListModel.findOne({ user: userId })
        .populate("favourite")

    if (!watchList || watchList.length === 0) {
        return res.status(400).json({
            message: "no videos in the playlist"
        })
    }

    return res.status(201).json({
        message: "watchList fetched",
        watchList: watchList
    })

}

module.exports = { addWatchList, getWatchList }