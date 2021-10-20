const {response} = require('express');
const bcrypt = require('bcryptjs');
const Pais = require("../models/pais.model");


const getPaises = async (req, res)=>{
    const paises = await Pais.find({},'nombre continente');
    res.json({
        ok:true,
        paises
    });
}

const crearPais=async(req,res)=>{
   // console.log(req.body);
   const {nombre, continente}=req.body;


   
try {
    
    const existeNombre = await Pais.findOne({nombre});

    if(existeNombre){
        return res.status(400).json({
            ok: false,
            msg: 'El pais ya ha sido registrado'
        })
    }

    //Creamos un objeto de la clase model usuario
    const pais = new Pais(req.body);


    //indicamos a mongose que registre el usuario en la base de datos
   await pais.save();


   res.json({
       ok: true,
       pais
   });

} catch (error) {
    console.log(error);
    res.status(500).json({
        ok:false,
        msg: 'Error servidor, revisar logs'
    })
}


   
}
module.exports = {
    getPaises,
    crearPais,

}