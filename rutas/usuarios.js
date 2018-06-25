const express = require('express');
const router = express.Router();

const usuariosModel = require('../modelos/usuarios');

router.get('/',usuariosModel.find);
router.get('/:id',usuariosModel.findOne);
router.post('/',usuariosModel.create);
router.put('/:id',usuariosModel.update);
router.delete('/:id',usuariosModel.delete);

module.exports = router;
