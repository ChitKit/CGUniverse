const express = require('express');
const { UserModel } = require('../../db/models');

const route = express.Router();

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await UserModel.findOne({ where: { id } });
  res.json(result);
});

module.exports = route;
