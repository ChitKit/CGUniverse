const express = require('express');
const { Category, UserModel, LikeModel } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await Category.findAll({ include: UserModel });
  res.json(result);
});

router.get('/:categ', async (req, res) => {
  const { categ } = req.params;
  if (categ === 'allModels') {
    const result = await UserModel.findAll({ include: [Category, LikeModel] });
    console.log(result);
    return res.json(result);
  }
  const result = await Category.findOne({ include: { model: UserModel, include: LikeModel }, where: { name: categ } });
  return res.json(result);
});

router.get('/allModels', async (req, res) => {
  const result = await UserModel.findAll({ include: [Category, LikeModel] });
  console.log(result);
  res.json(result);
});

module.exports = router;
