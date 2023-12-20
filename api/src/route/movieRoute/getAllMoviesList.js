// Goal : fetch all movies from database & send it as response
const {app}  = require("../../../index");
const getData = require('../../controller/movie/fetchData/getMovieData');

app.get('/allMovies', async ( req, res ) => {
    let result;
    const queryLimit = Number(req.query.limit);
    if(queryLimit === undefined ) {
        result = await getData();
    }else{
        result = await getData(queryLimit);
    }
    
    res.send(result);
})