const express = require('express');
const path = require('path');

var app = express();

var publicPath = path.join(__dirname, '/public');

app.get('/', function (req, res) {
    res.sendFile(__dirname, '/views/index.html')
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})