require('dotenv').config()
const Imagekit = require('@imagekit/nodejs')

const client = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


const uploadVideo = async(buffer) => {

   try {
        const result = await client.files.upload({
            file: buffer.toString("base64"),
            fileName: "video.mp4",
            folder: "/videos",
        });

        return result;
    } catch (err) {
        console.log("ImageKit Error:", err);
        throw err;
    }
}


const uploadImage = async(buffer) => {
    const result = await client.files.upload({
        file: buffer.toString('base64'),
        fileName: "image.png",
        folder: "/images"
    })

    return result
}

module.exports = {uploadVideo, uploadImage}