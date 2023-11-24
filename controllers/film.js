const Pengguna = require('../models/film');
const films = require('../dummy.js');

module.exports.renderDetailFilm = (req, res) => {
    data = "";
    for(let film of films){
        if(film.id == req.params.id){
            data = film;
        }
    }
    res.render('film/detail', {data});
}

module.exports.renderFilmPopuler = (req, res) => {
    res.render('film/populer', {films});
}

module.exports.renderFilmRekomendasi = (req, res) => {
    res.render('film/rekomendasi', {films});
}

module.exports.renderFilmCari = (req, res) => {
    q  = req.query;
    res.render('film/cari', {films});
}