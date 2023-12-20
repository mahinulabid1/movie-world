// Goal : fetch specific movie details from database & send it as response
// movie will be fetched using unique ID
const {app}  = require("../../../index");

app.get('/movieDetail', ( req, res ) => {
    res.send('get movie detail using ID');
})