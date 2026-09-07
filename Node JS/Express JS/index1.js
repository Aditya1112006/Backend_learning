// Path parameters

const express = require('express');
const app = express();

let port = 5000;

app.listen(port, ()=> {
    console.log(`Serve is running at port ${port}`);
})

app.get('/', (req,res) => {
    res.send("Root path")
})

app.get('/:username/:id', (req,res) => {
    let {username , id} = req.params;
    res.send(`Hello this path is belongs to @${username} having id ${id}`);
})

// query results

app.get('/search', (req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`Query for ${q}`);
})