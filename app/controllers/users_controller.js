const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.send(users);
    }).catch((err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    let body = req.body;
    let user = new User(body);
    user.save().then((user) => {
        res.send(user);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports = {
    usersController: router
}
