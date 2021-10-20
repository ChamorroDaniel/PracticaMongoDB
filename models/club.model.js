const {Schema, model,SchemaTypes} = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const ClubSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

    img: {
        type: String,
    },
   
    entrenador: {
        type: Schema.Types.ObjectId,
        ref: 'Entrenador',
        
    },

    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais',
        
    },
    estadio: {
        type: Schema.Types.ObjectId,
        ref: 'Estadio',
        
    },
    

},{collection: 'Clubes'});



module.exports = model ('Club', ClubSchema);