var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var cors = require('cors');
var passport = require('passport');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var configDB = require('./config/database.js');
var configPassport = require('./config/passport');
var routes = require('./routes-admin.js');

mongoose.connect(configDB.url);
configPassport(passport);

var port = process.env.PORT || 3000;
var TOKEN_SECRET = process.env.TOKEN_SECRET || "mytocket";

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: TOKEN_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs');

//MULTER
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/imagenesDB');
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage
}).any();

routes(app, passport, upload);
app.listen(port);
console.log('Running on port ' + port);