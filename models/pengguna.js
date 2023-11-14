const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const penggunaSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    katalog: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Katalog',
        }
    ]
});

penggunaSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Pengguna', penggunaSchema);