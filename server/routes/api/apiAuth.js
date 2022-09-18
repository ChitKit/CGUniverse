const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const route = express.Router();

route.get('/auth', async (req, res) => {
  try {
    const result = await User.findByPk(req.session.userSession.id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

route.post('/registration', async (req, res) => {
  const { email, password, name } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const newUser = await User.create({ email, name, password: hashPassword });
      req.session.userSession = {
        email: newUser.email, name: newUser.name, id: newUser.id, bio: newUser.bio,
      };
      return res.json({
        email: newUser.email, name: newUser.name, id: newUser.id, avatar: newUser.avatar,
      });
    }
    res.status(400).json({ message: 'Такой email уже занят' });
  } catch (err) {
    console.error(err);
  }
});

route.post('/login', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.userSession = {
          email: user.email, name: user.name, id: user.id, bio: user.bio,
        };
        return res.json({
          email: user.email, name: user.name, id: user.id, avatar: user.avatar,
        });
      }
    }
    res.status(400).json({ message: 'Email или пароль не верны' });
  } catch (err) {
    console.error(err);
  }
});

route.patch('/bioEdit', async (req, res) => {
  const { bio } = req.body;
  console.log(">>>>>>>>>>>>>>>>>", bio);
  // console.log('SESSSSION', req.session);
  // console.log(name, email);
  try {
    await User.update({ bio }, {
      where: { id: req.session.userSession.id },
    });
    const user = await User.findOne({ where: { id: req.session.userSession.id } });
    req.session.userSession = {
      bio: user.bio, id: req.session.userSession.id,
    };
    res.json(user);
  } catch (err) {
    console.error(err);
  }
});

route.patch('/profileEdit', async (req, res) => {
  const {
    name, email,
  } = req.body;
  // console.log('SESSSSION', req.session);
  // console.log(name, email);
  try {
    await User.update({ name, email }, {
      where: { id: req.session.userSession.id },
    });
    const user = await User.findOne({ where: { id: req.session.userSession.id } });
    req.session.userSession = {
      email: user.email, name: user.name, id: req.session.userSession.id,
    };
    console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
  }
});

route.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

module.exports = route;
