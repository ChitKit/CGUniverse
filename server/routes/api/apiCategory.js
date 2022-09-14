const express = require('express');
const { Category, UserModel } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await Category.findAll({ include: UserModel });
  res.json(result);
});

router.get('/allCategory', async (req, res) => {
  const result = await Category.findAll();
  res.json(result);
});

module.exports = router;
