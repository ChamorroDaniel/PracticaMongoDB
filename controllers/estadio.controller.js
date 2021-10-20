const {response} = require('express');
const bcrypt = require('bcryptjs');
const Estadio = require("../models/estadio.model");


const getEstadio = async (req, res)=>{
    const estadios = await Estadio.find({},'nombre capacidad club');
    res.json({
        ok:true,
        estadios
    });
}

const crearEstadio=async(req,res=response)=>{
   // console.log(req.body);
   const {nombre, capacidad,club}=req.body;
   
   
    try {
        const estadio = new Estadio(req.body);

        const estadioDB = await estadio.save();

        
        res.json({  
            ok: true,
            estadio: estadioDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se puede crear estadio, consulte con el administrador'
        })
    }


   
}



module.exports = {
    getEstadio,
    crearEstadio,
  //  actualizarEntrenador,
}