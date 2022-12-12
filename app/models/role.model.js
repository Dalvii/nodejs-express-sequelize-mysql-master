module.exports = (sequelize, Sequelize) => {
	const Role = sequelize.define('Roles', {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		// channel: {
		// 	type: Sequelize.INTEGER,
		// 	references: {
		// 		model: 'Channels',
		// 		key: 'id'
		// 	}
		// }
	});

	return Role;
};
