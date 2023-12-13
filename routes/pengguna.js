const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const pengguna = require('../controllers/pengguna');
const {storeReturnTo} = require('../middleware');

router.route('/register')
    .get(pengguna.renderRegisterForm)
    .post(catchAsync(pengguna.registerPengguna))

router.route('/login')
    .get(pengguna.renderLoginForm)
    .post(storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), pengguna.loginPengguna)

router.get('/logout', pengguna.logoutPengguna)

module.exports = router;