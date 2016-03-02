var Restaurant = require('./../models/mRestaurant');
module.exports = {
  save: function(req, res, upload, done) {
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      var restaurant = new Restaurant();
      restaurant.nombre = data.nombre;
      restaurant.categoria = data.categoria;
      restaurant.tipo = data.tipo;
      restaurant.descripcion = data.descripcion;
      restaurant.direccion = data.direccion;
      restaurant.telefono = data.telefono;
      restaurant.sitio_web = data.sitio_web;
      restaurant.horario_atencion = data.horario_atencion;
      restaurant.especialidad = data.especialidad;
      restaurant.precio_promedio = data.precio_promedio;
      restaurant.formas_pago = data.formas_pago;
      restaurant.latitud = parseFloat(data.latitud);
      restaurant.longitud = parseFloat(data.longitud);
      restaurant.clase = 'restaurant';
      restaurant.estado = true;
      //owner
      restaurant.owner = req.user.local.email;
      restaurant.imagenes = [];
      for (var i = 0; i < files.length; i++) {
        restaurant.imagenes.push({
          url: files[i].filename
        });
      }
      restaurant.save(function(err) {
        if (err)
          res.send(err);
        done(true);
      });
    });
  },
  findAll: function(req, res) {
    Restaurant.find({
      owner: req.user.local.email
    }, function(err, restaurantes) {
      if (err)
        res.send(err);
      res.json(restaurantes);
    });
  },
  delete: function(req, res) {
    console.log(req.params.id);
    Restaurant.remove({
      _id: req.params.id
    }, function(err, bear) {
      if (err)
        res.send(err);
      res.json({
        message: 'Successfully deleted'
      });
    });
  },
  //API
  listAll: function(req, res) {
    Restaurant.find(function(err, restaurantes) {
      if (err)
        res.send(err);
      res.json(restaurantes);
    });
  },
  listOne: function(req, res) {
    Restaurant.find({
      _id: req.params.id
    }, function(err, restaurantes) {
      if (err)
        res.send(err);
      res.json(restaurantes);
    });
  },
  list: function(done) {
    Restaurant.find(function(err, restaurantes) {
      done(err, restaurantes);
    });
  }
};