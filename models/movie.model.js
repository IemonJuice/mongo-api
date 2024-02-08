import mongoose, {Schema} from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genres: [String],
    duration: {
        hours: {
            type: Number
        },
        minutes: {
            type: Number
        }
    },
    reviews: [String]
})

export const Movie = mongoose.model('Movie',movieSchema)