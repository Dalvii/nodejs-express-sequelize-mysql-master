const db = require("../models");
const Role = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new Role
exports.create = (req, res) => {
	// Validate request
	if (!req.body.name || !req.body.channel) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	// Create a Role
	const { name, channel } = req.body

	// Save Role in the database
	Role.create({ name, channel })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Tutorial."
			});
		});
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
	const role = req.query.role;
	const condition = role ? { role: { [Op.like]: `%${role}%` } } : null;

	Role.findAll({ where: condition })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving roles."
			});
		});
};

// Find a single Role with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Role.findByPk(id)
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Role with id=${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Role with id=" + id
			});
		});
};

// Update a Role by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Role.update(req.body, {
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: "Role was updated successfully."
				});
			} else {
				res.send({
					message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error updating Role with id=" + id
			});
		});
};

// Delete a Role with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Role.destroy({
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: "Role was deleted successfully!"
				});
			} else {
				res.send({
					message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Could not delete Role with id=" + id
			});
		});
};

// Delete all Role from the database.
exports.deleteAll = (req, res) => {
	Role.destroy({
		where: {},
		truncate: false
	})
		.then(nums => {
			res.send({ message: `${nums} Role were deleted successfully!` });
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while removing all Roles."
			});
		});
};

