/*
    path: api/todo/busqueda
*/


const { Router } = require('express');
const { busquedaTotal, busquedaColeccion } = require('../controllers/busquedas.controller');



const router = Router();

router.get( '/:busqueda',busquedaTotal );
router.get( '/coleccion/:micoleccion/:busqueda',busquedaColeccion );


module.exports = router;