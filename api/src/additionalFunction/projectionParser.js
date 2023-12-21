const projectionParser = ( projection ) => {
    /* 
    - it takes a string INPUT similar to : "movieCover-movieThumbnail-movieName"
    and then OUTPUTS : "movieCover movieThumbnail movieName"
    */
    let processedData = projection.replace( "-", " " );
    return( processedData );
}

module.exports = projectionParser;