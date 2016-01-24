var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HotelSchema = new Schema({
  idrestaurant: String,
  categoria: String,
  tipo: String,
  descripcion: String,
  direccion: String,
  telefono: String,
  sitio_web: String,
  horario_atencion: String,
  especialidad: String,
  precio_promedio: String,
  formas_pago: String,
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
module.exports = mongoose.model('Restaurant', HotelSchema);