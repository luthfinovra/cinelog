const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const film = require('../controllers/film');
const { isLoggedIn } = require('../middleware');

router.route('/populer')
    .get(catchAsync(film.renderFilmPopuler));

router.route('/rekomendasi')
    .get(isLoggedIn, catchAsync(film.renderFilmRekomendasi));

router.route('/cari')
    .get(catchAsync(film.renderFilmCari));

router.route('/:id')
    .get(catchAsync(film.renderDetailFilm));

module.exports = router;