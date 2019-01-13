const express = require('express');
const router = express.Router();
const { usersController } = require('../app/controllers/users_controller');
const { pgsController } = require('../app/controllers/pgs_controller');
const { reviewsController } = require('../app/controllers/reviews_controller');

router.use('/users', usersController);
router.use('/reviews', reviewsController);
router.use('/pg', pgsController);

module.exports = {
    routes: router
}

