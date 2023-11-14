const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const options = { toJSON: { virtuals: true } };

const KatalogSchema = new Schema({
    judul: String,
    deskripsi: String,
    film: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Film',
        }
    ]
});

module.exports = mongoose.model('Katalog', KatalogSchema);