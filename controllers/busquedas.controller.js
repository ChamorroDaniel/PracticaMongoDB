//busquedaTotal

const { response } = require("express")

const Usuario = require('../models/usuario.model');
const Club = require('../models/club.model');
const Pais = require('../models/pais.model');
const Entrenador = require('../models/entrenador.model');
const Estadio = require('../models/estadio.model');
const Jugador = require('../models/jugador.model');



const busquedaTotal = async (req, res=response)=>{

    const busqueda = req.params.busqueda; 
    const miRegExp = new RegExp(busqueda,'i'); //i  insensible

    const [usuarios, clubes, paises,entrenadores,estadios,jugadores] = await Promise.all ([
        Usuario.find({nombre:miRegExp}), // la busqueda es por nombre
        Club.find({nombre:miRegExp}),
       Pais.find({nombre:miRegExp}),
        Entrenador.find({nombre:miRegExp}),
        Estadio.find({nombre:miRegExp}),
        Jugador.find({nombre:miRegExp})
    ]);

    res.json({
        ok: true,
        msg: 'busqueda total',
        usuarios, 
        clubes, 
        paises,
        entrenadores,
        estadios,
        jugadores
    });


}

//estructura de la peticion /coleccion/micoleccion/criteriosdebusqueda
const busquedaColeccion = async (req, res=response)=>{

    const miColeccion = req.params.micoleccion;
    const busqueda = req.params.busqueda; 
    const miRegExp = new RegExp(busqueda,'i'); //i  insensible

    let data = [];

    switch (miColeccion) {
        case 'usuarios':
            data = await Usuario.find({nombre:miRegExp})
                            
            break;
        case 'proyectos':
            data = await Club.find({nombre:miRegExp})
                    .populate('entrenador','nombre '); 
                    populate('pais','nombre '); 
                    populate('estadio','nombre '); 
            break;    
        case 'investigadores':
            data = await Entrenador.find({nombre:miRegExp})
                    .populate('usuario','nombre ')
                    .populate('pais','nombre ');
            break;
            case 'investigadores':
            data = await Pais.find({nombre:miRegExp})
                    
            break;
            case 'investigadores':
            data = await Estadio.find({nombre:miRegExp})
                    .populate('usuario','nombre img')
                    .populate('proyecto','nombre img');
            break;
            case 'investigadores':
            data = await Jugador.find({nombre:miRegExp})
                    .populate('usuario','nombre ')
                    .populate('pais','nombre ')
                    .populate('club','nombre ');
            break;
        default:
            return res.status(400).json({
                ok: false,
                msg: "La coleccion esta mal planteada"
            });
    }
    res.json({
        ok: true,
        resultados: data
    });
    
}

module.exports ={
    busquedaTotal,
    busquedaColeccion
}