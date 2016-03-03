var Transporte = require('./../models/mTransporte');
module.exports = {
  save: function(req, res, upload, done) {
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      var transporte = new Transporte();
      transporte.nombre = data.nombre;
      transporte.descripcion = data.descripcion;
      transporte.tipo = data.tipo;
      transporte.direccion = data.direccion;
      transporte.telefono = data.telefono;
      transporte.sitio_web = data.sitio_web;
      transporte.horario_atencion = data.horario_de_atencion;
      transporte.horario_salida = data.horario_de_salida;
      transporte.destinos = data.destinos;
      transporte.latitud = parseFloat(data.latitud);
      transporte.longitud = parseFloat(data.longitud);
   //owner
   transporte.clase = 'hotel';
   transporte.estado = true;
   transporte.owner = req.user.local.email;
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
  Transporte.find({
    owner: req.user.local.email
  }, function(err, transportes) {
    if (err)
      res.send(err);
    res.json(transportes);
  });
},
findPublic: function(req, res) {
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
},

  //API
  listAll: function(req, res) {
    Transporte.find(function(err, transportes) {
      if (err)
        res.send(err);
      res.json(transportes);
    });
  },
  listOne: function(req, res) {
    Transporte.find({
      _id: req.params.id
    }, function(err, transportes) {
      if (err)
        res.send(err);
      res.json(transportes);
    });
  },
  list: function(done) {
    Transporte.find(function(err, transportes) {
      done(err, transportes);
    });
  }
};