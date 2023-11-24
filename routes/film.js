const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const film = require('../controllers/film');

const films = require('../dummy.js');

router.route('/populer')
    .get(film.renderFilmPopuler);

router.route('/rekomendasi')
    .get(film.renderFilmRekomendasi);

router.route('/:id')
    .get(film.renderDetailFilm);

module.exports = router;