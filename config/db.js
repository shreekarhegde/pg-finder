const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/pgFinder', {
    useNewUrlParser: true}).then(() => {
        console.log('connected to db');
    }).catch((err) => {
        console.log(err);
    });

    module.exports = {
        mongoose
    }