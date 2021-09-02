require('dotenv').config({ path: __dirname + '/../.env' });
require('./../database/index');

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sessionAuth = require('./middleware/sessionAuth');

const sessionRouter = require('./api/sessionRouter');
const authRouter = require('./api/authRouter');

const app = express();
const port = 8001;

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/session', sessionRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
