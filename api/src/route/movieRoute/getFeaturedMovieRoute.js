// Goal : fetch movies data with advance filtering
const {app}  = require("../../../index");
const getData = require('../../controller/movie/fetchData/getMovieData');

app.get('/featuredMovie', async ( req, res ) => {
    const condition = {isFeatured: true}
    const queryLimit = req.query.limit;
    const projection = req.query.projection; // what to fetch from feature movie document
    const result = await getData({queryLimit, condition, projection});
    
    if(result.length === 0) {
        res.send("No data found!")
    }else {
        res.send(result);
    }
})