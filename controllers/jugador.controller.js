const {response} = require('express');
const bcrypt = require('bcryptjs');
const Jugador = require("../models/jugador.model");
const Pais = require("../models/pais.model");


const getJugador = async (req, res)=>{
    const jugadores = await Jugador.find()
                                .populate('usuario' ,'nombre')
                                .populate('pais', 'nombre continente')


    res.json({
        ok:true,
        jugadores:jugadores
    });
}

const crearJugador=async(req,res=response)=>{
   // console.log(req.body);
   const {nombre, club,usuario,pais,posicion}=req.body;
   const uid = req.uid;
   const uid_p = req.uid;
   const uid_c = req.uid;
    const jugador = new Jugador({
        usuario: uid,
        pais: uid_p,
        club : uid_c,
        ...req.body
    }); 


   
    try {

        const jugadorDB = await jugador.save();

        
        res.json({  
            ok: true,
            jugador: jugadorDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se puede crear jugador, consulte con el administrador'
        })
    }


   
}



module.exports = {
    getJugador,
    crearJugador,
  //  actualizarEntrenador,
}