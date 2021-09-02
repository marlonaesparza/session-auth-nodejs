const express = require('express');
const auth = require('../middleware/sessionAuth');

const authRouter = express.Router();
authRouter.use(auth.authSession);

authRouter.get('/', (req, res) => {
  // Upon authorized session:
  // 1. get home   
});

module.exports = authRouter;
