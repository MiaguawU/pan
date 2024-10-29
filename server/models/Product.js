const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },  
      
      nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  piezas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_temporada: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
const Temp = sequelize.define('Temp', {
  
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },  
      temporada: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  fechai: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  fechat: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});


