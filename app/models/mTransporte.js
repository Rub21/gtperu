var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TransporteSchema = new Schema({
  idtransporte: String,
  descripcion: String,
  tipo: String,
  clase: String,
  direccion: String,
  telefono: String,
  sitio_web: String,
  horario_atencion: String,
  horario_salida: String,
  destinos: String,
  latitud: Number,
  longitud: Number,
  imagenes: [{
    url: String
  }],
  idproducto: String,
  nombre: String,
  estado: Boolean,
  owner: String
});
module.exports = mongoose.model('Transporte', TransporteSchema);