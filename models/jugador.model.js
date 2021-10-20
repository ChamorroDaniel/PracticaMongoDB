const {Schema, model,SchemaTypes} = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const JugadorSchema = Schema({

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
    posicion: {
        type: String,
        required: true
    },

    club: {
        type: Schema.Types.ObjectId,
        ref: 'Club',
        
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais',
        
    },

},{collection: 'Jugadores'});



module.exports = model ('Jugador', JugadorSchema);