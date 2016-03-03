var Hotel = require('./../models/mHotel');
module.exports = {
  save: function(req, res, upload, done) {
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      var hotel = new Hotel();

      hotel.nombre = data.nombre;
      hotel.categoria = data.categoria;
      hotel.descripcion = data.descripcion;
      hotel.direccion = data.direccion;
      hotel.telefono = data.telefono;
      hotel.sitio_web = data.sitio_web;
      hotel.correo_electronico = data.correo_electronico;
      hotel.precio_habitacion = data.precio_habitacion;
      hotel.formas_pago = data.formas_pago;
      hotel.latitud = parseFloat(data.latitud);
      hotel.longitud = parseFloat(data.longitud);
      //owner
      hotel.clase = 'hotel';
      hotel.estado = true;
      hotel.owner = req.user.local.email;
      hotel.imagenes = [];
      for (var i = 0; i < files.length; i++) {
        hotel.imagenes.push({
          url: files[i].filename
        });
      }
      hotel.save(function(err) {
        if (err) {
          res.send(err);
        }
        done(true);
      });
    });

  },
  findAll: function(req, res) {
    Hotel.find({
      owner: req.user.local.email
    }, function(err, hoteles) {
      if (err)
        res.send(err);
      res.json(hoteles);
    });
  },
  delete: function(req, res) {
    console.log(req.params.id);
    Hotel.remove({
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
    Hotel.find(function(err, hoteles) {
      if (err)
        res.send(err);
      res.json(hoteles);
    });
  },
  listOne: function(req, res) {
    Hotel.find({
      _id: req.params.id
    }, function(err, hoteles) {
      if (err)
        res.send(err);
      res.json(hoteles);
    });
  },
  list: function(done) {
    Hotel.find(function(err, hoteles) {
      done(err, hoteles);
    });
  }

};