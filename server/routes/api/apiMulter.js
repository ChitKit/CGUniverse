const express = require('express');
const fileMiddleware = require('../../middleware/file');
const modelFileMiddlewar = require('../../middleware/modelFile');
const { User } = require('../../db/models');

const router = express.Router();

router.post('/photoAvatar', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      console.log(req.session);
      const us = await User.findOne({ where: { id: req.session.userSession.id } });
      us.avatar = req.file.path;
      us.save();
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/model', modelFileMiddlewar.fields([
  { name: 'model', maxCount: 1 },
  { name: 'pic', maxCount: 1 },
]), (req, res) => {
  console.log(req.body);
});
// try {
//   if (req.file) {
//     console.log(req.session);
//     // const model = await UserModel.create({});
//   }
// } catch (error) {
//   console.log(error);
// }
// );

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
