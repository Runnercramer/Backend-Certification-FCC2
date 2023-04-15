let express = require('express');
let app = express();

console.log("Hello World");

let filePath = __dirname + '/views/index.html';

app.get("/", function(req, res){
    res.sendFile(filePath);
})

let assetsPath = __dirname + '/public';

app.use("/public", express.static(assetsPath));



































 module.exports = app;
