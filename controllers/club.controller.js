
const {response} = require('express');
const bcrypt = require('bcryptjs');
const Club = require("../models/club.model");


const getClub = async (req, res)=>{
    const clubes = await Club.find({},'nombre estadio pais entrenador');
    res.json({
        ok:true,
        clubes
    });
}

const crearClub=async(req,res)=>{
   // console.log(req.body);
   const {nombre, estadio,entrenador,pais}=req.body;
   const uid_c = req.uid;
   const uid_p = req.uid;
   const uid_e = req.uid;
    const clubes = new Club({
        entrenador: uid_e,
        estadio: uid_c,
        pais: uid_p,
        ...req.body
    }); 

    try {

        const clubDB = await clubes.save();

        
        res.json({  
            ok: true,
            club: clubDB
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
    getClub,
    crearClub,
  
}