var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RestaurantSchema = new Schema({
  nombre: String,
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
  estado: Boolean,
  owner: String,
  clase: String
});
module.exports = mongoose.model('Restaurant', RestaurantSchema);