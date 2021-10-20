const {response} = require('express');
const bcrypt = require('bcryptjs');
const Entrenador = require("../models/entrenador.model");


const getEntrenador = async (req, res)=>{
    const entrenadores = await Entrenador.find({},'nombre club');
    res.json({
        ok:true,
        entrenadores
    });
}

const crearEntrenador=async(req,res=response)=>{
   // console.log(req.body);
   const {nombre, club,usuario,pais}=req.body;
   const uid = req.uid;
   const uid_p = req.uid;
    const entrenador = new Entrenador({
        usuario: uid,
        pais: uid_p,
        ...req.body
    }); 


   
    try {

        const entrenadorDB = await entrenador.save();

        
        res.json({  
            ok: true,
            entrenador: entrenadorDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se puede crear investigador, consulte con el administrador'
        })
    }


   
}



module.exports = {
    getEntrenador,
    crearEntrenador,
  //  actualizarEntrenador,
}