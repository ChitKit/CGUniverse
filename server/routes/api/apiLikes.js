const express = require('express');
const { LikeModel, UserModel, User } = require('../../db/models');

const route = express.Router();

route.post('/like/:id', async (req, res) => {
  const { id } = req.params;
  await LikeModel.create({ model_id: id, user_id: req.session.userSession.id });
  const created = await LikeModel.findOne({ where: { model_id: id, user_id: req.session.userSession.id } });
  console.log(created, 'CREATED');
  res.json(created);
});

route.get('/like/:id', async (req, res) => {
  const { id } = req.params;
  const result = await LikeModel.findAll({ where: { model_id: id } });
  res.json(result);
});

route.delete('/like/:id', async (req, res) => {
  const { id } = req.params;
  await LikeModel.destroy({ where: { model_id: id, user_id: req.session.userSession.id } });
  res.sendStatus(200);
});

route.get('/like', async (req, res) => {
  const { userId } = req.query;
  const result = await LikeModel.findAll({ where: { user_id: req.session.userSession.id }, include: { model: UserModel, include: LikeModel } });
  res.json(result);
});

module.exports = route;
