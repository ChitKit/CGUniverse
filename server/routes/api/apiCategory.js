const express = require('express');
const { Category } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await Category.findAll();
  res.json(result);
});

module.exports = router;
