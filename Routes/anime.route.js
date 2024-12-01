const { Router } = require("express");
const router = Router();
const {
    getAnime,
    getAnimeById,
    createNewAnime,
    updateAnime,
    deleteAnime,
} = require("../controllers/anime.controller");

// GET all anime
/**
 * @swagger
 * /api/v1/anime/all:
 *   get:
 *     summary: Get all anime
 *     description: Get a list of all anime
 *     responses:
 *       200:
 *         description: List of all anime
 */
router.get("/all", getAnime);

// Get anime by ID
/**
 * @swagger
 * /api/v1/anime/all/{id}:
 *   get:
 *     summary: Get anime by ID
 *     description: Get anime by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the anime
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single anime
 *       404:
 *         description: Anime not found
 */
router.get("/all/:id", getAnimeById);

// CREATE new anime
/**
 * @swagger
 * /api/v1/anime/create:
 *   post:
 *     summary: Create a new anime
 *     description: Add a new anime to the collection
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               genre:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: string
 *               release_year:
 *                 type: string
 *               video:
 *                 type: string
 *               episodes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     episode_number:
 *                       type: string
 *                     video_url:
 *                       type: string
 *     responses:
 *       201:
 *         description: Anime successfully created
 *       400:
 *         description: Invalid input
 */
router.post("/create", createNewAnime);

// UPDATE anime
/**
 * @swagger
 * /api/v1/anime/update/{id}:
 *   put:
 *     summary: Update anime by ID
 *     description: Update the details of an anime
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the anime to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               genre:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: string
 *               release_year:
 *                 type: string
 *               video:
 *                 type: string
 *               episodes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     episode_number:
 *                       type: string
 *                     video_url:
 *                       type: string
 *     responses:
 *       200:
 *         description: Anime successfully updated
 *       400:
 *         description: Invalid input
 */
router.put("/update/:id", updateAnime);

// DELETE anime
/**
 * @swagger
 * /api/v1/anime/delete/{id}:
 *   delete:
 *     summary: Delete anime by ID
 *     description: Delete an anime by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the anime to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime successfully deleted
 *       404:
 *         description: Anime not found
 */
router.delete("/delete/:id", deleteAnime);

module.exports = router;