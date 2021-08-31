const Bluebird = require('bluebird');
const Session = require('./../../database/models/session');
const { createHash } = require('./../lib/hash');

const createSession = (req, res, next) => {
  Bluebird.resolve(req.cookies.session)
    .then(hash => {
      if (!hash) {
        throw hash;
      };

      return Session.findOne({ where: { hash } });
    })
    .then(session => {
      if (!session) {
        throw session;
      };

      return session;
    })
    .catch(() => {
      let hash = createHash();

      return Session.create({ hash })
        .then(session => {
          return Session.findOne({ where: { id: session.id } });
        })
        .then(session => {
          res.cookie('session', session.hash);
          return session;
        })
    })
    .then(session => {
      req.session = session;
      next();
    })
    .error(error => {
      console.log(error);
      next();
    });
};

const authSession = (req, res, next) => {
  Bluebird.resolve(req.session.userUUID)
    .then(userUUID => {
      if (!userUUID) {
        throw userUUID;
      };

      next();
    })
    .catch(() => {
      res.redirect('auth/login');
    });
};

module.exports = {
  createSession,
  authSession
};
