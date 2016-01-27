var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ComplementarioSchema = new Schema({
  idcomplementario: String,
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
  idproducto: String,
  nombre: String,
  clase: String,
  estado: Boolean
});
module.exports = mongoose.model('Complementario', ComplementarioSchema);