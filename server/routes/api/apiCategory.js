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

router.get('/:categ', async (req, res) => {
  const { categ } = req.params;
  if (categ === 'allModels') {
    const result = await UserModel.findAll({ include: Category });
    return res.json(result);
  }
  const result = await Category.findOne({ include: UserModel, where: { name: categ } });
  return res.json(result);
});

router.get('/allModels', async (req, res) => {
  const result = await UserModel.findAll({ include: Category });
  res.json(result);
});

module.exports = router;
