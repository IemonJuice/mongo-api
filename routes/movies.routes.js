import express from 'express';
import {getAllMovies, addMovie, updateMovie, deleteMovie} from "../controllers/movies.controllers.js";

const router = express.Router();

router
    .get('/api/movies',getAllMovies)
    .post('/api/movies/movie',addMovie)
    .put('/api/movies/movie/:id',updateMovie)
    .delete('/api/movies/movie/:id',deleteMovie)

export { router }

