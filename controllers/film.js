const Film = require('../models/film');

module.exports.renderDetailFilm = async (req, res) => {
    data = await Film.find({id: req.params.id});
    data = data[0];
    res.render('film/detail', {data});
}

module.exports.renderFilmPopuler = async (req, res) => {
    films = await Film.find({}).sort({'rating': -1});
    films = films.slice(0,100);
    res.render('film/populer', {films});
}

module.exports.renderFilmRekomendasi = async (req, res) => {
    films = await Film.find({}).sort({'rating': -1});
    films = films.slice(100,200);
    res.render('film/rekomendasi', {films});
}

module.exports.renderFilmCari = async (req, res) => {
    let query = req.query.search;

    if (!query) {
        query = 'Anda tidak mencari apapun';
        let result = ""
        return res.render('film/cari', {query, result});
    }

    const result = await Film.find({'judul': {$regex: `${query}`}}).sort({'rating': -1}).limit(50);
    res.render('film/cari', {query, result});
}