const express = require('express');
const auth = require('./../middleware/sessionAuth');

const sessionRouter = express.Router();
sessionRouter.use(auth.createSession);

sessionRouter.get('/createSession', (req, res) => {
  let session = req.hpp_session;
  res.json({ session });
});

module.exports = sessionRouter;
