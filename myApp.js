let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

let filePath = __dirname + '/views/index.html';

app.get("/", function(req, res){
    res.sendFile(filePath);
})

let assetsPath = __dirname + '/public';

app.use("/public", express.static(assetsPath));

app.use("/json", function(req, res){

    let style = process.env.MESSAGE_STYLE;

    if(style === "uppercase"){

        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
}) 

































 module.exports = app;
