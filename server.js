var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Hotel = require('./app/models/hotel');
var path = require('path');
var multer = require('multer');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geotur2');

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
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      var hotel = new Hotel();
      hotel.idhotel = 'hhh';
      hotel.clase = "Hotel";
      hotel.estado = true;
      hotel.categoria = data.categoria;
      hotel.descripcion = data.nombre;
      hotel.direccion = data.direccion;
      hotel.telefono = data.telefono;
      hotel.sitio_web = data.sitio_web;
      hotel.correo_elec = data.correo_electronico;
      hotel.tipo_precio_hab = data.precio_de_habitacion;
      hotel.formas_pago = data.formas_de_pago;
      hotel.latitud = parseFloat(data.lat);
      hotel.longitud = parseFloat(data.lon);
      hotel.imagenes = [];
      for (var i = 0; i < files.length; i++) {
        hotel.imagenes.push({
          url: files[i].filename
        });
      }
      hotel.save(function(err) {
        if (err)
          res.send(err);
        res.json({
          message: 'Hotel created!'
        });
        //res.sendFile(path.join(__dirname, 'confirm.html'));
      });
    });
  })
  .get(function(req, res) {
    Hotel.find(function(err, hoteles) {
      if (err)
        res.send(err);

      res.json(hoteles);
    });
  });

app.use('/api', router);
app.listen(port);
console.log('Running on port ' + port);