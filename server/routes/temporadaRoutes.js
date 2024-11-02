const express = require('express');
const { Temporada } = require('../models/Product');

const router = express.Router();

// Obtener todas las temporadas
router.get('/', async (req, res) => {
  try {
    const temporadas = await Temporada.findAll();
    res.json(temporadas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener temporadas' });
  }
});

module.exports = router;
