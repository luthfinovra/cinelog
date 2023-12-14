const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: Number,
    judul: String,
    durasi: Number,
    rating: Number,
    tahunRilis: Number,
    sutradara: String,
    link_cover: String,
    genre: [String],
    sinopsis: String,
    pemeran: [Object],
})

module.exports = mongoose.model('Film', FilmSchema);