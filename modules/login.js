var fs = require('fs');
var userName = 'Darsh'
var passwd = 'darsh@123'

const doLogin = function Login()
{
    

    console.log("====|Logging you in|====\n");

    fs.readFile('../data/' + userName + '.json', loginCheck);

    function loginCheck(err, data)
    {
        console.log("::Finding your account...\n");

        if(err)
        {
            console.log("User not found.");
            return;
        }
    
        console.log("::Parsing data...\n")
        var user = JSON.parse(data);

        if(passwd != user.Password)
        {
            console.log("Incorrect Password. Try again.\n");
            return;
        }

        console.log("Successfully Logged in!")
    
        console.log(user);
    }
}

module.exports = doLogin;