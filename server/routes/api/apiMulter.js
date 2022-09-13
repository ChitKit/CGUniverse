const express = require('express');
const fileMiddleware = require('../../middleware/file');

const router = express.Router();

router.post('/photoAvatar', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
