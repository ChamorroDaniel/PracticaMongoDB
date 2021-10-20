const {Schema, model,SchemaTypes} = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const EntrenadorSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    
    img: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        
    },

    club: {
        type: String,
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais',}

},{collection: 'Entrenadores'});



module.exports = model ('Entrenador', EntrenadorSchema);