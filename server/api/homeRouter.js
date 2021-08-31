const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  let firstName = 'Marlon';
  let lastName = 'Esparza';

  res.render('pages/index', {
    firstName,
    lastName
  });
});

module.exports = homeRouter;
