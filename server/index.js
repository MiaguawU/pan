require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express(); 

app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(bodyParser.json()); 
app.use('/api/productos', productRoutes); 


sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.error('Error al conectar a la base de datos', error));


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
