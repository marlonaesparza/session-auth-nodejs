const express = require('express');
const Session = require('./../../database/models/session');
const auth = require('./../middleware/sessionAuth');

const sessionRouter = express.Router();

sessionRouter.get('/createSession', auth.createSession, (req, res) => {
  let session = req.hpp_session;
  return res.json({ session });
});

sessionRouter.patch('/updateSession', (req, res) => {
  let { userUUID, hash } = req.body;
  return Session.update({ userUUID: userUUID }, {
    where: { hash: hash }
  })
    .then(updated => {
      return res.json({ updated });
    })
    .catch(error => {
      console.log(error);
      return res.json({});
    });
});

sessionRouter.delete('/deleteSession', (req, res) => {
  let { uuid } = req.body;
  console.log('Delete Session (UUID):', uuid, req.body);

  return Session.destroy({
    where: {
      userUUID: uuid
    }
  })
    .then(results => {
      console.log('Delete Session (result):', results);
      return res.json({});
    })
    .catch(error => {
      console.log(error);
      return res.json({});
    });
});

module.exports = sessionRouter;
