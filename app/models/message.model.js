module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define('Messages', {
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        sender: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        channel: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Channels',
                key: 'id'
            }
        }
    });
    return Message;
};
