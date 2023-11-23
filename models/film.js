const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: Number,
    judul: String,
    durasi: Number,
    rating: Number,
    tahunRilis: Number,
    sutradara: String,
    linkCover: String,
    genre: [String],
    sinopsis: String,
})

module.exports = mongoose.model('Film', FilmSchema);