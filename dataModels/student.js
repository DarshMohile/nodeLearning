const { uniq } = require('lodash');
const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    /*fName:
    {
        type: String,
        required: true
    },*/

    Name:
    {
        type: String,
        required: true
    },

    /*user_type:
    {
        type: String,
        enum: ['Student', 'Faculty'],
        required: true,
    },*/

    username:
    {
        type: String,
        required: true,
        unique: true
    },

    password:
    {
        type: String,
        required: true  
    },

   /*role:
    {
        enum: ['student', 'faculty'],
        required: true
    }*/
})

// Create a model of user
const User = mongoose.model('User', userSchema);
module.exports = User;