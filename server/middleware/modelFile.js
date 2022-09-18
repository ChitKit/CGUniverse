const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file?.fieldname === 'model') {
      cb(null, 'public/models');
    } else if (file?.fieldname === 'pic') {
      cb(null, 'public/img_models');
    } else {
      cb(null, 'public/MYCOP');
    }
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

// const types = ['glb'];

const fileFilter = (req, file, cb) => {
  // if (types.includes(file.mimetype)) {
  cb(null, true);
  // } else {
  //   cb(null, false);
  // }
};

module.exports = multer({ storage, fileFilter });
