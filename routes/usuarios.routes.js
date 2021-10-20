/*
    Path: /api/usuarios
*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getUsuarios,crearusuario,actualizarUsuario,eliminarUsuario} = require('../controllers/usuario.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', getUsuarios);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El passwors es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    validarCampos
],

crearusuario);

router.put('/:id',
[
    check('nombre','El nombre debe ser obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    validarCampos

],
actualizarUsuario)

router.delete('/:id', eliminarUsuario);
module.exports = router;