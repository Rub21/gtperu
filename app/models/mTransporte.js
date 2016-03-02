var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TransporteSchema = new Schema({
  nombre: String,
  descripcion: String,
  tipo: String,
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
  clase: String,
  estado: Boolean,
  owner: String
});
module.exports = mongoose.model('Transporte', TransporteSchema);