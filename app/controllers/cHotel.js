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
      hotel.idhotel = 'hhh';
      hotel.clase = "Hotel";
      hotel.estado = true;
      hotel.categoria = data.categoria;
      hotel.nombre = data.nombre;
      hotel.descripcion = data.descripcion;
      hotel.direccion = data.direccion;
      hotel.telefono = data.telefono;
      hotel.sitio_web = data.sitio_web;
      hotel.correo_elec = data.correo_electronico;
      hotel.tipo_precio_hab = data.precio_de_habitacion;
      hotel.formas_pago = data.formas_de_pago;
      hotel.latitud = parseFloat(data.lat);
      hotel.longitud = parseFloat(data.lon);
      //owner
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