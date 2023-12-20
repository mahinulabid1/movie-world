const fs = require('fs');
const {uploadS3} = require('../../../AWS S3/uploadFile');

const processUploadedFile = ( req ) => {
    const files = req.files;
    const movieCover = fs.readFileSync(files.movieCover[0].path);
    const movieThumbnail = fs.readFileSync(files.movieThumbnail[0].path);
    const trailerThumbnail = fs.readFileSync(files.trailerThumbnail[0].path);

    // uploadS3 ( readFileUsing-fs, destination_in_s3_bucket [ basically a path ] )
    const uploadedMovieCover = uploadS3(movieCover, "movie");
    const uploadedMovieThumbnail = uploadS3(movieThumbnail, "movie");
    const uploadedTrailerThumbnail = uploadS3(trailerThumbnail, "movie");
    return {uploadedMovieCover, uploadedMovieThumbnail, uploadedTrailerThumbnail};
}

module.exports = processUploadedFile;