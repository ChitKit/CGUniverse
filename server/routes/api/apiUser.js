const express = require('express');
const { User } = require('../../db/models');

const route = express.Router();

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { avatar } = await User.findOne({ where: { id } });
  res.json(avatar);
});

module.exports = route;
