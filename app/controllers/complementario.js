var Complementario = require('./../models/complementario');
module.exports = {
  save: function(req, res, upload) {
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      console.log(data);
      var complementario = new Complementario();
      complementario.idcomplementario = 'hhh';
      complementario.clase = "Complementario";
      complementario.estado = true;
      complementario.tipo = data.tipo;
      complementario.nombre = data.nombre;
      complementario.descripcion = data.descripcion;
      complementario.direccion = data.direccion;
      complementario.telefono = data.telefono;
      complementario.sitio_web = data.sitio_web;
      complementario.latitud = parseFloat(data.lat);
      complementario.longitud = parseFloat(data.lon);
      complementario.imagenes = [];
      for (var i = 0; i < files.length; i++) {
        complementario.imagenes.push({
          url: files[i].filename
        });
      }
      complementario.save(function(err) {
        if (err)
          res.send(err);
        res.redirect('/confirm.html');
      });
    });
  },
  findAll: function(req, res) {
    Complementario.find(function(err, complementarios) {
      if (err)
        res.send(err);
      res.json(complementarios);
    });
  },
  delete: function(req, res) {
    console.log(req.params.id);
    Complementario.remove({
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