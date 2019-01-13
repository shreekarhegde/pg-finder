const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pgSchema = new Schema({
    pgName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    charges: {
        type: String,
        required: true
    },
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
})

const Pg = mongoose.model('Pg', pgSchema);

module.exports = {
    Pg
}