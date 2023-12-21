const {app, upload} = require( '../../../index' );
const {createMovieData} = require( '../../controller/movie/create/insertDataController' );

const fileFields = [
    {
        name : 'movieCover', // form-data's key-name
        maxCount : 1
    },
    {
        name : 'movieThumbnail',
        maxCount : 1
    },
    {
        name : 'trailerThumbnail',
        maxCount : 1
    }
]

app.post( '/newMovie' , upload.fields( fileFields ), ( req , res ) => {
    /* 
        - file will be sent by form-data [ testing tool: POSTMAN application ]
        - (upload.fields), is a functions of MULTER
        - req.files, returns OBJECT which contains- an ARRAY 
        - For debugging, try exploring the object via console.log(req.files);  
    */
    
    createMovieData( req );
    res.send( 'file received' );
} )