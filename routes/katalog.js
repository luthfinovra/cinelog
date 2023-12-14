const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const katalog = require('../controllers/katalog');
const { isLoggedIn } = require('../middleware');

router.route('/')
    .get(isLoggedIn, catchAsync(katalog.renderShowKatalog))
    .post(isLoggedIn, catchAsync(katalog.createNewKatalog))

router.route('/edit')
    .get(isLoggedIn, catchAsync(katalog.renderEditKatalog))

router.route('/edit/:id')
    .get(isLoggedIn, catchAsync(katalog.renderEditDetail))

router.route('/new')
    .get(isLoggedIn, katalog.renderNewKatalogForm)

router.route('/:id')
    .get(isLoggedIn, catchAsync(katalog.renderKatalogDetail))
    .delete(isLoggedIn, catchAsync(katalog.deleteKatalog))

module.exports = router;