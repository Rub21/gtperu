var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ComplementarioSchema = new Schema({
  nombre: String,
  tipo: String,
  descripcion: String,
  direccion: String,
  telefono: String,
  sitio_web: String,
  horario_atencion: String,
  latitud: Number,
  longitud: Number,
  imagenes: [{
    url: String
  }],
   
  clase: String,
  estado: Boolean,
  owner: String
});
module.exports = mongoose.model('Complementario', ComplementarioSchema);