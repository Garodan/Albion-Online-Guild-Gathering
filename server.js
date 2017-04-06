var express = require('express');
var app = express();
var __dirname = "C:\\\\xampp\\htdocs\\Albion-Online-Guild-Gathering\\";

app.use("/", express.static(__dirname));

app.get('*', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});
app.post('*', function(req, res) {
    writeFile(__dirname + 'gathering.json', req,function (err){res.send(err)})
});
app.listen(8080);
