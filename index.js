// Primera línea del archivo, antes de todo
require('dotenv').config({ path: require('path').join(__dirname, 'services', '.env') });
const express = require('express');



const app = express();


app.use(express.json());

// Ruta de prueba
app.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando ✅' });
});

app.use(
  '/api/productos',
  require('./routes/productosRoutes')
);


//app.use('api/categoria',require('./routes/categoriasRoutes'))


app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});