const MovieModel = require( '../../../model/movieModel' );
const projectionParser = require( '../../../additionalFunction/projectionParser' );


const getData = async ( { queryLimit, condition, projection } ) => {

    projection === undefined ? projection = '' : projection = projection;
    const parsedProjection = projectionParser( projection );

    if( condition === undefined ) {
        // fetch all data
        if( queryLimit !== undefined ) {
            queryLimit = Number( queryLimit ); 
            const data = await MovieModel.find( { } ).limit( queryLimit );
            return data;
        }
        else {
            const data = await MovieModel.find( { } );
            return data;
        }
    }

    else if( condition !== undefined ) {
        // fetch data with filter
        if( queryLimit !== undefined ) {
            queryLimit = Number( queryLimit ); 
            const data = await MovieModel.find( condition, parsedProjection ).limit( queryLimit );
            return data;
        }
        else {
            const data = await MovieModel.find( condition, parsedProjection );
            return data;
        }
    } 
}

module.exports = getData;