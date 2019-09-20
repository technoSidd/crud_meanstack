const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

var app = express();

const port = 3000;
app.listen(port, () => console.log('Server started at PORT :' + port));


const { mongoose } = require('./db.js');

app.use(bodyParser.json());

var employeeController = require('./controllers/employeeController');



app.use('/employees', employeeController);
