const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PenggunaSchema = new Schema({
    nama: String,
});

module.exports = mongoose.model('Pengguna', PenggunaSchema);