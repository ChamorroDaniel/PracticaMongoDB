/*
    Ruta: /api/jugadores
*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getJugador, crearJugador } = require('../controllers/jugador.controller');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',getJugador);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),

    check('posicion','La posicion es obligatorio').not().isEmpty(),
    
    
    validarCampos
],

crearJugador);


module.exports = router;
