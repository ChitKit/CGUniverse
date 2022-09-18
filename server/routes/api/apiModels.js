const express = require('express');
const { UserModel, LikeModel, Finder } = require('../../db/models');

const route = express.Router();

route.get('/models/:modelId', async (req, res) => {
  console.log('req');
  const { modelId } = req.params;
  const result = await UserModel.findOne({ where: { id: modelId } });
  res.json(result);
});

route.get('/models/farst/10', async (req, res) => {
  const result = await UserModel.findAll({ limit: 10 });
  res.json(result);
});

route.get('/models/second/10', async (req, res) => {
  const data = [];
  const result = await UserModel.findAll({ limit: 20 });
  for (let i = 10; i < result.length; i += 1) {
    data.push(result[i]);
  }
  res.json(data);
});

route.get('/models', async (req, res) => {
  const userId = req.session.userSession.id;
  // console.log(req.session);
  const result = await UserModel.findAll({
    where: { user_id: req.session.userSession.id }, include: LikeModel,
  });

  const new1 = JSON.parse(JSON.stringify(result));
  const final = (new1.map((el) => {
    const flag = el.LikeModels.findIndex((element) => +element.user_id === +userId);
    // console.log(flag);
    return { ...el, flag: flag > -1 };
  }));
  res.json(final);
});

route.get('/modelForSearch', async (req, res) => {
  const result = await UserModel.findAll();
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

route.post('/posts', async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const newPost = await Finder.create({ title, description, user_id: req.session.userSession.id });
  res.json(newPost);
});

route.get('/posts', async (req, res) => {
  const newPost = await Finder.findAll();
  res.json(newPost);
});

route.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  await Finder.destroy({ where: { id } });
  const allPosts = await Finder.findAll();
  res.json(allPosts);
});

module.exports = route;
