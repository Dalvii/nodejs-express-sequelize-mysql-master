const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");


const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite'
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model")(sequelize, Sequelize);
db.channels = require("./channel.model")(sequelize, Sequelize);
db.messages = require("./message.model")(sequelize, Sequelize);
db.roles = require("./role.model")(sequelize, Sequelize);

module.exports = db;
