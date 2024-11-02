require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express(); // Declarar app primero

app.use(cors({ origin: 'http://localhost:3000' })); // Permitir solicitudes desde el frontend
app.use(bodyParser.json()); // Para analizar JSON en el cuerpo de las solicitudes
app.use('/api/productos', productRoutes); // Ruta de productos

// Sincronizar la base de datos
sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.error('Error al conectar a la base de datos', error));

// Configuración del puerto
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
