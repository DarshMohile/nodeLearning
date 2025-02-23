const express = require('express');
const bodyParser = require('body-parser');
const dbase = require('./modules/dataBase');
const userRoutes = require('./routes/routes');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


console.log('::Server is live.\n')


// Home of server which indicates that server is online and working
app.get('/', (req, res) => {

    res.send('<h2>Server is Online.</h2> <br> <h3>Darsh is lazy. Pls wait till he properly sets up the database and frontend</h3> <br> <h3>(^w^)</h3>');
})

//Use the endpoints defined in routes.js
app.use('/', userRoutes);


//initiate server on port 3000
app.listen(port);