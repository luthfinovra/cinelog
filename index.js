const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Pengguna = require('./models/pengguna');

const penggunaRoutes = require('./routes/pengguna.js');
const katalogRoutes = require('./routes/katalog.js');
const filmRoutes = require('./routes/film.js');

mongoose.connect('mongodb://127.0.0.1:27017/cinelog');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error"))
db.once("open", ()=>{
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
passport.use(new LocalStrategy(Pengguna.authenticate()));

passport.serializeUser(Pengguna.serializeUser());
passport.deserializeUser(Pengguna.deserializeUser());

app.use('/', penggunaRoutes);
app.use('/film', filmRoutes);
app.use('/katalog', katalogRoutes); 

//Dummy data
films = require('./dummy.js');

films = films.slice(0,7);

app.get('/', (req, res) => {
    res.render('home', films)
})

app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
})