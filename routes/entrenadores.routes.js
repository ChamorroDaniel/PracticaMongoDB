/*
    path: /api/entrenadores
*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getEntrenador,crearEntrenador} = require('../controllers/entrenador.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',getEntrenador);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('club','El club es obligatorio').not().isEmpty(),
    check('pais','El pais es obligatorio').not().isEmpty(),
    check('usuario','El usuario es obligatorio').not().isEmpty(),
    
   
    validarCampos
],

crearEntrenador);


module.exports = router;