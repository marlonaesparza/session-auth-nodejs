const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  let firstName = 'Marlon';
  let lastName = 'Esparza';
  let age = 24;

  res.render('index', {
    firstName,
    lastName,
    age
  });
});

module.exports = homeRouter;
