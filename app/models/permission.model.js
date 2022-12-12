module.exports = (sequelize, Sequelize) => {
    const Permission = sequelize.define('Permissions', {
        action: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Roles',
                key: 'id'
            }
        }
    });
    return Permission;
};