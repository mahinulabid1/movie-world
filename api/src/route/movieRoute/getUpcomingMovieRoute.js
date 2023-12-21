// Goal : fetch movies data with advance filtering
const { app }  = require( '../../../index' );
const getData = require( '../../controller/movie/fetchData/getMovieData' );

app.get( '/upcomingMovies' , async ( req, res ) => {
    let result;
    const queryLimit = req.query.limit;
    const projection = req.query.projection; // what to fetch from upcoming movie document
    let condition = { isReleased: false }
    result = await getData( { queryLimit, condition, projection } );

    if( result.length === 0 ) {
        res.send( 'No data found!' )
    }else {
        res.send( result );
    }
    
})