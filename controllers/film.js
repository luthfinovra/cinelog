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