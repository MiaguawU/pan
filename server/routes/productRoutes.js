const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const productos = await Product.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});
router.get('/', async (req, res) => {
    try {
      const temporadas = await Temp.findAll();
      res.json(temporadas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener temporada' });
    }
  });

router.post('/', async (req, res) => {
  try {
    const nuevoProducto = await Product.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto' });
  }
});

module.exports = router;
