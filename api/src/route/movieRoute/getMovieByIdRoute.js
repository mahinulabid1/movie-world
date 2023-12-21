// Goal : fetch specific movie details from database & send it as response
// movie will be fetched using unique ID
const { app }  = require( '../../../index' );
const getMovieById = require( '../../controller/movie/fetchData/getMovieById' );

app.get( '/movieDetail' , async ( req, res ) => {
    let data = await getMovieById( req.query.id );
    if( data !== "" ){
        res.send( data ); 
    }
    else {
        res.send( 'no data found' );
    }
})