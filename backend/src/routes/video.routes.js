const express = require('express')
const multer = require('multer')
const authMiddleware = require('../middlewares/auth.middlewares')
const videoController = require('../controllers/video.controllers')

const router = express.Router()

const upload = multer({storage: multer.memoryStorage()})

router.post('/uploadVideo', authMiddleware.authAdmin, upload.fields([{name:"video", maxCount:1}, {name: "thumbnail", maxCount:1}]), videoController.insertVideo )

module.exports = router


