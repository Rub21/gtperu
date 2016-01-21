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
  geometry: {
    type: String,
    coordinates: [Number],
    latitud: Number,
    longitud: Number,
    idproducto: String
  },
  bServiciosAdicional: [{
    tipo: String,
    idproducto: String
  }],
  imagenes: [{
    url: String,
    idproducto: String
  }],
  idproducto: String,
  nombre: String,
  clase: String,
  estado: Boolean
});
module.exports = mongoose.model('Hotel', HotelSchema);