// prepare final data to be uploaded in MongoDB
const processUploadedFile = require('./processUploadedFiles');
const cloudfrontUrl = process.env.CLOUDFRONT_URL;

const prepareFinalData = ( req ) => {
    let data = req.body.data;
    data = JSON.parse(data);
    const { 
        uploadedMovieCover, 
        uploadedMovieThumbnail, 
        uploadedTrailerThumbnail
    } = processUploadedFile( req );

    // preparing additional data to be sent to MongoDB
    const fileInfoObj = {
        movieCover : {
            url : `https://${cloudfrontUrl}/movie/${uploadedMovieCover}`,
            imageName : uploadedMovieCover
        },
        movieThumbnail : {
            url : `https://${cloudfrontUrl}/movie/${uploadedMovieThumbnail}`,
            imageName : uploadedMovieThumbnail
        },
        trailerThumbnail : {
            url : `https://${cloudfrontUrl}/movie/${uploadedTrailerThumbnail}`,
            imageName : uploadedTrailerThumbnail
        }
    }



    // inheriting properties of fileInfoObj in data
    Object.assign(data, fileInfoObj);
    return data;
}

module.exports = prepareFinalData;