const express = require('express');
const { Category, UserModel } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await Category.findAll({ include: UserModel });
  res.json(result);
});

router.get('/allModels', async (req, res) => {
  const result = await UserModel.findAll();
  res.json(result);
});

module.exports = router;
