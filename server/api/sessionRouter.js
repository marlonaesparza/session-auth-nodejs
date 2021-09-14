const express = require('express');
const Session = require('./../../database/models/session');
const auth = require('./../middleware/sessionAuth');

const sessionRouter = express.Router();

sessionRouter.get('/createSession', auth.createSession, (req, res) => {
  let session = req.hpp_session;
  return res.json({ session });
});

sessionRouter.patch('/updateSession', (req, res) => {
  let { uuid, hash } = req.body;

  return Session.update({ userUUID: uuid }, {
    where: { hash: hash }
  })
    .then(updated => {
      return res.json({ updated })
    })
    .catch(error => {
      console.log(error);
      return res.json({});
    })
});

module.exports = sessionRouter;
