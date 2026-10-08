// Los datos — hoy hardcodeados
// La próxima clase → consulta a Supabase
const productos = [
  { id: 1, nombre: 'Notebook', precio: 500000 },
  { id: 2, nombre: 'Mouse',    precio: 15000  },
  { id: 3, nombre: 'Teclado',  precio: 25000  },
];


console.log('Servicio de productos funcionando ✅');


const supabase = require('../config/supabase');


const obtenerTodos = async () =>  {

  const {data,error} = await supabase
  .from('producto')
  .select('*');

  if (error) throw error;

  return data;

}

module.exports = { obtenerTodos };
