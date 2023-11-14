const Pengguna = require('../models/pengguna');

module.exports.renderRegisterForm = (req, res) => {
    res.render('pengguna/register');
}

module.exports.renderLoginForm = (req, res) => {
    res.render('pengguna/login');
}