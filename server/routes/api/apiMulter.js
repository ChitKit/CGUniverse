const express = require('express');
const fileMiddleware = require('../../middleware/file');
const modelFileMiddlewar = require('../../middleware/modelFile');
const { User, UserModel, Finder } = require('../../db/models');

const router = express.Router();

router.post('/photoAvatar', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      console.log(req.session);
      const us = await User.findOne({ where: { id: req.session.userSession.id } });
      us.avatar = req.file.path;
      us.save();
      res.json(us);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/FphotoAvatar', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const us = await Finder.findOne({ where: { id: req.session.userSession.id } });
      us.images = req.file.path;
      us.save();
      res.json(us);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/model', modelFileMiddlewar.fields([
  { name: 'model', maxCount: 1 },
  { name: 'pic', maxCount: 1 },
]), async (req, res) => {
  try {
    if (req.files) {
      console.log(req.body, 'kkkkkkkkkkkk');
      console.log(+req.body.categ_id);
      const modelPath = req?.files?.model?.[0]?.path.slice(6);
      const imgPath = req?.files?.pic?.[0]?.path.slice(6);
      await UserModel.create({
        name: req.body.name, path: modelPath, pic: imgPath, user_id: req.session.userSession.id, categ_id: +req.body.categ_id,
      });
      res.sendStatus(200);
      // console.log(imgPath);
      // console.log(req.session.userSession.id);

      // console.log(req.session);
      // const model = await UserModel.create({});
    }
  } catch (error) {
    console.log(error);
  }
});

// router.patch('/photoAvatar', fileMiddleware.single('avatar'), async (req, res) => {
//   console.log(req.file);
//   try {
//     console.log(req.file);
//     const { id, avatar } = req.body;
//     await User.update({ id }, {
//       where: { id: req.session.userSession.id },
//     });
//     const user = await User.findOne({ where: { id: req.session.userSession.id } });
//     req.session.userSession = {
//       avatar: req.file.path, id: req.session.userSession.id,
//     };
//     // console.log(file);
//     console.log(user);
//     res.json(user);

//     res.json(req.file);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
