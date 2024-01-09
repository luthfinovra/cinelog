require('dotenv').config();

//Library
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');

//Models
const Pengguna = require('./models/pengguna');
const Film = require('./models/film.js');

//Routes
const penggunaRoutes = require('./routes/pengguna.js');
const katalogRoutes = require('./routes/katalog.js');
const filmRoutes = require('./routes/film.js');

//Utility
const ExpressError = require('./utils/ExpressError.js');
const catchAsync = require('./utils/catchAsync.js');
const { renderFilmRekomendasi } = require('./controllers/film.js');

//Connect to Database
const dbUrl = process.env.DB_URL || `mongodb://127.0.0.1:27017/cinelog`;

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error"))
db.once("open", ()=>{
    console.log("Database connected");
})

//Initialize Server
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const secret = process.env.SECRET || 'shouldbeasecret';

//Session Configuration
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

//Konfigurasi Passport untuk Autentikasi
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

//Konnfigurasi Routing
app.use('/', penggunaRoutes);
app.use('/film', filmRoutes);
app.use('/katalog', katalogRoutes); 

app.get('/', catchAsync(async (req, res) => {
    try {
        const { films, hasKatalog } = await renderFilmRekomendasi(req);

        const popularFilms = await Film.find({}).sort({ rating: -1 }).limit(50);
        
        res.render('home', {
            films: films.slice(0, 7),
            popularFilms: popularFilms.slice(0, 7),
            hasKatalog,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));

app.all('*', (req, res, next) => {
    next(new ExpressError('404 Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

const port = process.env.PORT || 3000;

//Start Server
app.listen(port, ()=>{
    console.log('listening on http://localhost:3000');
})