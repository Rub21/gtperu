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
var routes = require('./routes.js');

mongoose.connect(configDB.url);
configPassport(passport);

var port = process.env.PORT || 3000;
var TOKEN_SECRET = process.env.TOKEN_SECRET || "tokenultrasecreto";

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


// var router = express.Router();
// router.use(function(req, res, next) {
//   console.log('logging');
//   next();
// });

// app.get('/hotel', function(req, res) {
//   res.render('pages/hotel');
// });

// app.post('api/hoteles', function(req, res) {
//   console.log('api/hoteles');
//   controllerHotel.save(req, res, upload);
// });



//hotel
// router.route('/hoteles')
//   .post(function(req, res) {
//     controllerHotel.save(req, res, upload);
//   })
//   .get(function(req, res) {
//     controllerHotel.findAll(req, res);
//     res.render('pages/hotel');
//   });



// router.route('/hoteles/:id')
//   .delete(function(req, res) {
//     controllerHotel.delete(req, res);
//   });
// //restaurant
// router.route('/restaurants')
//   .post(function(req, res) {
//     controllerRestaurant.save(req, res, upload);
//   })
//   .get(function(req, res) {
//     controllerRestaurant.findAll(req, res);
//   });
// router.route('/restaurants/:id')
//   .delete(function(req, res) {
//     controllerRestaurant.delete(req, res);
//   });
// //transporte
// router.route('/transportes')
//   .post(function(req, res) {
//     controllerTransporte.save(req, res, upload);
//   })
//   .get(function(req, res) {
//     controllerTransporte.findAll(req, res);
//   });
// router.route('/transportes/:id')
//   .delete(function(req, res) {
//     controllerTransporte.delete(req, res);
//   });

// //Complementario
// router.route('/complementarios')
//   .post(function(req, res) {
//     controllerComplementario.save(req, res, upload);
//   })
//   .get(function(req, res) {
//     controllerComplementario.findAll(req, res);
//   });

// router.route('/complementarios/:id')
//   .delete(function(req, res) {
//     controllerComplementario.delete(req, res);
//   });

// //Recurso
// router.route('/recursos')
//   .post(function(req, res) {
//     controllerRecurso.save(req, res, upload);
//   })
//   .get(function(req, res) {
//     controllerRecurso.findAll(req, res);
//   });

// router.route('/recursos/:id')
//   .delete(function(req, res) {
//     controllerRecurso.delete(req, res);
//   });

// app.use('/api', router);
app.listen(port);
console.log('Running on port ' + port);