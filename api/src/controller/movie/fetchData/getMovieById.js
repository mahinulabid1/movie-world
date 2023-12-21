const MovieModel = require( '../../../model/movieModel' );

const getMovieById =async ( id ) => {
    if( id === undefined ) {
        return 'id is not defined';
    }
    else {
        console.log( 'running get movie by id' )
        const result = await MovieModel.findById( id );
        return result;
    }
    
}

module.exports = getMovieById;