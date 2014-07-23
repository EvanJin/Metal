var config = require('../config/mysql/config');
var Sequelize = require('sequelize');

var seq = new Sequelize(config.db_name, config.user, config.password, {
  host: config.host,
  port: config.port
});

module.exports = seq;
