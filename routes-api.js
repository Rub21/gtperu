var controllerHotel = require('./app/controllers/hotel');
var controllerRestaurant = require('./app/controllers/restaurant');
var controllerTransporte = require('./app/controllers/transporte');
var controllerRecurso = require('./app/controllers/recurso');
var controllerComplementario = require('./app/controllers/complementario');

module.exports = function(app, passport, upload) {
  //Main
  app.get('/', function(req, res) {
    res.render('pages/index.ejs');
  });
  app.get('/api/hoteles', function(req, res) {
    controllerHotel.findPublic(req, res);
  });
  app.get('/api/restaurants', function(req, res) {
    controllerRestaurant.findPublic(req, res);
  });
  app.get('/api/transportes', function(req, res) {
    controllerTransporte.findPublic(req, res);
  });
  app.get('/api/complementarios', function(req, res) {
    controllerComplementario.findPublic(req, res);
  });
  app.get('/api/recursos', function(req, res) {
    controllerRecurso.findPublic(req, res);
  });
  //SERVICIO
  app.get('/api/servicios', function(req, res) {
    var arr = [];
    controllerHotel.list(function(err, arr1) {
      console.log(arr1);
      arr = arr.concat(arr1);
      controllerRestaurant.list(function(err, arr2) {
        arr = arr.concat(arr2);
        controllerTransporte.list(function(err, arr3) {
          arr = arr.concat(arr3);
          controllerComplementario.list(function(err, arr4) {
            arr = arr.concat(arr4);
            res.json(arr);
          });
        });
      });
    });
  });
};