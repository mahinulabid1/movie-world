const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        movieName : {
            type : String,
            required : [true, 'Movie Name is missing']
        },
        movieCover : {
            url : {
                type : String,
                required : true
            },
            imageName : {
                type : String,
                required : true
            }
        },
        movieThumbnail : {
            url : {
                type : String,
                required : true
            },
            imageName : {
                type : String,
                required : true
            }
        },
        trailerThumbnail : {
            url : {
                type : String,
                required : true
            },
            imageName : {
                type : String,
                required : true
            }
        },
        movieDescriptionSummary : {
            type : String,
            required :  [true, "Movie description summary is missing"]
        },
        description : {
            type: String,
            required :  [true, "Movie description is missing"]
        },
        episodeCount : {
            type : Number,
            required :  [true, "Episode count is missing"]
        },
        photoes : {
            type : Number,
            required : [true, 'photoes value is required']
        },
        director : {
            type : String,
            required :  [true, "director Name is missing"]
        },
        isFeatured: {
            //featured movie's information will appear on homepage hero section
            type: Boolean,
            required: [true, "isFeatured not defined"]
        },
        isReleased : {
            type: Boolean,
            required : [true, "isReleased not defined"]
        }

    },
    {
        collection : "MovieDB"
    }
)

const MovieModel = new mongoose.model("MovieDB", MovieSchema);
module.exports = MovieModel;