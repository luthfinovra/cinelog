const Pengguna = require('../models/katalog');
const katalogs = require('../katalogDummy');

module.exports.renderShowKatalog = (req, res) => {
    res.render('katalog/show', {katalogs});
}

module.exports.renderEditKatalog = (req, res) => {
    res.render('katalog/edit', {katalogs});
}

module.exports.renderKatalogDetail = (req, res) => {
    data = "";
    for(let katalog of katalogs){
        if(katalog.id == req.params.id){
            data = katalog;
        }
    }
    res.render('katalog/detail', {data});
}
