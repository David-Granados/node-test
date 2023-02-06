const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetoSchema = new Schema({
    nombre: String,
    descripcion: String
})

//Creamos el modelo
const Objeto = mongoose.model('objeto', objetoSchema, "objeto");

module.exports = Objeto;
