require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

let filePath = __dirname + '/views/index.html';

app.get("/", function(req, res){
    res.sendFile(filePath);
})

let assetsPath = __dirname + '/public';

app.use("/public", express.static(assetsPath));

app.get("/json", function(req, res){
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message":"HELLO JSON"});
    }else{
        res.json({"message":"Hello json"});
    }
    
    
})

































 module.exports = app;
