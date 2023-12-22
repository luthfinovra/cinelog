const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const film = require('../controllers/film');
const { isLoggedIn } = require('../middleware');
const { renderFilmRekomendasi } = require('../controllers/film');

const ITEMS_PER_PAGE = 35;

router.route('/populer')
    .get(catchAsync(film.renderFilmPopuler));

router.route('/rekomendasi')
    .get(isLoggedIn, catchAsync(async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        
        const { films, hasKatalog, totalFilms} = await renderFilmRekomendasi(req); 

        res.render('film/rekomendasi', {
            films,
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < totalFilms,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(totalFilms / ITEMS_PER_PAGE),
            hasKatalog,
        });
    }));

router.route('/cari')
    .get(catchAsync(film.renderFilmCari));

router.route('/:id')
    .get(catchAsync(film.renderDetailFilm));

module.exports = router;