var Transporte = require('./../models/transporte');
module.exports = {
  save: function(req, res, upload, done) {
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      var transporte = new Transporte();
      console.log(data);
      transporte.idtransporte = 'rr';
      transporte.descripcion = data.descripcion;
      transporte.tipo = data.tipo;
      transporte.direccion = data.direccion;
      transporte.telefono = data.telefono;
      transporte.sitio_web = data.sitio_web;
      transporte.horario_atencion = data.horario_de_atencion;
      transporte.horario_salida = data.horario_de_salida;
      transporte.destinos = data.destinos;
      transporte.latitud = parseFloat(data.lat);
      transporte.longitud = parseFloat(data.lon);
      transporte.idproducto = 'uuid';
      transporte.nombre = data.nombre;
      transporte.estado = true;
      transporte.imagenes = [];
      for (var i = 0; i < files.length; i++) {
        transporte.imagenes.push({
          url: files[i].filename
        });
      }
      transporte.save(function(err) {
        if (err)
          res.send(err);
        done(true);
      });
    });
  },
  findAll: function(req, res) {
    Transporte.find(function(err, transportes) {
      if (err)
        res.send(err);
      res.json(transportes);
    });
  },
  delete: function(req, res) {
    Transporte.remove({
      _id: req.params.id
    }, function(err, bear) {
      if (err)
        res.send(err);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }
};