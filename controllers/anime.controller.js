// importing 
const Anime = require("../models/anime.model");
const asyncHandle = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

// GET anime list 
exports.getAnime = asyncHandle(async(req,res,next)=>{
    const anime = await Anime.find();
    if (!anime || anime.length === 0) {
        return next(new ErrorResponse('No anime found!', 404));
    }
    res.status(200).json({
        success: true,
        count: anime.length,
        data: anime,
    });
});

// GET anime by _id
exports.getAnimeById = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const anime = await Anime.findById(id);
    if (!anime) {
        return next(new ErrorResponse(`No anime found with id ${id}!`, 404));
    }
    res.status(200).json({
        success: true,
        data: anime,
    });
});

// POST create new anime
exports.createNewAnime = asyncHandle(async (req, res, next) => {
    const { title, description, genre, rating, release_year, episodes } = req.body;
    if (!title || !description || !genre || !rating || !release_year) {
        return next(new ErrorResponse('Please fill all fields correctly!', 400));
    }
    if (!req.file) {
        return next(new ErrorResponse('Video file is required!', 400));
    }
    const videoPath = `/uploads/${req.file.filename}`;
    const newAnime = await Anime.create({ title, description, genre, rating, release_year, video: videoPath, episodes });
    res.status(201).json({
        success: true,
        data: newAnime,
    });
});

// PUT update product by _id
exports.updateAnime = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const { title, description, genre, rating, release_year, video, episodes } = req.body;
    let anime = await Anime.findById(id);
    if (!anime) {
        return next(new ErrorResponse(`No anime found with id ${id}!`, 404));
    }
    anime = await Anime.findByIdAndUpdate(
        id,
        { title, description, genre, rating, release_year, video:videoPath, episodes },
    );
    res.status(200).json({
        success: true,
        data: anime,
    });
});

// DELETE anime by _id
exports.deleteAnime = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const anime = await Anime.findById(id);
    if (!anime) {
        return next(new ErrorResponse(`No anime found with id ${id}!`, 404));
    }
    await anime.deleteOne();
    res.status(200).json({
        success: true,
        message: `Anime with id ${id} successfully deleted!`,
    });
});