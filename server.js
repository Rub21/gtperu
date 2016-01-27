var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var cors = require('cors');
var mongoose = require('mongoose');
var controllerHotel = require('./app/controllers/hotel');
var controllerRestaurant = require('./app/controllers/restaurant');
var controllerTransporte = require('./app/controllers/transporte');
var controllerRecurso = require('./app/controllers/recurso');


mongoose.connect('mongodb://localhost/geoturb');
app.use(cors());
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public/admin')));
app.use(bodyParser.json());

//MULTER
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/admin/imagenesDB');
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

//hotel
router.route('/hoteles')
  .post(function(req, res) {
    controllerHotel.save(req, res, upload);
  })
  .get(function(req, res) {
    controllerHotel.findAll(req, res);
  });
router.route('/hoteles/:id')
  .delete(function(req, res) {
    controllerHotel.delete(req, res);
  });
//restaurant
router.route('/restaurants')
  .post(function(req, res) {
    controllerRestaurant.save(req, res, upload);
  })
  .get(function(req, res) {
    controllerRestaurant.findAll(req, res);
  });
router.route('/restaurants/:id')
  .delete(function(req, res) {
    controllerRestaurant.delete(req, res);
  });
//transporte
router.route('/transportes')
  .post(function(req, res) {
    controllerTransporte.save(req, res, upload);
  })
  .get(function(req, res) {
    controllerTransporte.findAll(req, res);
  });
router.route('/transportes/:id')
  .delete(function(req, res) {
    controllerTransporte.delete(req, res);
  });

//Recurso
router.route('/recursos')
  .post(function(req, res) {
    controllerRecurso.save(req, res, upload);
  })
  .get(function(req, res) {
    controllerRecurso.findAll(req, res);
  });

router.route('/recursos/:id')
  .delete(function(req, res) {
    controllerRecurso.delete(req, res);
  });

app.use('/api', router);
app.listen(port);
console.log('Running on port ' + port);