const express = require('express');
const router = express.Router();
const User = require('../dataModels/user');

var userQuery;


// Function to accept the data from user and create a new account by storing the data to DB
router.post('/signup', async (req, res) => {

    try
    {
        const data = req.body; // Generally, data from frontEnd comes from request body

        console.log('::Saving to the database...\n');
        var newUser = new User(data);
        var response = await newUser.save();

        console.log('::Data stored successfully.\n');
        res.status(200).json({success : 'Data stored successfully!'});
    }

    catch(err)
    {
        console.log('::Error accessing the data to database: ' + err + '\n');
        res.status(500).json({error : 'Internal Server Error.'});
    }

});


// Function to find and send the data to user. In this case, whose username is 'JV'
router.get('/show', async (req, res) => {

    try
    {
        const data = await User.find({ username: { $eq: userQuery }});
        console.log('::Fetching data\n');
        res.status(200).json(data);
    }

    catch(err)
    {
        console.log('::Error accessing the data from database: ' + err + '\n');
        res.status(500).json({error : 'Internal Server Error.'});
    }
})


// Function to find and update the data of user.
router.put('/update/:id', async (req, res) => {

    try
    {
        const userId = req.params.id;   //extract unique user id from request parameters
        const changes = req.body;   //extract the new values which are supposed to replace old data

        const response = await User.findByIdAndUpdate(userId, changes, {

            new: true,  //return the updated data
            runValidators: true     //Check all validations (like required field, not NULL etc...)
        })

        if(!response)   //If the specified record is not found
        {
            console.log('::Failed to update data. Specified id not found.\n');
            return res.status(404).json({err: 'User not found.'});
        }
        
        console.log('::Data updated successfully');
        res.status(200).json(response);
    }

    catch(err)
    {
        console.log('::Error accessing the data from database: ' + err + '\n');
        res.status(500).json({error : 'Internal Server Error.'});
    }
})


// Function to find and update the data of user.
router.delete('/delete/:id', async (req, res) => {

    try
    {
        const userId = req.params.id;   //extract unique user id from request parameters
        const changes = req.body;   //extract the new values which are supposed to replace old data

        const response = await User.findByIdAndDelete(userId, changes)

        if(!response)   //If the specified record is not found
        {
            console.log('::Failed to delete data. Specified id not found.\n');
            return res.status(404).json({err: 'User not found.'});
        }
        
        console.log('::Data deleted successfully');
        res.status(200).json(response);
    }

    catch(err)
    {
        console.log('::Error accessing the data from database: ' + err + '\n');
        res.status(500).json({error : 'Internal Server Error.'});
    }
})


module.exports = router;