const MovieModel = require('../../../model/movieModel');
const projectionParser = require('../../../additionalFunction/projectionParser');
const { query } = require('express');


const getData = async ({queryLimit, condition, projection}) => {

    projection === undefined ? projection = '' : projection = projection;
    const parsedProjection = projectionParser( projection );

    if( condition === undefined ) {
        // fetch all data
        if(queryLimit !== undefined) {
            queryLimit = Number(queryLimit); 
            const data = await MovieModel.find( { } ).limit(queryLimit);
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
            queryLimit = Number(queryLimit); 
            // const parsedProjection = projectionParser( projection );
            const data = await MovieModel.find(condition, parsedProjection).limit(queryLimit);
            return data;
        }
        else {
            const data = await MovieModel.find(condition, parsedProjection);
            return data;
        }
    } 

    // if( queryLimit === undefined && condition === undefined && projection === undefined ) {
    //     // if everything is UNDEFINED
    //     const data = await MovieModel.find( { } );
    //     return data;
    // } 
    // else if ( queryLimit !== undefined && condition === undefined && projection === undefined ) {
    //     // if only queryLimit is DEFINED
    //     let limit = Number( queryLimit );
    //     const data = await MovieModel.find( { } ).limit( limit );
    //     return data;
    // } 
    // else if ( queryLimit === undefined && condition !== undefined && projection !== undefined ) {
    //     //if "condition" and "projection" is DEFINED, "queryLimit" is UNDEFINED
    //     const parsedProjection = projectionParser( projection );
    //     const data = await MovieModel.find( condition,  parsedProjection);
    //     return data;
    // }
    // else if ( queryLimit !== undefined && condition !== undefined && projection !== undefined ) {
    //     //if "condition" and "projection" is DEFINED, "queryLimit" is UNDEFINED
    //     const parsedProjection = projectionParser( projection );
    //     let limit = Number( queryLimit );
    //     const data = await MovieModel.find( condition,  parsedProjection).limit(limit);
    //     return data;
    // }
}

module.exports = getData;