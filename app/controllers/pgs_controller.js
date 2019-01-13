const express = require('express');
const { Pg } = require('../models/pg');

const router = express.Router();

router.get('/', (req, res) => {
    Pg.find().then((pgs) => {
        res.send(pgs);
    }).catch((err) => {
        res.send(err);
    })
})

router.get('/:category', (req, res) => {
    console.log(req.params.category)
    Pg.find({category: req.params.category}).then((pgs) => {
        console.log(pgs)
        res.send(pgs);
    }).catch((err) => {
        res.send(err);
    })
})


router.post('/', (req, res) => {
    let body = req.body;
    let pg = new Pg(body);
    pg.save().then((pg) => {
        res.send(pg);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports = {
    pgsController: router
}