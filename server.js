const express = require('express');
const bodyParser = require('body-parser');
const dbase = require('./modules/dataBase');
const userRoutes = require('./routes/routes');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


console.log('::Server is live.\n')


// Home of server which indicates that server is online and working
app.get('/', (req, res) => {

    res.send('Server is Online.');
})

//Use the endpoints defined in routes.js
app.use('/', userRoutes);


//initiate server on port 3000
app.listen(3000);