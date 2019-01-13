const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

const mongoose = require('./config/db');

const { routes } = require('./config/routes');
app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
    console.log('listeing on port', port);
})