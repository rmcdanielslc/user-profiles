var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var port = 3000;
var app = express();
app.listen(port)

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true }));
app.use(express.static(__dirname + '/public'));



var corsOptions = {
  origin: 'http://localhost:3000'
};

app.post('/api/login', userCtrl.login);

app.get('/example', cors(), function(req,res) {

});

app.get('/example-two', function (req, res){

})
