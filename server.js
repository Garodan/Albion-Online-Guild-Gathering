var express = require('express');
var app = express();
var __dirname = "C:\\\\xampp\\htdocs\\Albion-Online-Guild-Gathering\\";

app.use("/", express.static(__dirname));

app.get('*', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});
app.listen(8080);
