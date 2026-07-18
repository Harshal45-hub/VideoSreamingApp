const express = require('express')
const multer = require('multer')
const authMiddleware = require('../middlewares/auth.middlewares')
const videoController = require('../controllers/video.controllers')
const watchListController = require('../controllers/watchlist.controllers')

const router = express.Router()

const upload = multer({storage: multer.memoryStorage()})

router.post('/uploadVideo', authMiddleware.authAdmin, upload.fields([{name:"video", maxCount:1}, {name: "thumbnail", maxCount:1}]), videoController.insertVideo )
router.post('/watchlist/:videoId', authMiddleware.authUser, watchListController.addWatchList)
router.get('/', authMiddleware.authUser, videoController.getVideos)
router.get('/watchlist', authMiddleware.authUser, watchListController.getWatchList)

module.exports = router


