const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const pengguna = require('../controllers/pengguna');

router.route('/register')
    .get(pengguna.renderRegisterForm)

router.route('/login')
    .get(pengguna.renderLoginForm)

module.exports = router;