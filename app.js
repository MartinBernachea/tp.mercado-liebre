const express = require('express');
const path = require('path');

var app = express();

var publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath));

app.get('/css', function (req, res) {
    res.sendFile(__dirname + '/public/assets/css/stylesheet.css');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/views/pages/form-login.html');
});

app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/views/pages/form-register.html');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
});