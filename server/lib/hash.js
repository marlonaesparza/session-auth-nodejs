const crypto = require('crypto');

const createRandom32String = () => {
  return crypto.randomBytes(32).toString('hex');
};

const createHash = (salt = '') => {
  let data = createRandom32String();
  let shasum = crypto.createHash('sha256');
  shasum.update(data + salt);
  return shasum.digest('hex');
};

module.exports = {
  createHash
};