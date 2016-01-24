var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controllerHotel = require('./app/controllers/hotel');
var path = require('path');
var multer = require('multer');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geotura');

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public/admin')));
app.use(bodyParser.json());

//MULTER
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage
}).any();


var router = express.Router();
router.use(function(req, res, next) {
  console.log('logging');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'geotur api!'
  });
});

router.route('/hoteles')
  .post(function(req, res) {
    controllerHotel.save(req, res, upload);
  })
  .get(function(req, res) {
    controllerHotel.findAll(req, res);
  });

app.use('/api', router);
app.listen(port);
console.log('Running on port ' + port);