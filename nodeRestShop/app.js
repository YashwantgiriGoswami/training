const express = require('express');

const app = express();

app.use((req,res,next)=>{
    res.send("yashwant is good.");
});

module.exports =app;