

const service = require('../services/productosService');

console.log('Controlador de productos funcionando ✅');

const obtenerTodos = async (req,res) => {
    //validar los datos correspondinetes
    
    // const productos = service.obtenerTodos();
    // res.json(productos);


    try { 
        const data = await service.obtenerTodos();
        res.json(data);


    } catch (e) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
}

// const obtenerUltimo = (req, res) => {
//     const producto = service.obtenerUltimo();
//     res.json(producto);
// }

// Exportar todas las funciones
module.exports = { obtenerTodos };