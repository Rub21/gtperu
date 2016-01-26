var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecursoShema = new Schema({
  idrecurso: String,
  categoria: String,
  tipo: String,
  descripcion: String,
  historia: String,
  corredor: String,
  distancia: String,
  tipo_precio_ing: String,
  horario_atencion: String,
  temperatura: String,
  altitud: String,
  video: String,
  como_llegar: String,
  transporte: [{
    idtransporte: String
  }],
  latitud: Number,
  longitud: Number,
  imagenes:[{
    url: String
  }],
  idproducto: String,
  nombre: String,
  clase: String,
  estado: Boolean
});
module.exports = mongoose.model('Recurso', RecursoShema);