const express = require('express');

const router = express.Router();

const { Review } = require('../models/review');

router.get('/', (req, res) => {
    Review.find().then((reviews) => {
        res.send(reviews);
    }).catch((err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {
    let body = req.body;
    let review = new Review(body);
    review.save().then((review) => {
        res.send(review);
    })
})

module.exports = {
    reviewsController: router
}