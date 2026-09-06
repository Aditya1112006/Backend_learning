const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})

app.use((req, res) =>{
    console.log("request recieved");
    let heroes = "<h1>Avengers</h1><ul><li>Iron Man</li><li>Thor</li><li>Captain America</li><li>Hulk</li><li>Black Widow</li><li>Hawkeye</li></ul>";
    res.send(heroes);
})
