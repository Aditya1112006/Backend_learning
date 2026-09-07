const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`); // Handling request
})

app.use((req, res) =>{
    console.log("request recieved");
    let heroes = "<h1>Avengers</h1><ul><li>Iron Man</li><li>Thor</li><li>Captain America</li><li>Hulk</li><li>Black Widow</li><li>Hawkeye</li></ul>";
    res.send(heroes); // Sending a response
})

app.get('/', (req,res) => {
    res.send("Request for root path");
})
app.post('', (req,res) => {
    res.send("Request for post root path");
})
app.get('/ironman', (req,res) => {
    res.send("Request for Iron Man path");
})
app.get('/spidey', (req,res) => {
    res.send("Request for Spidey path");
})
app.get("/*splat", (req, res) => { // wildcard that do not throw error whereas display message instead of that
    let message = "<h1>No such path defined</h1>";
    res.send(message);
})