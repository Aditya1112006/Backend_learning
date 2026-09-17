const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req,res) =>{
    let {user, password} = req.query
    res.send(`Standard GET reponse. Welcome ${user}`);
})

app.post("/register", (req,res) =>{
    res.send("Standard POST reponse");
})

app.listen(port, () =>{
    console.log(`listening at port ${port}`);
})