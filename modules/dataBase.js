const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.MONGO_LOCAL_URL;

console.log('\n::Establishing connection to database server...\n');

mongoose.connect(dbUrl, {
    /*useNewUrlParser: true,
    useUnifiedTopology: true*/
    serverSelectionTimeoutMS: 1000 // Wait 1 sec before trying to reconnect to mongo server
}).catch(err => {
    console.log('!! Database connection error !!\n');
    console.error('Error:', err.message + '\n');
})

const dBase = mongoose.connection;  //maintains a connection object which represents mongodb database

dBase.on('open', () => {
    console.log('::Database Status: connected.\n');
})

dBase.on('disconnected', () => {
    console.log('::Database Status: disconnected.\n');
})

/*dBase.on('error', () => {
    console.log('!! Database connection error !!');
})*/

/*setInterval(() => {
    console.log('Database Connection State:', mongoose.connection.readyState);
}, 3000);*/

module.exports = dBase;