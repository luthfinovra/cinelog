const Pengguna = require('../models/katalog');

module.exports.renderShowKatalog = (req, res) => {
    res.render('katalog/show');
}
