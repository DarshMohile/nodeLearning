const passport = require('passport');
const User = require('../dataModels/student');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(async (userName, passWord, done) => {

    try
    {
        console.log('::Received Credentials: ', userName, passWord);
        const user = await User.findOne({ username : userName});
        if(!user)
        {
            return done(null, false, {message: 'User not found.'});
        }

        const passwdMatch = user.password === passWord ? true : false;

        if(passwdMatch)
        {
            return done(null, user);
        }
        else
        {
            return  done(null, false, {message: 'Incorrect password.'});
        }
    }
    catch(err)
    {
        return done(err);
    }
}))

module.exports = passport;