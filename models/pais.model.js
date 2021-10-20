const {Schema, model,SchemaTypes} = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const PaisSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

  
    continente: {
        type: String,
    },



},{collection: 'Paises'});



module.exports = model ('Pais', PaisSchema);