
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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

module.exports = Product;
