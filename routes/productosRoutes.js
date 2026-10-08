//localhost:3000/api/productos

const express = require('express');

//para poder usar los controladores
const router = express.Router();

//creamos el controlador
const ctrl = require('../Controllers/productosController');


console.log('Router de productos funcionando ✅');

router.get('/', ctrl.obtenerTodos);
// router.get('/ultimo', ctrl.obtenerUltimo);


module.exports = router;