const Pengguna = require('../models/pengguna');

module.exports.renderRegisterForm = (req, res) => {
    res.render('pengguna/register');
}

module.exports.registerPengguna = async (req, res, next) => {
    try{
        const { email, username, password } = req.body;
        const user = new Pengguna({email, username});
        const registeredUser = await Pengguna.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err);
            req.flash('success', 'Successfully Registered');
            res.redirect('/login')
        });
    }catch(err){
        req.flash('error', err.message);
        res.redirect('/register');
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render('pengguna/login');
}

module.exports.loginPengguna = (req, res) => {
    req.flash('success', 'Successfully Login');
    const redirectUrl = res.locals.returnTo || '/';
    res.redirect(redirectUrl);
}

module.exports.logoutPengguna = (req, res) =>{
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/login');
    });
}