var Recurso = require('./../models/recurso');
module.exports = {
  save: function(req, res, upload) {
    upload(req, res, function(err) {
      if (err) {
        return res.end("Error uploading file.");
      }
      var data = req.body;
      var files = req.files;
      var recurso = new Recurso();
      console.log(data);
      recurso.idrecurso = 'uuid';
      recurso.categoria = data.categoria;
      recurso.tipo = data.tipo;
      recurso.descripcion = data.descripcion;
      recurso.historia = data.historia;
      recurso.corredor = data.corredor;
      recurso.distancia = data.distancia;
      recurso.tipo_precio_ing = data.costo_de_ingreso;
      recurso.horario_atencion = data.horario_de_atencion;
      recurso.temperatura = data.temperatura;
      recurso.altitud = data.altitud;
      recurso.video = data.video;
      recurso.como_llegar = data.como_llegar;
      recurso.transporte = [{
        idtransporte: 'String'
      }];
      recurso.latitud = parseFloat(data.lat);
      recurso.longitud = parseFloat(data.lon);

      recurso.idproducto = 'uuid';
      recurso.nombre = data.nombre;
      recurso.clase = 'Clase';
      recurso.estado = true;
      recurso.imagenes = [];
      for (var i = 0; i < files.length; i++) {
        recurso.imagenes.push({
          url: files[i].filename
        });
      }
      recurso.save(function(err) {
        if (err)
          res.send(err);
        // res.json({
        //   message: 'Recurso created!'
        // });
        res.redirect('/confirm.html');
      });
    });
  },
  findAll: function(req, res) {
    Recurso.find(function(err, recursoes) {
      if (err)
        res.send(err);
      //console.log(recursoes);
      res.json(recursoes);
    });
  },
  
  delete: function(req, res) {
    console.log( req.params.id);
    Recurso.remove({
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