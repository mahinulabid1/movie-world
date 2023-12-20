const MovieModel = require('../../../model/movieModel');

// CONTAINS: functions that are related to database operations
const getData = async (limit) => {
    if(limit === undefined) {
        const data = await MovieModel.find({});
        return data;
    } else if ( limit !== undefined && typeof limit === 'number'){
        const data = await MovieModel.find({}).limit(limit);
        return data;
    }
}

module.exports = getData;