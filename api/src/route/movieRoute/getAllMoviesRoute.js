// Goal : fetch movies related data from database & send it as response
const { app }  = require( '../../../index' );
const getData = require( '../../controller/movie/fetchData/getMovieData' );

app.get( '/allMovies' , async ( req, res ) => {
    const queryLimit = Number( req.query.limit );
    const result = await getData( { queryLimit } );
    res.send( result );
})