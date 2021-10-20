const {Schema, model,SchemaTypes} = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const EstadioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

    img: {
        type: String,
    },
    capacidad: {
        type: String,
    },
    
    club: {
        type: String,
        ref: 'Club',
       
    },

},{collection: 'Estadios'});



module.exports = model ('Estadio', EstadioSchema);