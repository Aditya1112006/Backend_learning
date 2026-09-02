const figlet = require('figlet');

figlet("Aditya Chauhan", function(err,data){
    if(err){
        console.log("Something went wrong...");
        console.log(err);
        return;
    }
    console.log(data);
});