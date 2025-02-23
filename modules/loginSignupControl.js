const login = require('./login');
const signUp = require('./signUp');

var newAccount = 1;

if(newAccount == 1)
{
    signUp();
}

else
{
    login();
}

