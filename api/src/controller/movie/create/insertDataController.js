const MovieModel = require("../../../model/movieModel");
const prepareFinalData = require("./prepareFinalData");
const createMovieData = async (req) => {
    /* 
    - req.files, returns OBJECT which contains- an ARRAY 
    - For debugging, try exploring the object via console.log(req.files);  
    */
    const processedData = prepareFinalData(req);
    const finalData = new MovieModel(processedData);
    finalData.save();
}

module.exports = {createMovieData}