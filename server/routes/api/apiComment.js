/* eslint-disable max-len */
const express = require('express');
const { LikeModel, Comment, User } = require('../../db/models');

const route = express.Router();

route.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const newComment = await Comment.create({ model_id: id, user_id: req.session.userSession.id, text });
  const result = await Comment.findOne({ where: { id: newComment.id }, include: User });
  res.json(result);
});

route.get('/', async (req, res) => {
  const { modelId } = req.query;
  const result = await Comment.findAll({ where: { model_id: modelId }, include: { model: User } });
  res.json(result);
});

route.delete('/like/:id', async (req, res) => {
  const { id } = req.params;
  await LikeModel.destroy({ where: { model_id: id, user_id: req.session.userSession.id, text: obj } });
  res.sendStatus(200);
});

module.exports = route;
