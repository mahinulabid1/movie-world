const express = require("express");
const app = express();

const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const upload = multer ( { dest : 'upload/' });


const nonProcessedURL = process.env.MONGODB_CONNECT_URL;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DATABASE_NAME;
let url = nonProcessedURL.replace('<password>', password); 
url = url.replace("<databaseName>", dbName);

(async () => {
    try {
        mongoose.connect(
            url
            // the url parser is deprecated, not using it anymore
        );
        console.log("Log: Succesfully Connected to the Database \n");
    }
    catch ( err ) {
        console.log( err );
    }
})();

module.exports = {
    app,
    upload,
    mongoose,
};

app.get('/', (req, res) => {
    res.send("hello");
})

require('./src/route/movieRoute/main');

app.listen(8000);