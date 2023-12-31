const Pengguna = require('../models/pengguna');
const Katalog = require('../models/katalog');
const Film = require('../models/film');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports.renderShowKatalog = async (req, res) => {
    const user = await Pengguna.findById(req.user._id).populate({
        path: 'katalog',
        populate: {
            path: 'film', 
            model: 'Film',
        }
    });
    const katalogs = user.katalog;

    res.render('katalog/show', {katalogs});
}

module.exports.renderEditKatalog = async (req, res) => {
    const user = await Pengguna.findById(req.user._id).populate({
        path: 'katalog',
        populate: {
            path: 'film', 
            model: 'Film',
        }
    });
    const katalogs = user.katalog;

    res.render('katalog/edit', {katalogs});
}

module.exports.renderNewKatalogForm = (req, res) => {
    res.render('katalog/new');
    
}

module.exports.createNewKatalog = async (req, res) => {
    const katalog = new Katalog(req.body.katalog);

    // Parse the selectedResults object
    const selectedResults = JSON.parse(req.body.selectedResults);

    // Extract the film IDs from selectedResults and convert them to ObjectId
    const filmIds = Object.keys(selectedResults).map(filmId => new ObjectId(filmId));

    // Find films based on the extracted IDs
    const films = await Film.find({ '_id': { $in: filmIds } });

    // Push each film to katalog.film
    katalog.film.push(...films);

    // Save the katalog
    await katalog.save();

    // Update user's katalog
    const user = await Pengguna.findById(req.user._id);
    user.katalog.push(katalog);
    await user.save();

    req.flash('success', 'Berhasil Menambahkan Katalog');
    res.redirect('/katalog');
}

module.exports.renderKatalogDetail = async (req, res) => {
    const data = await Katalog.findById(req.params.id).populate('film');
    res.render('katalog/detail', {data});
}

module.exports.deleteKatalog = async (req, res) => {
    const katalogId = req.params.id;
    const userId = req.user.id;
    await Pengguna.findByIdAndUpdate(userId, {$pull: {katalog: katalogId}});
    await Katalog.findByIdAndDelete(katalogId);
    req.flash('success', 'Berhasil Menghapus Katalog')
    res.redirect('/katalog');
}

module.exports.renderEditDetail = async (req, res) => {
    const katalogId = req.params.id;
    const data = await Katalog.findById(req.params.id).populate('film');
    res.render('katalog/editDetail', {data});
}

module.exports.editKatalog = async (req, res) => {
    const katalogId = req.params.id;
    const body = req.body.katalog;
    const selectedResults = JSON.parse(req.body.selectedResults);

    try {
        const existingKatalog = await Katalog.findById(katalogId);

        if (!existingKatalog) {
            return res.status(404).send('Katalog not found');
        }

        // Map the selected film IDs to ObjectId and update the film array
        const updatedFilmIds = Object.keys(selectedResults).map(filmId => new ObjectId(filmId));
        existingKatalog.film = updatedFilmIds;

        // Update other properties
        existingKatalog.judul = body.judul;
        existingKatalog.deskripsi = body.deskripsi;

        // Save the updated Katalog data back to the database
        await existingKatalog.save();

        // Redirect to the Katalog details page
        req.flash('success', 'Berhasil Mengubah Katalog')
        res.redirect(`/katalog/${katalogId}`);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};