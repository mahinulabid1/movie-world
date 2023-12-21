const { generateUniqueKey } = require( '../additionalFunction/generateUniqueKey' );
const { s3 } = require( './initializeS3' );


const uploadS3 = ( file, uploadDestination ) => {
    /*
        - (file) argument needs to be an image file read by fs.readFileSync
        - read the image and then pass it as argument
    */
    const uniqueKey = generateUniqueKey( );

    s3.putObject ( {
        Body : file,
        Key : `${uploadDestination}/${uniqueKey}.jpg`,  // do not start with "/", it will create a file with name "/"
        Bucket : 'movieworld8000',
        ACL : "public-read",
    }, 
    
    ( err ) => {
        if( err ) {
            console.log( err ) 
        } else{
            console.log( "upload successful" );
        } 
    });

    const fileName = uniqueKey + ".jpg";
    return fileName;
}

module.exports = { uploadS3 };