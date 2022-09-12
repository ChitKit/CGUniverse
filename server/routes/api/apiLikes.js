const express = require('express');
const { LikeModel, UserModel, User } = require('../../db/models');

const route = express.Router();

route.post('/like/:id', async (req, res) => {
  const { id } = req.params.id;
  console.log(req.session);
  await LikeModel.create({ where: { model_id: id, user_id: req.session } });
  res.sendStatus(200);
});

route.get('/like/:id', async (req, res) => {
  const { id } = req.params;
  console.log('===========================', id);
  const result = await LikeModel.findAll({ where: { model_id: id } });
  res.json(result);
});

route.delete('/like/:id', async (req, res) => {
  const { id } = req.params;
  await LikeModel.destroy({ where: { id } });
  res.sendStatus(200);
});

route.get('/like', async (req, res) => {
  const { id } = req.query;
  const result = await LikeModel.findAll({ where: { user_id: id }, include: 'UserModel' });
  res.json(result);
});

module.exports = route;
