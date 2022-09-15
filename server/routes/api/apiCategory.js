/* eslint-disable arrow-body-style */
const express = require('express');
const { Category, UserModel, LikeModel, User } = require('../../db/models');

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
  const userId = req.session.userSession.id;
  const { categ } = req.params;
  // console.log(categ, 'CCCCCCCCCCCCCCCCCCCCCC');
  if (categ === 'allModels' || categ === 'Все категории') {
    const result = await UserModel.findAll({ include: [Category, LikeModel, User] });

    const new1 = JSON.parse(JSON.stringify(result));
    const final = (new1.map((el) => {
      console.log(el);
      const flag = el.LikeModels.findIndex((element) => {
        // console.log(userId, 'USER_ID');
        // console.log(element.user_id, 'element.user_id');
        return +element.user_id === +userId;
      });
      console.log(flag, 'FLAG');
      return { ...el, flag: flag > -1 };
    }));
      // console.log(final, 'final');
    return res.json({ UserModels: final });
  }

  const result = await Category.findOne({ include: { model: UserModel, include: LikeModel }, where: { name: categ } });

  console.log(result, 'REESSSSS!!!!!');
  const new1 = JSON.parse(JSON.stringify(result));
  // console.log(new1);
  console.log(new1, 'NEW!!!!!!!');
  const final = (new1.UserModels.map((el) => {
    const flag = el.LikeModels.findIndex((element) => {
      // console.log(userId, 'USER_ID');
      // console.log(element.user_id, 'element.user_id');
      return +element.user_id === +userId;
    });
      // console.log(flag, 'FLAG');
    return { ...el, flag: flag > -1 };
  }));
  console.log(final);
  return res.json({ UserModels: final });
});

router.get('/allModels', async (req, res) => {
  const result = await UserModel.findAll({ include: [Category, LikeModel] });
  res.json(result);
});

module.exports = router;
