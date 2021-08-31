const express = require('express');
const cookieParser = require('cookie-parser');
const partials = require('express-partials');

const app = express();
const port = 8000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(partials());

const homeRouter = require('./api/homeRouter');
app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
