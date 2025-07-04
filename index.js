const express = require("express");

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`app is listen on port: ${port}`);
});

app.get("/",(req,res)=>{
    res.send("You are on root path!");
});

app.get("/contact",(req,res)=>{
    res.send("You are on contact path!");
});

// app.get("*",(req,res)=>{
//     res.send("this path does not exist!");
// });

app.post("/",(req,res)=>{
    res.send("you send post req to the root path!");
});

// app.use((req,res)=>{
//     console.log("incomming request!");
//     res.send('this is basic res!');
// })
