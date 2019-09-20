const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/sampleDB', (err) => {
    if(!err) {
        console.log('MongoDB connection success.');
    } else {
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    }
});

//port
const port = 3000;

//adding middleware --cors
app.use(cors());

//adding body-parser
app.use(bodyParser.json());

//static file
app.use('/static', express.static(path.join(__dirname, 'public')))

//routes
app.use('/api', route);

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, () => console.log('Server started at PORT :' + port));