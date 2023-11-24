const Pengguna = require('../models/film');
const films = require('../dummy.js');
const { query } = require('express');

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
    const query = req.query.search;
    
    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required.' });
    }

    const result = films.filter(item => item.judul.toLowerCase().includes(query.toLowerCase()));
    
    res.render('film/cari', {query, result});
}