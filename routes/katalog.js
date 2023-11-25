const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const katalog = require('../controllers/katalog');

router.route('/')
    .get(katalog.renderShowKatalog);

router.route('/edit')
    .get(katalog.renderEditKatalog);

router.route('/:id')
    .get(katalog.renderKatalogDetail);

module.exports = router;