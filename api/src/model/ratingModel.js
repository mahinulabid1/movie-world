const mongoose = require('mongoose');

const RatingModel = new mongoose.Schema(
    {
        movieId: {
            type: String,
            required : [true, 'MovieId is not defined']
        },
        ratingDetail: {
            type: [{
              type: String,
              // You can define additional validations for the items in the array here
            }],
            default: [], // Default value is an empty array
        },

        
    },
    {
        collection : "movieRating"
    }
)