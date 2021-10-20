/*
    Ruta: /api/clubes
*/
const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { getClub, crearClub } = require('../controllers/club.controller');

const router = Router();

router.get('/',getClub);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('estadio','El estadio es obligatorio').not().isEmpty(),
    check('pais','El pais es obligatorio').not().isEmpty(),
    check('entrenador','El entrenador es obligatorio').not().isEmpty(),
    
    validarCampos
],

crearClub);

router.put('/id',
[
    check('nombre','El nombre debe ser obligatorio').not().isEmpty(),
    check('estadio','El estadio es obligatorio').not().isEmpty(),
    check('pais','El pais es obligatorio').not().isEmpty(),
    check('entrenador','El entrenador es obligatorio').not().isEmpty(),
    validarCampos

],
)
module.exports = router;
