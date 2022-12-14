module.exports = app => {
  const user = require("../controllers/user.controller.js");

  const router = require("express").Router();
  
  // Retrieve all user
  router.get("/", user.findAll);
  
  // Create a new User
  router.post("/", user.create);

  // Retrieve a single User with id
  router.get("/:id", user.findOne);

  // Update a User with id
  router.put("/:id", user.update);

  // Delete a User with id
  router.delete("/:id", user.delete);

  // Delete all user
  router.delete("/", user.deleteAll);

  app.use('/api/user', router);
};
