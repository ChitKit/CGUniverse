const express = require('express');
const { UserModel } = require('../../db/models');

const route = express.Router();

route.get('/models/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const result = await UserModel.findOne({ where: { id: modelId } });
  res.json(result);
});

route.get('/models/farst/10', async (req, res) => {
  const result = await UserModel.findAll({ limit: 10 });
  res.json(result.pic);
});

route.get('/models/second/10', async (req, res) => {
  const data = [];
  const result = await UserModel.findAll({ limit: 20 });
  for (let i = 10; i < result.length; i += 1) {
    data.push(result[i]);
  }
  res.json(result.pic);
});

route.get('/models', async (req, res) => {
  const { userid } = req.query;
  const result = await UserModel.findAll({
    where: !+userid ? {} : { user_id: +userid }, limit: 100, attributes: ['id', 'name', 'path', 'pic', 'user_id', 'categ_id', 'price'],
  });
  res.json(result);
});

route.delete('/model/:id', async (req, res) => {
  const { id } = req.params;
  await UserModel.destroy({ where: { id } });
  res.sendStatus(200);
});

route.post('/model/upload', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
