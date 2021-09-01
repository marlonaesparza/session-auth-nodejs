require('dotenv').config({ path: __dirname + '/../.env' });
require('./../database/index');

const express = require('express');
const cookieParser = require('cookie-parser');
const partials = require('express-partials');
const sessionAuth = require('./middleware/sessionAuth');

const authRouter = require('./api/authRouter');
const homeRouter = require('./api/homeRouter');

const app = express();
const port = 8001;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(sessionAuth.createSession);

app.set('view engine', 'ejs');
app.use(partials());

app.use('/auth', authRouter);
app.use('/home', homeRouter);

app.get('/', sessionAuth.authSession, (req, res) => {
  res.redirect('/home');
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
