import {ObjectId} from "mongodb";
import {Movie} from "../models/movie.model.js";

const checkIfRequestBodyIsNotEmpty = (body) => {
    return body.hasOwnProperty('title') &&
        body.hasOwnProperty('year') &&
        body.hasOwnProperty('director') &&
        body.hasOwnProperty('rating') &&
        body.hasOwnProperty('duration');
}

export const getAllMovies = (req, res) => {

    Movie.find()
        .then((movies) => {
            res.status(200)
            res.json({
                status: 'success',
                data: movies
            });
        })
}

export const addMovie = (req, res) => {
    const movie = new Movie(req.body);
    if (checkIfRequestBodyIsNotEmpty(req.body)) {
        movie.save().then(() => {
            res.status(201).json({
                status: 'success',
                data: movie
            })
        })
    } else {
        res.status(500).json({status: 'Bad Request'})
    }
}

export const updateMovie = (req, res) => {
    const newMovie = req.body;
    const movieId = req.params.id;

    if (checkIfRequestBodyIsNotEmpty(newMovie) && movieId) {
        Movie
            .findByIdAndUpdate({_id: new ObjectId(movieId)}, newMovie)
            .then(() => {
            res.status(200).json({
                status: 'success',
                data: newMovie
            })
        })
    }
}

export const deleteMovie = (req, res) => {
    const movieId = req.params.id;

    if (!movieId) {
        res.status(500).json({status: '500 Bad Request'});
        return;
    }
    Movie
        .findByIdAndDelete({_id: new ObjectId(movieId)}).then(() => {
        res.status(204).end();
    }).catch(err => {
        res.status(404).end(err.message);
    })
}
