const express = require("express");
const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log(`app listen on port no: ${port}`);
})

app.get("/",(req,res)=>{
    let htmlStr = `<h1>Hello i am root path!</h1>`
    res.send(htmlStr);
})

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome to page of @${username}</h1>`
    res.send(htmlStr);
})

app.get("/:search",async(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothis to search!</h1>")
    }
    res.send(`<h1>This are the queries: ${q}</h1>`);
})


