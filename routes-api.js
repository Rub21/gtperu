var controllerHotel = require('./app/controllers/cHotel');
var controllerRestaurant = require('./app/controllers/cRestaurant');
var controllerTransporte = require('./app/controllers/cTransporte');
var controllerRecurso = require('./app/controllers/cRecurso');
var controllerComplementario = require('./app/controllers/cComplementario');

module.exports = function(app) {

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

  //RECURSO
  app.get('/api/recursos', function(req, res) {
    controllerRecurso.listAll(req, res);
  });
  app.get('/api/recursos/:id', function(req, res) {
    controllerRecurso.listOne(req, res);
  });

  //SERVICIO
  app.get('/api/servicios', function(req, res) {
    var arr = [];
    controllerHotel.list(function(err, arr1) {
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