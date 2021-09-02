const Bluebird = require('bluebird');
const Session = require('./../../database/models/session');
const { createHash } = require('./../lib/hash');

const createSession = (req, res, next) => {
  let hpp_session = req.query;
  console.log('7 CREATE SESSION:', hpp_session);
  Bluebird.resolve(hpp_session)
    .then(session => {
      if (!session.hash) {
        throw session;
      };
      return Session.findOne({ where: { hash: session.hash } });
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
    })
    .then(session => {
      req.hpp_session = session.dataValues;
      next();
    })
    .error(error => {
      // TODO:
      // 1. Provide better error experience.
      console.log(error);
    });
};

const authSession = (req, res, next) => {
  let session = req.query.session ?
    JSON.parse(req.query.session) :
    undefined;

  Bluebird.resolve(session)
  .then(session => {
    if (!session.userUUID) {
      throw session;
    };
    next();
  })
  .catch(session => {
      let queryString = session ?
        Object.keys(session)
          .map(key => `${key}=${session[key]}`)
          .join('&')
        : '';

      res.redirect(`session/createSession?${queryString}`);
    });
};

module.exports = {
  createSession,
  authSession
};
