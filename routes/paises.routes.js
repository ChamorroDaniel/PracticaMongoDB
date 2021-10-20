/*
    Path: /api/paises
*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getPaises,crearPais} = require('../controllers/pais.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',getPaises);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('continente','El continente es obligatorio').not().isEmpty(),
    
    validarCampos
],

crearPais);


module.exports = router;