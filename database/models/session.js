const {connection, sequelize} = require('./../index');

const Session = connection.define('Session', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  hash: {
    type: sequelize.DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  userUUID: {
    type: sequelize.DataTypes.STRING,
    allowNull: true,
    unique: true
  }
}, {
  tableName: 'sessions'
});

Session.sync({force: true})
  .then(() => {
    console.log('Session table recreated successfully');
  })

module.exports = Session;