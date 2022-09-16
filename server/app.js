require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
// const bcrypt = require('bcrypt');
const cors = require('cors');
const auth = require('./routes/api/apiAuth');
const apiModels = require('./routes/api/apiModels');
const apiComment = require('./routes/api/apiComment');
const apiCategory = require('./routes/api/apiCategory');
const apiLikes = require('./routes/api/apiLikes');
const apiMulter = require('./routes/api/apiMulter');

const app = express();
const PORT = process.env.PORT ?? 3002;

app.use(cors({
  origin: true,
  credentials: true,
}));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join('public')));
app.use(express.static(path.join('public2')));
app.use('/image', express.static(path.join(__dirname, 'image')));

const sessionConfig = {
  name: 'cgu-cookie',
  secret: process.env.SECRET || 'digitalArt',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.use('/api', apiModels);
app.use('/auth', auth);
app.use('/api/like', apiModels);
app.use('/api/comment', apiComment);
app.use('/api/category', apiCategory);
app.use('/apilike', apiLikes);
app.use('/upload', apiMulter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
