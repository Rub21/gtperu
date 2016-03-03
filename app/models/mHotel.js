var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HotelSchema = new Schema({
  nombre: String,
  categoria: String,
  descripcion: String,
  direccion: String,
  telefono: String,
  sitio_web: String,
  correo_electronico: String,
  tipo_precio_hab: String,
  formas_pago: String,
  latitud: Number,
  longitud: Number,
  imagenes: [{
    url: String
  }],
  clase: String,
  estado: Boolean,
  owner: String
});
module.exports = mongoose.model('Hotel', HotelSchema);