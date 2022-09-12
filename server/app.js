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
const apiCategory = require('./routes/api/apiCategory');
const apiLikes = require('./routes/api/apiLikes');


const app = express();
const PORT = process.env.PORT ?? 3002;

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'cgu-cookie',
  secret: process.env.SECRET || 'digitalArt',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 0.5,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.use('/api', apiModels);
app.use('/auth', auth);
app.use('/api/like', apiModels);
app.use('/api/category', apiCategory);
app.use('/apilike', apiLikes);


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
