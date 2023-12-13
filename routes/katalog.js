const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const katalog = require('../controllers/katalog');
const { isLoggedIn } = require('../middleware');

router.route('/')
    .get(isLoggedIn, katalog.renderShowKatalog);

router.route('/edit')
    .get(katalog.renderEditKatalog);

router.route('/new')
    .get(katalog.renderNewKatalogForm);

router.route('/:id')
    .get(katalog.renderKatalogDetail);

module.exports = router;