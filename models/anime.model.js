const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    genre:[{
        type:String,
        required:true,
    }],
    rating:{
        type:String,
        required:true,
    },
    release_year:{
        type:String,
        required:true,
    },
    video:{
        type:String,
        required:true,
    },
    episodes:[
        {
            episode_number:{
                type:String,
            },
            video_url:{
                type:String,
            }
        }
    ],
},{
    timestamps:true,
});

module.exports = mongoose.model("Anime", animeSchema);