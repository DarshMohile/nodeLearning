const fs = require('fs');

var user = {

    Username: "",
    Password: ""
};

var uName = 'Darsh';
var pswd = 'darsh@123';

const doSignup = function SignUp()
{
    console.log("::Registering new account::\n");

    console.log("--> Getting Username...\n");
    user.Username = uName;

    console.log("--> Getting Password...\n");
    user.Password = pswd;

    console.log("::Convering to JSON\n");
    var userJson = JSON.stringify(user);

    console.log("::Creating file\n");

    fs.appendFile('../data/'+user.Username+'.json', userJson, () => 
        {        
            console.log("<-- Data Saved!\n")
        });
}

module.exports = doSignup;




