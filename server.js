var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Hotel = require('./app/models/hotel');
var path = require('path');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public/admin')));


app.use(bodyParser.json());
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geotur');

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
    
    var hotel = new Hotel();

    hotel.name = req.body.name;

    console.log(req.body.json);

    // hotel.idhotel = "9ph";
    // hotel.categoria = "4 Estrellas ";
    // hotel.descripcion = "Es el hotel más emblemático de la ciudad; la decoración de sus diferentes ambientes es bastante tradicional y conserva un marcado estilo colonial.";
    // hotel.direccion = "Jr. 9 de Dicimbre 184 ";
    // hotel.telefono = "(066) 322202";
    // hotel.sitio_web = "http=//www.dmhoteles.pe/index.php ";
    // hotel.correo_elec = "reservas@dematourshoteles.com";
    // hotel.tipo_precio_hab = "Simple S/.180; doble S/. 216; Suite S/. 348";
    // hotel.formas_pago = "VISA y Mastercard";
    // hotel.geometry = {
    //   type: "Point",
    //   coordinates: [-74.22586, -13.15874],
    //   latitud: 0.0,
    //   longitud: 0.0,
    //   idproducto: "9p"
    // };
    // hotel.bServiciosAdicional = [{
    //   tipo: "Restaurant",
    //   idproducto: "9p"
    // }, {
    //   tipo: "Sauna",
    //   idproducto: "9p"
    // }];
    // hotel.imagenes = [{
    //   url: "AyacuchoPlazaHotel-plaza1131021232952.jpg",
    //   idproducto: "9p"
    // }, {
    //   url: "AyacuchoPlazaHotel-plaza2131021232952.jpg",
    //   idproducto: "9p"
    // }, {
    //   url: "AyacuchoPlazaHotel-plaza3131021232952.jpg",
    //   idproducto: "9p"
    // }];
    // hotel.idproducto = "9p";
    // hotel.nombre = "Ayacucho Plaza Hotel";
    // hotel.clase = "Hotel";
    // hotel.estado = true;

    hotel.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Hotel created!'
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