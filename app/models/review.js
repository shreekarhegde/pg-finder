const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    food: {
        type: Number
    },
    cleanliness: {
        type: Number
    },
    security: {
        type: Number
    },
    freedom: {
        type: Number
    },
    facilities: {
        type: Number
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Review
}