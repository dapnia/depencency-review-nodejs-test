const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const lodash = require('lodash');
const moment = require('moment');
const axios = require('axios');
const dotenv = require('dotenv');
const winston = require('winston');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    const message = lodash.capitalize('hello world');
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.send(`${message}! Current server time is ${time} !.`);
});

app.listen(3000, () => {
    winston.log('info', 'Server is running on port 3000');
});