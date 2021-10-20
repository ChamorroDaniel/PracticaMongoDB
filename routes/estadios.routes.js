/*
    Ruta: /api/estadios
*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getEstadio,crearEstadio} = require('../controllers/estadio.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',getEstadio);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('club','El club es obligatorio').not().isEmpty(),
    check('capacidad','La capacidad es obligatorio').not().isEmpty(),
    validarCampos
],

crearEstadio);


module.exports = router;