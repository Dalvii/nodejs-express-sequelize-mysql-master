module.exports = app => {
  const message = require("../controllers/message.controller.js");

  const router = require("express").Router();
  
  // Retrieve all message
  router.get("/", message.findAll);
  
  // Create a new message
  router.post("/", message.create);

  // Retrieve a single message with id
  router.get("/:id", message.findOne);

  // Retrieve messages from channel id
  router.get("/channel/:channelId", message.findByChannel);

  // Retrieve messages from sender id
  router.get("/sender/:senderId", message.findBySender);

  // Update a message with id
  router.put("/:id", message.update);

  // Delete a message with id
  router.delete("/:id", message.delete);

  // Delete all message
  router.delete("/", message.deleteAll);

  app.use('/api/message', router);
};
