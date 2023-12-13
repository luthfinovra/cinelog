const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError.js');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Pengguna = require('./models/pengguna');

const penggunaRoutes = require('./routes/pengguna.js');
const katalogRoutes = require('./routes/katalog.js');
const filmRoutes = require('./routes/film.js');

const dbUrl = process.env.DB_URL || `mongodb://127.0.0.1:27017/cinelog`;

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error"))
db.once("open", ()=>{
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const secret = process.env.SECRET || 'shouldbeasecret';

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret,
    }
})

store.on('error', function (err) {
    console.error("session store error", err);
})

const sessionConfig = {
    store,
    name: 'randomcookie',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Pengguna.authenticate()));

passport.serializeUser(Pengguna.serializeUser());
passport.deserializeUser(Pengguna.deserializeUser());

app.use((req, res, next) =>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', penggunaRoutes);
app.use('/film', filmRoutes);
app.use('/katalog', katalogRoutes); 

//Dummy data
films = require('./dummy.js');

films = films.slice(0,7);

app.get('/', (req, res) => {
    res.render('home', films)
})

app.all('*', (req, res, next) => {
    next(new ExpressError('404 Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('listening on http://localhost:3000');
})