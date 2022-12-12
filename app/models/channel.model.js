module.exports = (sequelize, Sequelize) => {
	const Channel = sequelize.define("Channels", {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		type: {
			type: Sequelize.STRING
		},
	});

	return Channel;
};
