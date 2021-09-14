const express = require('express');
const auth = require('../middleware/sessionAuth');

const authRouter = express.Router();
authRouter.use(auth.authSession);

authRouter.get('/', (req, res) => {
  let session = req.query.session ?
    JSON.parse(req.query.session) :
    {};

  return res.json({ session });
});

module.exports = authRouter;
