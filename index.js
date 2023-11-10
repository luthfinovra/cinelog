const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cinelog');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error"))
db.once("open", ()=>{
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
})