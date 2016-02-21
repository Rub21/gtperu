var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecursoShema = new Schema({
  idproducto: String,
  idrecurso: String,
  nombre: String,
  categoria: String,
  tipo: String,
  descripcion: String,
  costo_ingreso: String,
  horario_atencion: String,
  temperatura: String,
  altitud: String,
  video: String,
  como_llegar: String,
  latitud: Number,
  longitud: Number,
  imagenes: [{
    url: String
  }],
  //llenar en el momento de registar
  estado: Boolean,
  owner: String
});
module.exports = mongoose.model('Recurso', RecursoShema);