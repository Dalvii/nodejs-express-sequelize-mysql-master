module.exports = app => {
  const channel = require("../controllers/channel.controller.js");

  const router = require("express").Router();
  
  // Retrieve all channel
  router.get("/", channel.findAll);
  
  // Create a new channel
  router.post("/", channel.create);

  // Retrieve a single channel with id
  router.get("/:id", channel.findOne);

  // Update a channel with id
  router.put("/:id", channel.update);

  // Delete a channel with id
  router.delete("/:id", channel.delete);

  // Delete all channel
  router.delete("/", channel.deleteAll);

  app.use('/api/channel', router);
};
