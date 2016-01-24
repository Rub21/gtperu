var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HotelSchema = new Schema({
  idhotel: String,
  categoria: String,
  descripcion: String,
  direccion: String,
  telefono: String,
  sitio_web: String,
  correo_elec: String,
  tipo_precio_hab: String,
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
module.exports = mongoose.model('Hotel', HotelSchema);